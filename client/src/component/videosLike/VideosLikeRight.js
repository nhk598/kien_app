import React from 'react'
import VideoCard from '../home/home_right/videoCard/VideoCard'
import { VIDEOS_LIKE } from '../../graphql-client/Queries'
import { useQuery } from '@apollo/client'
export default function VideosLikeRight() {
    const {loading, error, data} = useQuery(VIDEOS_LIKE,{
        variables:{
            skip:"1",
            take: "5"
        }
    })
    if(loading) return <p>loading...</p>
    if(error) return `Error! ${error.message}`;
    console.log(data);
    return (
        <div className="col-xl-10 col-mb-10 col-sm-10">
            <div className="recommendedVideos">
                <div className="recommendedVideos_videos">
                    <div>
                        <h2 style={{marginTop: '50px'}}>Danh sách video đã like</h2>
                            <div className="row">
                            {
                                data.videosLike.map((videoLike)=>{
                                    return (                                  
                                        <VideoCard
                                            key={videoLike.id}
                                            title ={videoLike.video.title}
                                            username={videoLike.user.username}
                                            date={videoLike.video.createdAt}
                                            view={videoLike.video.view.length}
                                            like={videoLike.video.videoLikes.length}
                                            videoId={videoLike.video.id}
                                            avatarUser={videoLike.user.avatar}
                                            idUser={videoLike.user.id}
                                            thumbnail={videoLike.video.thumbnail}
                                          >
                                          
                                        </VideoCard>
                                   )
                                })
                            }
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
