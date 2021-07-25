import React, { Component } from 'react'
import NextVideo from './nextVideo/NextVideo'
import WhatchingVideo_left from './whatchingVideo_left/WhatchingVideo_left'
export default class WhatchingVideo extends Component {
    render() {
        return (
            <div className="row bodyWhatching">
            <WhatchingVideo_left></WhatchingVideo_left>
            <NextVideo></NextVideo>
            </div>

        )
    }
}
