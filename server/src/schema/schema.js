const { gql } = require('apollo-server');
const typeDefs = gql `
scalar DateTime
 
enum CacheControlScope {
  PUBLIC
  PRIVATE
}

directive @cacheControl(
  maxAge: Int
  scope: CacheControlScope
  inheritMaxAge: Boolean
) on FIELD_DEFINITION | OBJECT | INTERFACE | UNION

type User {
  id:           ID!         
  createdAt :   DateTime    
  username:     String
  email:        String
  password:     String        
  avatar:       String        
  cover:        String         
  about:        String
  videos:       [Video!]!
  videoLikes:   [VideoLike!] 
  view:         [View!]! 
  comment:      [Comment!]!
  subscribers  :[UserSubscription] @cacheControl(maxAge: 30)
  subscribedTo :[UserSubscription] @cacheControl(maxAge: 30, scope: PRIVATE)
}

type Video{
  id:          ID!      
  createdAt :  DateTime   
  title:       String
  description: String
  url:         String!
  thumbnail:   String
  document:    String
  userId:      String
  user:        User
  videoLikes:   [VideoLike!]! @cacheControl(maxAge: 30)
  view:        [View!]! @cacheControl(maxAge: 30)
  comment:      [Comment!]!
}   

type AuthPayload{
  token: String
  user: User
}


type VideoLike {
  id        :String 
  createdAt :DateTime 
  like      :Int      
  userId    :String
  videoId   :String
  user      :User     
  video     :Video   
}

type View {
  id        :String   
  createdAt :DateTime 
  userId    :String
  videoId   :String
  user      :User
  video     :Video    
}

type Comment {
  id        :String   
  createdAt :DateTime 
  text      :String
  userId    :String
  videoId   :String
  user      :User     
  video     :Video   
}

type UserSubscription {
  id             :String  
  createdAt      :DateTime 
  subscriberId   :String
  subscribedToId :String
  subscriber     :User    
  subscribedTo   :User     
}

type Query{
  users:[User!]!
  videos:[Video!]!
  user(id:ID!): User
  userManage: User
  video(id:ID!): Video
  videoLike(VideoId:String!): VideoLike
  videosLike(skip: String, take: String): [VideoLike]
  videosSearch(filter: String, skip: String, take: String): [Video]
  videosRecommended:[Video!]!
  comment(videoId: String!): [Comment]
  videosWatched(skip: String, take: String): [View]
  videosUser(userId: String!,skip: String, take: String):[Video]
  videosUserManage(skip: String, take: String):[Video]
  subscribedTo: UserSubscription
}

type Subscription {
  newVideo: Video
  newVideoLike: VideoLike
  newView: View
  newComment: Comment
  newUserSubscription: UserSubscription
}

type Mutation{
  signup(email: String!, password: String!, username: String!): AuthPayload
  login(email: String!, password: String!): AuthPayload
  createUser(data: UserCreateInput!): User!
  createVideo(title: String, description: String, url: String!, thumbnail: String!, document: String ): Video!
  publishUser(username: String, password: String, email: String, avatar: String, cover: String, about: String):User!
  publishVideo(id:ID!, title: String, description: String, url: String, thumbnail: String, document: String, userId: String):Video!
  videoLike(videoId: String): VideoLike
  view(videoId: String!): View
  comment(videoId: String!, text: String!): Comment
  userSubscription(userId: ID!): UserSubscription
}

 
input VideoCreateInput {
   title: String
   description: String
   url: String!
   thumbnail: String!
   document: String
   userId: ID
}

input UserCreateInput {
  username: String
  email: String           
  avatar: String        
  cover: String         
  about: String
  videos: [VideoCreateWithoutAuthorInput!]
}

input VideoCreateWithoutAuthorInput {
  title: String
  description: String
  url: String
  thumbnail: String
  document: String
}
`;



module.exports = typeDefs