//  Trả lại videos(danh sánh video) của người dùng: hay giải quyết mối liên kết giữa user với videos
function videos(parent, args, context) {
    return context.prisma.user.findUnique({
        where: { id: parent.id }
    }).videos()
};

// Giải quyết mối liên kết giữa user với videoLikes: Lấy về danh sách video mà người dùng đã thích
function videoLikes(parent, args, context) {
    return context.prisma.user.findUnique({
        where: { id: parent.id }
    }).videoLikes()
};

// Giải quyết mối liên kết giữa user với views: lấy về danh sách người dùng đã xem video
function view(parent, args, context) {
    return context.prisma.user.findUnique({
        where: { id: parent.id }
    }).view()
};

// Lấy về danh sách các comment của user
function comment(parent, args, context) {
    return context.prisma.user.findUnique({
        where: { id: parent.id }
    }).comment()
};

// Lấy về danh sách người đã theo dõi user
function subscribers(parent, args, context) {
    return context.prisma.user.findUnique({ where: { id: parent.id } }).subscribers()
};

// Lấy về danh sách người dùng mà user theo dõi
function subscribedTo(parent, args, context) {
    return context.prisma.user.findUnique({ where: { id: parent.id } }).subscribedTo()
};

// Xuất bản các module
module.exports = {
    videos,
    videoLikes,
    view,
    comment,
    subscribers,
    subscribedTo

}