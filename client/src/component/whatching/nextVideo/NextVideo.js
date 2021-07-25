import React, { Component } from 'react'
import VideoCard from '../../home/home_right/videoCard/VideoCard'
export default class NextVideo extends Component {
    render() {
        return (
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4  ml-auto nextVideo" style={{marginTop: '100px'}}>
                <VideoCard></VideoCard>
            
            </div>

        )
    }
}
