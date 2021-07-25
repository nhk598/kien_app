// Trả lại danh sách người đăng ký kênh
function subscriber(parent, args, context) {
    return context.prisma.userSubscription.findUnique({ where: { id: parent.id } }).subscriber()
}

// Trả lại danh sách kênh mà user đăng ký
function subscribedTo(parent, args, context) {
    return context.prisma.userSubscription.findUnique({ where: { id: parent.id } }).subscribedTo()
}

// Xuất bản các module
module.exports = {
    subscriber,
    subscribedTo,
}