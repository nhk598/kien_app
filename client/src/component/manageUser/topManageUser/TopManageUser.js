
import React from 'react'
import { useQuery } from '@apollo/client'
import {GET_AVATAR_USER_MANAGE} from '../../../graphql-client/Queries'
export default function TopManageUser() {
    const {loading, error, data} = useQuery(GET_AVATAR_USER_MANAGE)
    if(loading) return <p>loading...</p>;
    if(error) return `Error! ${error.message}`;
    
    return (
        <div>
            <div className=" border d-flex flex-column">
                <img className="imgAvatar mx-auto" src={data.userManage.cover} alt="" />
                <img className="avatar mx-auto rounded-circle" src={data.userManage.avatar} alt="" />
                <h5 className="nameYouser mx-auto" style={{marginTop: '20px'}}>{data.userManage.username}</h5>
            </div>
            
            <div className=" d-flex flex-column subsUser">
                <button className="btn-btn-waning mx-auto">Đăng ký kênh</button>
                <div className="d-flex mx-auto">
                <p>1000</p>
                <div style={{marginLeft: '2px', marginRight: '2px'}}>•</div>
                <p>Người đăng ký</p>
                </div>
            </div>
        </div>
    )
}
