import React, { Component } from 'react'
import CardIntVideoPlaying from './CardIntVideoPlaying'
import SupportVideoPlaying from './supportVideo/SupportVideo'
export default class WhVideo_left_bot extends Component {
    render() {
        return (
            <div>
                <CardIntVideoPlaying></CardIntVideoPlaying>
                <SupportVideoPlaying></SupportVideoPlaying>
            </div>
        )
    }
}
