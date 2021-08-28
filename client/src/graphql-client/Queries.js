import { gql } from '@apollo/client';

const VIDEOS_RECOMMENDED = gql `
 query videosRecommended {
    videosRecommended {
         title
         id
         thumbnail
         createdAt
         videoLikes{
             id
         }
         view{
             id
         }
         user{
             username
             avatar
             id
         }
     }
 }
`;

const videoPlaying = gql `
query videoPlaying($id:ID!) {
    video(id:$id){
        id      
        createdAt    
        title
        description
        url
        thumbnail
        document
        userId
        user{
            id
            username
            avatar
        }
        videoLikes{
            id
        }
        view{
            id
        }
        comment{
            id
            text
        }
        
    }
}
`;
const URL_VIDEO_PLAYING = gql `
query videoPlaying($id:ID!) {
    video(id:$id){
        id      
        url
        
    }
}
`;

// Lấy về commnet video đã sắp xếp theo thứ tự khoảng thời gian gần nhất
const COMMENT_VIDEO = gql `
query comment($videoId: String!){
    comment(videoId: $videoId){
        createdAt
        id
        text
        user{
            id
            avatar
            username
        }
    }
}
`;
// Lấy về phần giới thiệu của video
const getIntroduceVideo = gql `
query getIntroduceVideo($id:ID!){
    video(id:$id){
        id
        description
        user{
            id
            username
            avatar
        }
    }
}
`;
// Lấy về phần hiện thị số liệu thống kê của video
const getDateIntVideo = gql `
query getDateIntVideo($id:ID!){
    video(id:$id){
        id
        createdAt  
        title
        document
        videoLikes{
            id
        }
        view{
            id
        }
        
    }
}
`;
// Lấy về tài liệu của video
const getDocumentVideo = gql `
query getDocumentVideo($id:ID!){
    video(id:$id){   
        id
        document  
    }
}
`;
// Lấy về thông tin cơ bản user hiện thị cho trang dầu của user
const getUser = gql `
query getUser($idUser:ID!){
    user(id:$idUser){
        id
        username
        avatar       
        about
        cover
        subscribers{
            id

        }
    }
}
`;
// Lấy về avatar của user manage
const GET_AVATAR_USER_MANAGE = gql `
query getAvatarUserManage{
    userManage{
        id
        avatar
        cover
        username
        about
    }
    
}
`;
// Lấy về phần giới thiệu user
const GET_INTRODUCE_USES_MANAGE = gql `
query getIntroduceUserManage{
    userManage{
        id
        about
    }
    
}
`;

// Lấy về Video của UserManage cái này cần thay đổi
const VIDEO_USER_MANAGE = gql `
query userManage{
    userManage{
        videos{
            id
            title
            thumbnail
            videoLikes{
                id
            }
            view{
                id
            }
        }
    }
}
`;

// Lấy về các video theo kết quả tìm kiếm
const VIDEOS_SEARCH = gql `
query videosSearch($filter: String!){
    videosSearch(filter:$filter){
        id
        title
        thumbnail
        user{
            id
            avatar
        }
    	videoLikes{
          id
        }
        view{
          id
        }
    }
}
`;
// Lấy về các video đã xem
const VIDEOS_WATCHED = gql `
query videosWatched($skip: String!, $take:String!){
    videosWatched(skip:$skip, take: $take ){
        id
        video{
            id
            title
            thumbnail  
        }
        user{
            avatar
        }
    }
}
`;
// Lấy về các video mà user đã like
const VIDEOS_LIKE = gql `
query videosLike($skip: String!, $take: String!){
    videosLike(skip:$skip, take: $take){
        id
        video{
            title
            thumbnail
            createdAt
            videoLikes{
                id
            }
            view{
                id
            }
        }
        user{
            avatar
            username
        }
    }
}
`
    // videosUserManage(skip: String, take: String):[Video]
    // Lấy về các videos của user manage
const VIDEOS_USER_MANAGE = gql `
query videosUserManage($skip: String!, $take: String!){
    videosUserManage(skip: $skip, take: $take){
        id
        title
        thumbnail
        view{
            id
        }
        videoLikes{
            id
        }
        user{
            id
            avatar
        }
    }
}
`
export {
    VIDEOS_RECOMMENDED,
    videoPlaying,
    getDateIntVideo,
    getIntroduceVideo,
    getDocumentVideo,
    getUser,
    GET_AVATAR_USER_MANAGE,
    GET_INTRODUCE_USES_MANAGE,
    VIDEOS_SEARCH,
    VIDEO_USER_MANAGE,
    URL_VIDEO_PLAYING,
    COMMENT_VIDEO,
    VIDEOS_WATCHED,
    VIDEOS_LIKE,
    VIDEOS_USER_MANAGE
}