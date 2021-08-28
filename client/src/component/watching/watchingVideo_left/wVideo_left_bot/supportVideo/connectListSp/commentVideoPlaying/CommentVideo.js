import React from 'react'
import NewComment from './commentFormVideo/NewComment'
import {COMMENT_VIDEO} from '../../../../../../../graphql-client/Queries'
import { useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'
// ddo thoi gian
import moment from 'moment'
export default function CommentVideo() {
    // lấy id của video trên url/
    let {id} = useParams();

    const {loading, error, data} = useQuery(COMMENT_VIDEO,{
        variables: {videoId: id},
    });
    if(loading) return <p>loading...</p>;
    if (error) return `Error! ${error.message}`;
    console.log(data);
    return (
        // header comment
                <div className="d-flex-column cardComment">
                    {data.comment.map((comment)=>{
                    return (
                  <div className="comment border">
                      <div className="headerCommented  d-flex">
                        {/* bergin card like  */}
                        <div className="d-flex border iconLikeComment">
                        {/* begin iconLike */}
                        <div className="d-flex flex-column">
                            <a href><i className="fas fa-chevron-up" /></a>
                            <a href><i className="fas fa-chevron-down" /></a>
                        </div>
                        {/* end iconLike */}
                        {/* begin likeText */}
                        <div className="d-flex-column likeText">
                            <p>2000</p>
                            <p>Like</p>
                        </div>
                        {/* end likeText */}
                        </div>
                        {/* end card like*/}
                        {/* begin card info author video */}
                        {/* begin card author */}
                        <div className="d-flex nameUserWatching">
                        <a href="./user.html"><img className="img-video_avatar rounded-circle" alt="" src={comment.user.avatar} /></a>
                        <a href="./user.html"><p>{comment.user.username}</p></a> 
                        </div>
                        {/* end card author */}
                        {/* end card info author video */}
                        <p>{moment(comment.createdAt).fromNow() }</p>
                    </div>
                        <div className="text_comment">
                        {comment.text}
                        </div>
                        {/* begin button new comment */}
                        <button className="btn border d-flex" type="button" data-bs-toggle="collapse" data-bs-target="#buttonNewComment" aria-expanded="false" aria-controls="buttonNewComment">
                            Trả lời
                        </button>
                        <div className="collapse" id="buttonNewComment">
                            <div className="card card-body">
                            {/* begin new comment */}
                            <NewComment></NewComment>
                            {/* end new comment */}
                            </div>
                        </div>
                        {/* end button new comment */}
                        {/* begin phan hoi  */}
                        <div className="row">
                            <div className="col-12 ms-auto">
                            <a className="btn " data-bs-toggle="collapse" href="#buttonListComment" role="button" aria-expanded="false" aria-controls="buttonListComment">
                                Xem các câu trả lời
                            </a>
                            <div className="collapse" id="buttonListComment">
                                <div className="card card-body">
                                {/* begin heder card comment */}
                                <div className="headerCommented border d-flex">
                                    {/* bergin card like  */}
                                    <div className="d-flex border iconLikeComment">
                                    <div className="d-flex flex-column">
                                        <a href><i className="fas fa-chevron-up" /></a>
                                        <a href><i className="fas fa-chevron-down" /></a>
                                    </div>
                                    <p>1000 Like</p>
                                    </div>
                                    {/* end card like*/}
                                    {/* begin card info author video */}
                                    {/* begin card author */}
                                    <div className="d-flex nameUserWatching">
                                    <a href="./user.html"><img className="img-video_avatar rounded-circle" alt="" src="./gai.jpg" /></a>
                                    <a href="./user.html"><p>Tài chính và kinh doanh</p></a> 
                                    </div>
                                    {/* end card author */}
                                    {/* end card info author video */}
                                    <p>10 ngày trước</p>
                                </div>
                                {/* end heder card comment */}
                                {/* begin text commented */}
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis nam cumque dolorem facere, hic fugit, magni similique labore ipsa unde placeat, mollitia quam aspernatur nihil ab architecto! Autem, facere nihil?</p>
                                {/* end text commented */}
                                {/* begin button new comment */}
                                <button className="btn border d-flex" type="button" data-bs-toggle="collapse" data-bs-target="#a1buttonNewComment" aria-expanded="false" aria-controls="a1buttonNewComment">
                                    Trả lời
                                </button>
                                <div className="collapse" id="a1buttonNewComment">
                                    <div className="card card-body">
                                    {/* begin new comment */}
                                    <NewComment></NewComment>
                                    {/* end new comment */}
                                    </div>
                                </div>
                                {/* end button new comment */}
                                </div>
                            </div>
                            </div>
                        </div>
                        {/* end phan hoi  */}
                  </div> 
            );
                })}
        </div>
    )
}
