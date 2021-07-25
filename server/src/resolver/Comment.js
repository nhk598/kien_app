// Trả về video của comment
function video(parent, args, context) {
    return context.prisma.comment.findUnique({ where: { id: parent.id } }).video()
}

// Trả về người dùng đã comment
function user(parent, args, context) {
    return context.prisma.comment.findUnique({ where: { id: parent.id } }).user()
}

// Xuất bản các module
module.exports = {
    video,
    user,
}