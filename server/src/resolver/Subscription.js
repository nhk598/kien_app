// nhận được thông báo khi có video mới
function newVideoSubscribe(parent, args, context, info) {
    return context.pubsub.asyncIterator("NEW_VIDEO")
}

const newVideo = {
    subscribe: newVideoSubscribe,
    resolve: payload => {
        return payload
    },
}

// thông báo khi nhận được videoLike
function newVideoLikeSubscribe(parent, args, context, info) {
    return context.pubsub.asyncIterator("NEW_VIDEOLIKE")
}

const newVideoLike = {
    subscribe: newVideoLikeSubscribe,
    resolve: payload => {
        return payload
    },
}

// Thông báo khi có lượt xem mới
function newViewSubscribe(parent, args, context) {
    return context.pubsub.asyncIterator("NEW_VIEW")
}
const newView = {
    subscribe: newViewSubscribe,
    resolve: payload => {
        return payload
    },
}

// Thông báo khi có bình luận mới
function newCommentSubscribe(parent, args, context) {
    return context.pubsub.asyncIterator("NEW_COMMNET")
}
const newComment = {
    subscribe: newCommentSubscribe,
    resolve: payload => {
        return payload
    },
}

// Xuất bản các module
module.exports = {
    newVideo,
    newVideoLike,
    newView,
    newComment,
}