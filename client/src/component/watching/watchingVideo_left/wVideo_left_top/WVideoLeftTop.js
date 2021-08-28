
import React from 'react'
import {  useQuery } from '@apollo/client';
import { URL_VIDEO_PLAYING } from '../../../../graphql-client/Queries';
import {
    useParams
  } from "react-router-dom";
  
export default function WVideoLeftTop() {
    let {id} = useParams();
    
    const {loading, error, data}=useQuery(URL_VIDEO_PLAYING,{
    variables: {id},
});
    if(loading) return <p>loading...</p>;
    if (error) return `Error! ${error.message}`;
    
  console.log(data.video.url);
    return (
            <video width="100%" height="100%" controls className="videoPlay mx-auto" style={{maxHeight: '480px'}}>
                <source src={data.video.url} type="video/mp4" />
                <source src={data.video.url} type="video/ogg" />
                Trình duyệt của bạn không hỗ trợ thẻ video.
            </video>
    )
}

