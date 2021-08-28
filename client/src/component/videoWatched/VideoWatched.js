import React from 'react'
import HomeLeft from '../home/home_left/HomeLeft'
import VideoWatchedRight from './VideoWatchedRight'
export default function VideosLike() {
    return (
        <div className="row" style={{paddingTop: '20px'}}>
            <HomeLeft></HomeLeft>
            <VideoWatchedRight/>
        </div>
    )
}
