import React, { Component } from 'react'
import NextVideo from './nextVideo/NextVideo'
import WatchingVideoLeft from './watchingVideo_left/WatchingVideoLeft'
export default class WatchingVideo extends Component {
    render() {
        return (
            <div className="row bodyWatching">
            <WatchingVideoLeft></WatchingVideoLeft>
            <NextVideo></NextVideo>
            </div>

        )
    }
}
