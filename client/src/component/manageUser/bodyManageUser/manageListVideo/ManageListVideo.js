import React from 'react'
import FormNewVideoList from './formToolListVideo/FormNewVideoList'
import VideoCard from '../../../home/home_right/videoCard/VideoCard'
import FormNewVideo from './formToolListVideo/FormNewVideo'
import {VIDEOS_USER_MANAGE } from '../../../../graphql-client/Queries'
import { useQuery } from '@apollo/client'
export default function ManageListVideo() {
    // const {loading, error, data} = useQuery(VIDEO_USER_MANAGE)
    const {loading, error, data} = useQuery(VIDEOS_USER_MANAGE,{
        variables:{skip:"0", take:"10"}
    } )
    if(loading ) return <p>loading ...</p>
    if(error) return <p>error</p>

    return (
        <div className="tab-pane" id="videoList" role="tabpanel" aria-labelledby="videoList-tab">
            <hr />
            {/* begin button NewVideoList */}
            <button className="btn btn-secondary NewVideoListButton" type="button" data-bs-toggle="modal" data-bs-target="#NewVideoListModal" data-bs-whatever><i className="fas fa-plus">New VideoList</i></button>
            {/* end button NewVideoList */}
            {/* begin form tool NewVideoList*/}
            <FormNewVideoList></FormNewVideoList>
            {/* end form tool */}
            <hr />
            {/* begin listVideoCard */}
            <div className="col-xl-6 col-lg-4 col-md-6 col-sm-8 mr-auto">
                <div className="card mb-3" style={{maxWidth: '540px'}}>
                <div className="row g-0">
                    <div className="col-md-4">
                    <a href="./watching.html"><img className="imgListVideo" src="./bg_1.jpg" alt="..." /></a>
                    </div>
                    <div className="col-xl-8 col-lg-12 col-md-12 col-sm-12">
                    <div className="card-body">
                        <h5 className="card-title">Tiêu Đề Tiêu Đề Tiêu Đề Tiêu Đề Tiêu Đề </h5>
                        <p className="card-text">Miêu tả: This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div className="statisticalVideo d-flex">
                        <p>
                        </p><div className="d-flex">
                            <p>50</p>
                            <p>Video</p>
                        </div>
                        {/* begin button NewVideo */}
                        <button className="btn newVideoButton" type="button" data-bs-toggle="modal" data-bs-target="#newVideoModal" data-bs-whatever><i className="fas fa-plus">New Video</i></button>
                        {/* end button newVideo */}
                        {/* begin form tool newvideo*/}
                        <FormNewVideo></FormNewVideo>
                        {/* end form tool */}
                        <p />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* begin showlistvideo */}
            <div>
                <a className="btn ml-auto" data-bs-toggle="collapse" href="#listVideo" role="button" aria-expanded="false" aria-controls="collapseExample">
                Danh sách Video
                </a>
                <div className="collapse" id="listVideo">
                <div className="card card-body">
                    {/* 00000 */}
                    <div className="row">
                    {/* begin videoCard */}
                   {data.videosUserManage.map((video)=>{
                       return <VideoCard
                       key={video.id}
                       title ={video.title}
                       date={video.createdAt}
                       view={video.view.length}
                       like={video.videoLikes.length}
                       videoId={video.id}
                       thumbnail={video.thumbnail}
                       ></VideoCard>
                   }) }
                    {/* end videoCard */}
                    </div>
                    {/* 0000 */}
                </div>
                </div>
            </div>
            {/* end showlistvideo */}
            {/* end listVideoCard */}
            </div>

    )
}
