import React from 'react'
import VideoCard from './videoCard/VideoCard'
import { useQuery } from '@apollo/client'
import {VIDEOS_RECOMMENDED} from '../../../graphql-client/Queries'


export default function HomeRight() {
    const {loading, error, data} = useQuery(VIDEOS_RECOMMENDED);
    if (loading) return <p>loading...</p>;
    if (error) return `Error! ${error.message}`;
    // const [countViews, setCountViews]= useState(0);
    console.log(data);
    
    return (
        
            <div className="col-xl-10 col-mb-10 col-sm-10">
                <div className="videosRecommended">
                    <h2 style={{marginTop: '50px'}}>Recommended</h2>
                    <div className="videosRecommended_videos">
                        <div className="container-fluid">
                            <div className="row">
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
                                            thumbnail={video.thumbnail}
                                          >
                                          
                                        </VideoCard>
                                   )
                               })}
                               {/* <VideoCard></VideoCard> */}
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}
