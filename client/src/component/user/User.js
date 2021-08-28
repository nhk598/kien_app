import React from 'react'
import BodyUser from './bodyUser/BodyUser'
import TopUser from './topUser/TopUser'

export default function User() {
    return (
        <div className="row" style={{paddingTop: '20px'}}>
        {/* begin home page user */}
        <div className="col-10 mx-auto">
            <TopUser/>
            <BodyUser/>
        </div>
        </div>

    )
}
