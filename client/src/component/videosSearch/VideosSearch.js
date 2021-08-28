import React from 'react'
import HomeLeft from '../home/home_left/HomeLeft'
import { Link } from 'react-router-dom'
import moment from 'moment'
export default function VideosSearch(props) {
    return (
        <div className="row" style={{paddingTop: '20px'}}>
                <HomeLeft></HomeLeft>
                <div classname="col-xl-10 col-mb-10 col-sm-10">
                    <div classname="videosRecommended">
                        <h2 style={{margintop: '50px'} }>Recommended</h2>
                        <div classname="videosRecommended_videos">
                        <div classname="container-fluid">
                            <div classname="row">
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8 me-auto">
                                <div className="videoCard">
                            
                                    <Link to = {"/watching/" + props.videoId}><img className="videoCard_thumbnail" src="./bg_1.jpg" alt="" /></Link>
                                    <div className="videoCard_info">
                                    <Link to = {"/user/"+ props.idUser}><img className="img-video_avatar rounded-circle" alt="" src={props.avatarUser} /></Link>
                                        <div className="videoCard_info_text ">
                                        <h4>{props.title}</h4>
                                        <Link to = {"/user/"+ props.idUser} className="nameUser"><p>{props.username}</p></Link> 
                                        
                                        <div className="statisticalVideo d-flex">
                                            <div className="d-flex">
                                                <p>{props.view}</p>
                                                <p>views</p>
                                            </div>
                                            <div className="dots" >•</div>
                                            <div className="d-flex">
                                                <p>{props.like}</p>
                                                <p>like</p>
                                            </div>
                                            <div className="dots" >•</div>
                                            <div className="d-flex">
                                                {moment(props.date).fromNow() }
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

               
        </div>
        </div>
    
    )
}
