// Lấy về danh sách tất cả người dùng
async function users(parent, args, context) { return await context.prisma.user.findMany(); }

// Lấy về người dùng theo id
async function user(parent, args, context) { return await context.prisma.user.findUnique({ where: { id: (args.id) } }); }


// Lấy về danh sách tất cả video của tât cả mọi người
async function videos(parent, args, context) {
    return await context.prisma.video.findMany();
}

// Lấy về video theo id
async function video(parent, args, context) {

    return await context.prisma.video.findUnique({
        where: {
            id: (args.id),
        },

    });

}

// Lấy các video tìm kiếm
async function videosSearch(parent, args, context) {
    // Lưu lại trong bộ nhớ cache trong 1 phút = 60s
    // info.cacheControl.setCacheHint({ maxAge: 60 });
    // Thiết lập điều kiện tìm kiếm theo tham số truyền vào filter
    const where = args.filter ? {
            OR: [
                // Kiểm tra xem video có title giống filter đã nhập không
                { title: { contains: args.filter } },
                // Kiểm tra xem video có descriptiong giống với filter đã nhập không
                { description: { contains: args.filter } }
            ],
        } : {}
        // Tìm kiếm danh sách video 
    const videosSearch = await context.prisma.video.findMany({
        where,
        // Thiêt lâp vị trí đầu tiên hiện thị trong mảng
        skip: Number(args.skip) || 0,
        // Thiết lập vị trí cuối cùng hiện thị trong mảng kết quả
        // Vì đầu vào ở schema để take= String nên cần chuyển đổi sang Number vì mặc định take là Number
        take: Number(args.take) || 10,
        orderBy: {
            // Săp xếp theo chiều tăng dần khoảng thời gian
            createdAt: "desc",
        },
    })
    return videosSearch
}

// Lấy về danh sách video đề xuất
async function videosRecommended(parent, args, context, info) {
    // Lưu lại trong bộ nhớ cache trong 6h=6*60*60 = 216000s
    info.cacheControl.setCacheHint({ maxAge: 60 });
    const videosRecommended = await context.prisma.video.findMany({
        // Thiêt lâp vị trí đầu tiên hiện thị trong mảng
        skip: 0,
        // Thiết lập vị trí cuối cùng hiện thị trong mảng kết quả
        take: 10,
        orderBy: {
            // Săp xếp theo chiều tăng dần khoảng thời gian
            createdAt: "desc",
        },
    })
    return videosRecommended
}

// Lấy về các comment của video
async function comment(parent, args, context) {
    const comment = await context.prisma.comment.findMany({
        where: { videoId: args.videoId },
        orderBy: {
            // Săp xếp theo chiều tăng dần khoảng thời gian
            createdAt: "desc",
        },
    })
    return comment
}

// Lấy về các video của user
async function videosUser(parent, args, context) {

    const videosUser = await context.prisma.video.findMany({
        where: {
            userId: args.userId
        },
        // Thiêt lâp vị trí đầu tiên hiện thị trong mảng
        skip: Number(args.skip) || 0,
        // Thiết lập vị trí cuối cùng hiện thị trong mảng kết quả
        // Vì đầu vào ở schema để take= String nên cần chuyển đổi sang Number vì mặc định take là Number
        take: Number(args.take) || 10,
        orderBy: {
            createdAt: "desc"
        }
    })
    return videosUser
}

// userManage

// Lấy về thông tin userManage
async function userManage(parent, args, context) {
    const { userId } = context

    return await context.prisma.user.findUnique({ where: { id: userId } });
}
// Lấy về video mà user đã like theo id của video
async function videoLike(parent, args, context) {
    const { userId } = context;

    const videoLike = await context.prisma.videoLike.findUnique({
        where: {
            userId_videoId: {
                userId: userId,
                videoId: (args.videoId),
            }
        }

    })
    return videoLike
}

// Lấy về danh sách các video mà user đã like
async function videosLike(parent, args, context) {
    const { userId } = context;
    const videosLike = await context.prisma.videoLike.findMany({
        where: {
            userId: userId,
        },
        // Thiêt lâp vị trí đầu tiên hiện thị trong mảng
        skip: Number(args.skip) || 0,
        // Thiết lập vị trí cuối cùng hiện thị trong mảng kết quả
        // Vì đầu vào ở schema để take= String nên cần chuyển đổi sang Number vì mặc định take là Number
        take: Number(args.take) || 10,
        // Sắp xếp theo thứ tự đã like gần đây nhất
        orderBy: {
            createdAt: "desc"
        }
    })
    return videosLike
}


// Lấy về danh sách video mà người dùng đã xem
async function videosWatched(parent, args, context) {
    const { userId } = context;

    const view = await context.prisma.view.findMany({
        where: {
            userId: userId
        },
        // Thiêt lâp vị trí đầu tiên hiện thị trong mảng
        skip: Number(args.skip) || 0,
        // Thiết lập vị trí cuối cùng hiện thị trong mảng kết quả
        // Vì đầu vào ở schema để take= String nên cần chuyển đổi sang Number vì mặc định take là Number
        take: Number(args.take) || 10,
        // Sắp xếp theo thứ tự xem gần đây nhất
        orderBy: {
            createdAt: "desc"
        }
    })
    return view
}

// Lấy về dah sách videos của userManage
async function videosUserManage(parent, args, context) {
    const { userId } = context;
    const videosUserManage = context.prisma.video.findMany({
        where: {
            userId: userId
        },
        // Thiêt lâp vị trí đầu tiên hiện thị trong mảng
        skip: Number(args.skip) || 0,
        // Thiết lập vị trí cuối cùng hiện thị trong mảng kết quả
        // Vì đầu vào ở schema để take= String nên cần chuyển đổi sang Number vì mặc định take là Number
        take: Number(args.take) || 10,
        // Sắp xếp theo thứ tự xem gần đây nhất
        orderBy: {
            createdAt: "desc"
        }
    })
    return videosUserManage

}

async function subscribedTo(parent, args, context) {
    const { userId } = context;
    const subscribedTo = context.prisma.userSubscription.findMany({
        where: {
            subscriberId: userId
        },
        // Sắp xếp theo thứ tự xem gần đây nhất
        orderBy: {
            createdAt: "desc"
        }
    })
    return subscribedTo
}

// Xuất bản các module
module.exports = {
    users,
    user,
    videos,
    video,
    videosSearch,
    videosRecommended,
    userManage,
    comment,
    videoLike,
    videosWatched,
    videosUser,
    videosUserManage,
    videosLike,
    subscribedTo
}