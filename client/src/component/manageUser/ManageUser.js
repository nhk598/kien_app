import React from 'react'
import TopManageUser from './topManageUser/TopManageUser'
import BodyManageUser from './bodyManageUser/BodyManageUser'
export default function ManageUser() {
    return (
        <div className="row" style={{paddingTop: '20px'}}>
        {/* begin home page user */}
        <div className="col-10 mx-auto">
            <TopManageUser/>
            <BodyManageUser/>
        </div>
        </div>
    )
}
