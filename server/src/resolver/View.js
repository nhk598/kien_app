// Trả lại thông tin video của lượt xem

function video(parent, args, context) {
    return context.prisma.view.findUnique({ where: { id: parent.id } }).video()
}

// Trả lại tác giả của lượt xem video
function user(parent, args, context) {
    return context.prisma.view.findUnique({ where: { id: parent.id } }).user()
}

// Xuất bản các module
module.exports = {
    video,
    user,
}