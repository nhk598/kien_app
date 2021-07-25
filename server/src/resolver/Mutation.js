const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../utils')

// Đăng ký người dùng mới
async function signup(parent, args, context) {
    // Mã hóa password thành chuỗi không thể dịch lại dược trong db nhờ bcrypt
    const password = await bcrypt.hash(args.password, 10);
    // Lưu lại mật khẩu sau khi mã hóa lại vào args
    const args1 = {...args, password };
    // Tạo một người dùng mới
    const user = await context.prisma.user.create({
        data: {
            email: args1.email,
            password: args1.password,
            username: args1.username
        }
    });
    // Trả lại đoạn mã token nhờ jwt và đươc ký bởi APP_SECRET
    const token = jwt.sign({ userId: user.id }, APP_SECRET);
    // xuất bản token và user sau khi đăng ký thành công
    return {
        token,
        user
    };
};

// Đăng nhập
async function login(parent, args, context) {
    // Tìm người dùng theo email
    const user = await context.prisma.user.findUnique({ where: { email: args.email } })
        // Không có người dùng thì trả lại lỗi
    if (!user) {
        throw new Error('No such user found')
    };
    // Sau khi tìm thấy user: sử dụng hàm của bcrypt để mã hóa args.password và so sanh với password trong db
    const valid = await bcrypt.compare(args.password, user.password);
    // Nếu không trùng khớp password thì trả lại lỗi
    if (!valid) {
        throw new Error('Invalid password')
    };
    // Trả lại token sau sác thực bằng jwt và ký bằng APP_SECRET
    const token = jwt.sign({ userId: user.id }, APP_SECRET);
    // Xuất bản token và user khi đã login thành công
    return {
        token,
        user,
    };
};

// Hàm tạo user không biết nên giữ lại không
async function createUser(parent, args, context) {
    const newUser = await context.prisma.user.create({
        data: {
            username: args.data.username,
            email: args.data.email,
            avatar: args.data.avatar,
            cover: args.data.cover,
            about: args.data.about,
            videos: {
                create: args.data.videos,
            },
        },
    })
    return newUser

};

// Tạo video mới
async function createVideo(parent, args, context) {
    // Lấy id từ người dùng đã đăng nhập thành công
    const { userId } = context
    // tạo video mới
    const newVideo = await context.prisma.video.create({
        data: {
            title: args.data.title,
            description: args.data.description,
            url: args.data.url,
            thumbnail: args.data.thumbnail,
            document: args.data.document,
            user: {
                // Kết nối user bằng userId với video mới
                connect: { id: userId },
            },
        },
    })
    context.pubsub.publish("NEW_VIDEO", newVideo)
        // Trả lại video mới
    return newVideo
};

// Sửa thông tin user
async function publishUser(parent, args, context) {
    // Lấy id của người dùng đã đăng nhập
    const { userId } = context
    // Sửa thông tin người dùng
    const publishUser = context.prisma.user.update({
            where: {
                id: userId
            },
            data: {
                username: args.username,
                email: args.email,
                avatar: args.avatar,
                cover: args.cover,
                about: args.cover,
                password: args.password
            }

        })
        // trả về thông tin mới sau khi sửa
    return publishUser
};

// sửa thông tin video
async function publishVideo(parent, args, context) {
    // Lấy về id người dùng đã đăng nhập thành công
    const { userId } = context
    // Sửa thông tin video
    const publishVideo = await context.prisma.video.update({
            where: {
                id: args.id
            },
            data: {
                title: args.title,
                description: args.description,
                url: args.url,
                thumbnail: args.thumbnail,
                document: args.document,
                user: {
                    // Kết nối user bằng userId với video mới cái này có cần thiết không cần test lại vì trước đó đã kết nối rồi
                    connect: { id: userId },
                },
            }

        })
        // Trả lại thông tin video đã được sửa
    return publishVideo
};

// Thêm like cho video chưa thành công
async function videoLike(parent, args, context, info) {
    // Xác thực người dùng qua jwt và lấy id người dùng  
    const { userId } = context
    // const where = [{
    //         videoId: args.videoId
    //     },
    //     { userId: userId }
    // ]
    async function videoLike(parent, args, context) {
        return await context.prisma.videoLike.findUnique({
            where: {
                videoId_userId: {
                    videoId: args.videoId,
                    userId: userId
                }

            },
        });
    }

    //  Tìm kiếm xem người dùng đã like video hay chưa
    // const videoLike = await context.prisma.videoLike.findUnique({
    //     where,
    // })

    // nếu rồi thì chả lại thông báo lỗi
    if (Boolean(videoLike)) {
        throw new Error(`Already videoLiked for video: ${args.videoId}`)
    }

    // nếu user chưa videoLike thực hiện thêm một videoLike mới từ user đã đăng nhập
    const newVideoLike = context.prisma.videoLike.create({
            data: {
                user: { connect: { id: userId } },
                video: {
                    connect: { id: args.videoId }
                },

            }
        })
        // Thông báo cho người dùng rằng có người like video
    context.pubsub.publish("NEW_VIDEOLIKE", newVideoLike)

    return newVideoLike
};

// Thêm lượt xem cho video khi người dùng xem video
async function view(parent, args, context) {
    const { userId } = context
    const newView = context.prisma.view.create({
            data: {
                user: { connect: { id: userId } },
                video: {
                    connect: { id: args.videoId }
                },
            }
        })
        // thông báo khi có lượt xem mới
    context.pubsub.publish("NEW_VIEW", newView)
    return newView
};

// Thêm comment khi người dùng comment video
async function comment(parent, args, context) {
    const { userId } = context
    const newComment = context.prisma.comment.create({
            data: {
                user: { connect: { id: userId } },
                video: {
                    connect: { id: args.videoId }
                },
                text: args.text,
            }
        })
        // thông báo khi có comment mới
    context.pubsub.publish("NEW_COMMENT", newComment)
    return newComment
};

// Thêm kênh đăng ký khi người dùng đăng ký kênh
async function userSubscription(parent, args, context) {
    const { userId } = context
    const newUserSubscription = context.prisma.userSubscription.create({
            data: {
                subscriber: { connect: { id: userId } },
                subscribedTo: {
                    connect: { id: args.userId }
                },
            }
        })
        // Thông báo với người dùng là có người đang ký kênh cái này chưa hoàn thành
    context.pubsub.publish("NEW_USEESUBCRIPTION", newUserSubscription)
    return newUserSubscription
};

// Xuất bản các module
module.exports = {
    login,
    signup,
    createUser,
    createVideo,
    publishUser,
    publishVideo,
    videoLike,
    view,
    comment,
    userSubscription,
}