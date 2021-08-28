import { useMutation, useQuery } from '@apollo/client'
import React from 'react'
import { useParams } from 'react-router-dom'
import { getUser } from '../../../graphql-client/Queries'
import {USER_SUBSCRIPTION} from '../../../graphql-client/Mutation'
export default function TopUser() {
    let {idUser}=useParams()
    // const [user_subscription] = useMutation(USER_SUBSCRIPTION,{
    //     variables:{
    //         userId: idUser
    //     }
    // })
    const{loading, error, data}= useQuery(getUser,{
        variables: {idUser}
    })
    if(loading) return <p>loading...</p>
    if(error) return <p>error</p>
    console.log(data);
    return (
        <div>
        <div className=" border d-flex flex-column">
            <img className="imgAvatar mx-auto" src={data.user.cover} alt="" />
            <img className="avatar mx-auto rounded-circle" src={data.user.avatar} alt="" />
            <h5 className="nameYouser mx-auto" style={{marginTop: '20px'}}>{data.user.username}</h5>
        </div>
        <div className=" d-flex flex-column subsUser">
            <button  className="btn-btn-waning mx-auto">Đăng ký kênh</button>
            <div className="d-flex mx-auto">
            <p>{data.user.subscribers.length}</p>
            <div style={{marginLeft: '2px', marginRight: '2px'}}>•</div>
            <p>Người đăng ký</p>
            </div>
        </div>
        </div>


    )
}
