import React from 'react'
import HomeLeft from '../home/home_left/HomeLeft'
import SubUserRight from './SubUserRight'
export default function UserSub() {
    return (
        <div className="row" style={{paddingTop: '20px'}}>
            <HomeLeft></HomeLeft>
            <SubUserRight/>
        </div>
    )
}
