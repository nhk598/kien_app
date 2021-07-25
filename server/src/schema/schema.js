const { gql } = require('apollo-server');
const typeDefs = gql `
scalar DateTime
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
  views:         [View!]!
  comments:      [Comment!]!
  subscribers  :[UserSubscription]
  subscribedTo :[UserSubscription]
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
  videoLikes:   [VideoLike!]!
  views:        [View!]!
  comments:      [Comment!]!
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
  video(id:ID!): Video
  videoLike(videoId:ID): VideoLike
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
  createVideo(data: VideoCreateInput): Video!
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
   url: String
   thumbnail: String
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