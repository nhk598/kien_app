import React from 'react'
import HomeLeft from '../home/home_left/HomeLeft'
import News from './News'
export default function NewsFeed() {
    return (
        <div className="row" style={{paddingTop: '20px'}}>
            <HomeLeft></HomeLeft>
            <News/>
        </div>
    )
}
