import { useQuery } from '@apollo/client'
// import React, { Component } from 'react'
import { VIDEOS_RECOMMENDED } from '../../../graphql-client/Queries'
import VideoCard from '../../home/home_right/videoCard/VideoCard'
import React from 'react'

export default function NextVideo() {
    const {loading, error, data}= useQuery(VIDEOS_RECOMMENDED);
    if(loading) return <p>loading...</p>;
    if (error) return `Error! ${error.message}`; 
    console.log(data);
    
    return (
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4  ms-auto nextVideo" style={{marginTop: '100px'}}>
        {data.videosRecommended.map((video)=>{                     
                                   return (                                  
                                        <VideoCard
                                            key={video.id}
                                            title ={video.title}
                                            username={video.user.username}
                                            date={video.createdAt}
                                            view={video.view.length}
                                            like={video.videoLikes.length}
                                            videoId={video.id}
                                            avatarUser={video.user.avatar}
                                            idUser={video.user.id}
                                          >
                                          
                                        </VideoCard>
                                   )
                               })}
        {/* <VideoCard></VideoCard> */}
    
        </div>
    )
}

