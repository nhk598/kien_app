
import WatchingVideoLeftTop from './wVideo_left_top/WVideoLeftTop'
import WatchingVideoLeftBot from './wVideo_left_bot/WVideoLeftBot'
import React from 'react'

export default function WatchingVideoLeft() {
  

    return (
        <div className="col-xl-8 col-lg-8 col-md-10 col-sm-10 mx-auto d-md-flex videoPlaying">
            <div className="card border" style={{marginTop: '50px'}}>
                <WatchingVideoLeftTop></WatchingVideoLeftTop>
                <WatchingVideoLeftBot></WatchingVideoLeftBot>
            </div>
        </div>
    )
}
