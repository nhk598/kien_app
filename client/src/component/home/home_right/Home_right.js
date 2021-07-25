import React, { Component } from 'react'
import VideoCard from './videoCard/VideoCard'

export default class Home_right extends Component {
    render() {
        return (
            <div className="col-xl-10 col-mb-10 col-sm-10">
                <div className="recommendedVideos">
                    <h2 style={{marginTop: '50px'}}>Recommended</h2>
                    <div className="recommendedVideos_videos">
                        <div className="container-fluid">
                            <div className="row">
                                {/* begin videoCard */}
                                <VideoCard></VideoCard>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
