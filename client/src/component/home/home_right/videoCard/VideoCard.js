
import { Link } from "react-router-dom";
import React from 'react'
// đo thời gian video phát hành
import moment from 'moment'
import {CREAT_VIEW} from '../../../../graphql-client/Mutation'
import { useMutation } from "@apollo/client";

export default function VideoCard(props) {
    const videoId = props.videoId
    const [creat_view, { loading, error }]=useMutation(CREAT_VIEW,{
        variables: {videoId:videoId},
        
    });
    
    
    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;
    console.log(props.title);
    return (
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8 me-auto">
        <div className="videoCard">
        <Link to = {"/watching/" + props.videoId} onClick={creat_view}><img   className="videoCard_thumbnail" src={props.thumbnail} alt="" /></Link>
             <div className="videoCard_info">
                
                <Link to = {"/user/"+ props.idUser}  ><img  className="img-video_avatar rounded-circle" alt="" src={props.avatarUser} /></Link>
                
                
            <div className="videoCard_info_text ">
                
                <p>{props.title}</p>
                
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

    )
}
