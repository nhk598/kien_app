const { ApolloServer } = require('apollo-server')
    // import schema
const typeDefs = require('./schema/schema')
    // import resolvers
    // const resolvers = require('./resolver/resolver')
const Query = require('./resolver/Query')
const Mutation = require('./resolver/Mutation')
const User = require('./resolver/User')
const Subscription = require('./resolver/Subscription')
const Video = require('./resolver/Video')
const VideoLike = require('./resolver/VideoLike')
const View = require('./resolver/View')
const Comment = require('./resolver/Comment')
const UserSubscription = require('./resolver/UserSubscription')
const cors = require('cors')
    // import prisma =>kết nối database
const { prisma } = require('../db/Data')
const depthLimit = require('graphql-depth-limit')
const fs = require('fs');
// import module xác định userId từ req
const { getUserId } = require('./utils');

const { PubSub } = require('apollo-server')
const pubsub = new PubSub()

const resolvers = {
    Query,
    Mutation,
    User,
    Video,
    Subscription,
    VideoLike,
    View,
    Comment,
    UserSubscription,
}
const server = new ApolloServer({
    resolvers,
    typeDefs,
    // Giới hạn độ sau của truy vấn là 4
    validationRules: [depthLimit(4)],
    context: ({ req }) => {
        return {
            ...req,
            prisma,
            pubsub,
            userId: req && req.headers.authorization ?
                getUserId(req) : null
        };
    }
});

server.listen()
    .then(({ url }) =>
        console.log(`Server is running on ${url}`)
    );