import React, { Component } from 'react'
import Header_left from './Header_left/Header_left'
import Header_mid from './searchForm/Header_mid'
import Header_right from './header_right/Header_right'
export default class Header extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xl-12 d-flex flex-sm-column">
                    <nav className="navbar navbar-expand-sm navbar-light bg-light fixed-top ">
                        <Header_left></Header_left>
                        <Header_mid></Header_mid>
                        <Header_right></Header_right>
                    </nav>
                </div>
            </div>
        )
    }
}
