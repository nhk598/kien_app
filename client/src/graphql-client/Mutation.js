import { gql } from '@apollo/client'
const SIGNUP = gql `
mutation Signup (
    $email: String!
    $password: String!
    $name: String!
){
    signup(
        email: $email
        password: $password
        username: $name
    ){
        token
    }
}
`;

const LOGIN = gql `
mutation Login(
    $email: String!
    $password: String!
){
    login(email: $email, password: $password){
        token
    }
}
`;

const CREATE_VIDEO = gql `
mutation createVideo(
    $title: String
    $description: String
    $url: String!
    $thumbnail: String!
    $document: String
    
){
    createVideo(title:$title, description:$description, url:$url, thumbnail: $thumbnail, document: $document){
        id
        title
        user{
        id
        username
        }
    }
}
`;

// async function publishUser(parent, args, context) {
//     // Lấy id của người dùng đã đăng nhập
//     const { userId } = context
//     // Sửa thông tin người dùng
//     const publishUser = context.prisma.user.update({
//         where: {
//             id: userId
//         },
//         data: {
//             username: args.username,
//             email: args.email,
//             avatar: args.avatar,
//             cover: args.cover,
//             about: args.cover,
//             password: args.password
//         }

//     })
const PUBLISH_USER = gql `
mutation publishUser(
    $username: String
    $avatar: String
    $cover: String
    $about: String

){
    publishUser(username:$username, avatar:$avatar, cover:$cover, about: $about){
        avatar
        cover
        about
    }
}
`;

const CREAT_VIEW = gql `
mutation creat_view($videoId: String!){
    view(videoId: $videoId){
        user{
            id
            username
        }
        video{
            id
            title
        }
    }
}
`;

const NEW_COMMENT = gql `
mutation new_comment($videoId: String!, $text: String!){
    comment(videoId: $videoId, text: $text){
        id
        text
    }

}
`;
// userSubscription(userId: ID!): UserSubscription
// userSubscription
const USER_SUBSCRIPTION = gql `
mutation userSubscription($userId: ID!){
    userSubscription(userId: $userId){
        id
    }
}
`
export {
    SIGNUP,
    LOGIN,
    CREATE_VIDEO,
    PUBLISH_USER,
    CREAT_VIEW,
    NEW_COMMENT,
    USER_SUBSCRIPTION
}