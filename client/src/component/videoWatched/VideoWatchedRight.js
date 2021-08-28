import React from 'react'
import { VIDEOS_WATCHED } from '../../graphql-client/Queries';
import { useQuery } from '@apollo/client';
import CardVideoUser from './CardVideoUser';
export default function VideoWatchedRight() {
    const skip="0";
    const take ="10"
    const {loading, error, data} = useQuery(VIDEOS_WATCHED,{
        variables:{
            skip,
            take
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
                    <h2 style={{marginTop: '50px'}}>Danh sách video đã xem gần đây</h2>
                        <div className="row">
                        {data.videosWatched.map((view)=>{
                            return (                                  
                                <CardVideoUser
                                    key={view.id}
                                    title ={view.video.title}
                                    // username={video.user.username}
                                    // date={video.createdAt}
                                    // view={video.view.length}
                                    // like={video.videoLikes.length}
                                    // videoId={video.id}
                                    avatarUser={view.user.avatar}
                                    // idUser={video.user.id}
                                    thumbnail={view.video.thumbnail}
                                  >
                                  
                                </CardVideoUser>
                           )
                        })}
                        
                        </div>
                </div>
            </div>
        </div>
    </div>
    )
}
