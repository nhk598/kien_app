import React, { Component } from 'react'
import HeaderRightNotification from './Header_right_notification/HeaderRightNotification'
import HeaderRightUser from './Header-right-user/HeaderRightUser'
import HeaderRightComment from './Header_right_comment/HeaderRightComment'
export default class HeaderRight extends Component {
    render() {
        return (
            <div className="flex-fill">
                <div className="  bg-light">
                    <div className="nav navbar-expand " id="collapsibleNavId">
                        <ul className="navbar-nav  navbar-expand-sm ms-auto ">
                            <li>
                            <HeaderRightComment></HeaderRightComment>
                            </li>
                            <li>
                            <HeaderRightNotification></HeaderRightNotification>
                            </li>
                            <li>
                            <HeaderRightUser></HeaderRightUser>
                            </li>
                            
                         </ul>
                    </div>
                </div>
            </div>
        )
    }
}
