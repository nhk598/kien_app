import React, { Component } from 'react'
import Header_right_notification from './Header_right_notification/Header_right_notification'
import Header_right_user from './Header_right_user/Header_right_user'
import Header_right_comment from './Header_right_comment/Header_right_comment'
export default class Header_right extends Component {
    render() {
        return (
            <div className="flex-fill">
                <div className="  bg-light">
                    <div className="nav navbar-expand " id="collapsibleNavId">
                        <ul className="navbar-nav  navbar-expand-sm ml-auto ">
                            
                            <Header_right_comment></Header_right_comment>
                            <Header_right_notification></Header_right_notification>
                            <Header_right_user></Header_right_user>
                         </ul>
                    </div>
                </div>
            </div>
        )
    }
}
