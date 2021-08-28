import React, { Component } from 'react'
import HeaderLeft from './Header_left/HeaderLeft'
import HeaderMid from './searchForm/HeaderMid'
import HeaderRight from './header_right/HeaderRight'
export default class Header extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xl-12 d-flex flex-sm-column">
                    <nav className="navbar navbar-expand-sm navbar-light bg-light fixed-top ">
                        <HeaderLeft></HeaderLeft>
                        <HeaderMid></HeaderMid>
                        <HeaderRight></HeaderRight>
                    </nav>
                </div>
            </div>
        )
    }
}
