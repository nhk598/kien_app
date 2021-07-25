import React, { Component } from 'react'
export default class WhVideo_left_top extends Component {
    render() {
        return (
            <video width="100%" height="100%" controls className="videoPlay mx-auto" style={{maxHeight: '480px'}}>
                <source src="./video1.mp4" type="video/mp4" />
                <source src="dammio.ogg" type="video/ogg" />
                Trình duyệt của bạn không hỗ trợ thẻ video.
            </video>
        )
    }
}
