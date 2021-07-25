import React, { Component } from 'react'
import Home_left from './home_left/Home_left'
import Home_right from './home_right/Home_right'
export default class Home extends Component {
    render() {
        return (
            <div className="row" style={{paddingTop: '20px'}}>
                <Home_left></Home_left>
                <Home_right></Home_right>
            </div>

        )
    }
}
