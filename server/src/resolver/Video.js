// Trả lại tác giả của video
function user(parent, args, context) {
    return context.prisma.video
        .findUnique({
            where: { id: parent.id },
        }).user()
};

// Trả lại thông tin like mà video có
function videoLikes(parent, args, context) {
    return context.prisma.video
        .findUnique({
            where: { id: parent.id }
        }).videoLikes()
};

// Trả lại thông tin lượt xem của video
function views(parent, args, context) {
    return context.prisma.video.findUnique({ where: { id: parent.id } }).views()
};

// Trả lại thông tin các comment của video: Lấy danh sách các comment
function comments(parent, args, context) {
    return context.prisma.video.findUnique({ where: { id: parent.id } }).comments()
};

// Xuất bản các module
module.exports = {
    user,
    videoLikes,
    comments,
    views,
}