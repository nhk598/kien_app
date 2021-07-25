import React, { Component } from 'react'
import WhatchingVideo_left_top from './whVideo_left_top/WhVideo_left_top'
import WhatchingVideo_left_bot from './whVideo_left_bot/WhVideo_left_bot'
export default class WhatchingVideo_left extends Component {
    render() {
        return (
            <div className="col-xl-8 col-lg-8 col-md-10 col-sm-10 mx-auto d-md-flex videoPlaying">
                <div className="card border" style={{marginTop: '50px'}}>
                    <WhatchingVideo_left_top></WhatchingVideo_left_top>
                    <WhatchingVideo_left_bot></WhatchingVideo_left_bot>
                </div>
            </div>
            
        )
    }
}
