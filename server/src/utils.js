const jwt = require('jsonwebtoken');
// APP_SECRET dùng để ký JWTs
const APP_SECRET = 'GraphQL-is-aw3some';


// Hàm phân giải token nhờ jwt và hàm tra cứu "verify"
function getTokenPayload(token) {
    return jwt.verify(token, APP_SECRET);
}

// Hàm lấy id user từ req hoặc authToken nếu có
function getUserId(req, authToken) {
    // Với req ta lấy được authHeader rồi thay thế(replace) để tìm ra token
    if (req) {
        // Lấy authHeader từ req.header
        const authHeader = req.headers.authorization;
        if (authHeader) {
            // Lấy token từ authHeader
            const token = authHeader.replace('Bearer ', '');
            // Trả lại lỗi khi không có token
            if (!token) {
                throw new Error('No token found');
            }
            // jwt phân giải userId từ token
            const { userId } = getTokenPayload(token);
            // Trả lại userId
            return userId;
        }
    } else if (authToken) {
        const { userId } = getTokenPayload(authToken);
        return userId;
    }
    // Ném ra lỗi nếu không xác định được userId
    throw new Error('Not authenticated');
}

// Xuất bản các module
module.exports = {
    APP_SECRET,
    getUserId
};