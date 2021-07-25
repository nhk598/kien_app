const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../utils')
const resolvers = {

    Query: {
        // lấy về danh sách tất cả người dùng
        users: async(parent, args, context) => await context.prisma.user.findMany(),
        // lấy về người dùng theo id
        user: async(parent, args, context) => await context.prisma.user.findUnique({ where: { id: (args.id) } }),
        // lấy về danh sách tất cả video của tât cả mọi người
        videos: (parent, args, context) => context.prisma.video.findMany(),
        // lấy về video theo id
        video: async(parent, args, context) => await context.prisma.video.findUnique({ where: { id: (args.id) } }),
    },



    // tao them du lieu
    Mutation: {
        createUser: async(parent, args, context) => {
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

        },
        createVideo: async(parent, args, context) => {
            const { userId } = context
            const newVideo = await context.prisma.video.create({
                data: {
                    title: args.data.title,
                    description: args.data.description,
                    url: args.data.url,
                    thumbnail: args.data.thumbnail,
                    document: args.data.document,
                    user: {
                        connect: { id: userId },
                    },
                },
            })
            return newVideo
        },
        // createVideo: async(parent, args, context) => {
        //     const newVideo = await context.prisma.video.create({
        //         data: {
        //             title: args.data.title,
        //             description: args.data.description,
        //             url: args.data.url,
        //             thumbnail: args.data.thumbnail,
        //             document: args.data.document,
        //             user: {
        //                 connect: { id: args.data.userId },
        //             },
        //         },
        //     })
        //     return newVideo
        // },
        publishUser: (parent, args, context) => {
            return context.prisma.user.update({
                where: {
                    id: args.id
                },
                data: {
                    username: args.username,
                    email: args.email,
                    avatar: args.avatar,
                    cover: args.cover,
                    about: args.cover
                }

            })
        },
        publishVideo: (parent, args, context) => {
            return context.prisma.video.update({
                where: {
                    id: args.id
                },
                data: {
                    title: args.title,
                    description: args.description,
                    url: args.url,
                    thumbnail: args.thumbnail,
                    document: args.document,
                }

            })
        },
        signup: async(parent, args, context) => {
            const password = await bcrypt.hash(args.password, 10);
            const args1 = {...args, password };
            const user = await context.prisma.user.create({
                data: {
                    email: args1.email,
                    password: args1.password,
                    username: args1.username
                }
            });
            const token = jwt.sign({ userId: user.id }, APP_SECRET);
            return {
                token,
                user
            };
        },
        login: async(parent, args, context) => {
            const user = await context.prisma.user.findUnique({ where: { email: args.email } })
            if (!user) {
                throw new Error('No such user found')
            };
            const valid = await bcrypt.compare(args.password, user.password);
            if (!valid) {
                throw new Error('Invalid password')
            };
            const token = jwt.sign({ userId: user.id }, APP_SECRET);
            return {
                token,
                user,
            };
        }
    },
    // lấy về tác giả của video
    Video: {
        user: (parent, args, context) => {
            return context.prisma.video
                .findUnique({
                    where: { id: parent.id },
                }).user()
        },
    },

    // lấy về danh sách video của user 000----cais nay bij mat neu cais Video: {user co}----000
    User: {
        videos: (parent, args, context) =>
            context.prisma.user.findUnique({ where: { id: parent.id } }).videos(),
    },

}
module.exports = resolvers