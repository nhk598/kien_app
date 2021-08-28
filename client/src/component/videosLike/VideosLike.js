import React from 'react'
import HomeLeft from '../home/home_left/HomeLeft'
import VideosLikeRight from './VideosLikeRight'
export default function VideosLike() {
    return (
        <div className="row" style={{paddingTop: '20px'}}>
            <HomeLeft></HomeLeft>
            <VideosLikeRight/>
        </div>
    )
}
