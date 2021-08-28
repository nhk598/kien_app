
import React from 'react'
import { useQuery } from '@apollo/client';
import {
    useParams
  } from "react-router-dom";
import {getDateIntVideo} from '../../../../graphql-client/Queries'
// đo thời gian video phát hành
import moment from 'moment'
export default function CardIntVideoPlaying() {
    // lấy id của video trên url/
    let {id} = useParams();
    // lấy dữ liệu thông tin video
    const {loading, error, data} = useQuery(getDateIntVideo,{
        variables: {id},
    });
    if(loading) return <p>loading...</p>;
    if (error) return `Error! ${error.message}`;
    console.log(data);
    return (
        <div className="dataVideoPlaying">
        {/* name video */}
        <h4>{data.video.title}</h4>
        {/* begin thong ke video + like + share video */}
        <div className="intVideo d-flex justify-content-between">
            {/*begin statistical(thống kê) int views-comment-datetime  */}
            <div className="statisticalVideo d-flex">
                <div className="d-flex">
                    <p>{data.video.view.length}</p>
                    <p>views</p>
                </div>
                <div>•</div>
                <div className="d-flex">
                    <p>{data.video.videoLikes.length}</p>
                    <p>like</p>
                </div>
                <div>•</div>
                
                <div className="d-flex">
                <p>{moment(data.video.createdAt).fromNow() }</p>
                </div>
                
            </div>

            {/*end statistical(thống kê) int views-comment-datetime  */}
            {/* begin like and share video */}
            <div className="iconVideoPlaying d-flex ">
                {/* like */}
                {/* bergin card like  */}
                <div className="iconLikeVideo d-flex border">
                    {/* begin iconLike */}
                    <div className="d-flex flex-column">
                        <a href><i className="fas fa-chevron-up" /></a>
                        <a href><i className="fas fa-chevron-down" /></a>
                    </div>
                    {/* end iconLike */}
                    {/* begin likeText */}
                    <div className="d-flex flex-column likeTextVideo ">
                        <p>1000</p>
                        <p>Like</p>
                    </div>
                    {/* end likeText */}
                </div>
                {/* end card like*/}
                {/* share */}
                <div className="shareVideo border  d-flex">
                    <a href><i className="fas fa-share" /></a>
                    <p>CHIA SẺ</p>
                </div>       
            </div> 
            {/* end like and share video */} 
        </div>
        {/* end thong ke video like share video */}
    </div>
    )
}


