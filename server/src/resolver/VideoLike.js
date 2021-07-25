// Trả lại thông tin video của lượt likeVideo
function video(parent, args, context) {
    return context.prisma.videoLike.findUnique({ where: { id: parent.id } }).video()
}

// Trả lại thông tin tác giả của lượt likeVideo
function user(parent, args, context) {
    return context.prisma.videoLike.findUnique({ where: { id: parent.id } }).user()
}

// Xuất bản các user
module.exports = {
    video,
    user,
}