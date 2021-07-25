// lấy về danh sách tất cả người dùng
async function users(parent, args, context) { return await context.prisma.user.findMany(); }

// lấy về người dùng theo id
async function user(parent, args, context) { return await context.prisma.user.findUnique({ where: { id: (args.id) } }); }

// lấy về danh sách tất cả video của tât cả mọi người
async function videos(parent, args, context) { return await context.prisma.video.findMany(); }

// lấy về video theo id
async function video(parent, args, context) { return await context.prisma.video.findUnique({ where: { id: (args.id) } }); }

// Xuất bản các module
module.exports = {
    users,
    user,
    videos,
    video,
}