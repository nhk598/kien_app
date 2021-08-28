import React from 'react'
import FormTextProfile from './formToolProfile/FormTextProfile'
import FormVideoProfile from './formToolProfile/FormVideoProfile'
import FormFromProfile from './formToolProfile/FormFromProfile'
import {GET_AVATAR_USER_MANAGE} from '../../../../graphql-client/Queries'
import { useQuery } from '@apollo/client'
export default function ManageProfile() {
    const {loading, error, data} = useQuery(GET_AVATAR_USER_MANAGE)
    if(loading) return <p>loading...</p>
    if(error) return `Error! ${error.message}`;
    console.log(data.userManage.about);
    return (
        <div className="tab-pane show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
            <div >
                {/* begin text profile */}
                {/* begin header tools text profile*/}
                <div className="d-flex">
                <h5>Giới thiệu kênh: </h5>
                <button type="button" className="btn dropdown ms-auto" data-bs-toggle="modal" data-bs-target="#toolTextProfileModal" data-bs-whatever><i className="fas fa-pen" /></button>
                {/* begin form tool text profile*/}
               <FormTextProfile></FormTextProfile>
                {/* end form tool */}
                </div>
                {/* end */}
                <p>{data.userManage.about}</p>
                {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus qui eum, maxime, ratione aut dolor numquam consequuntur corporis culpa praesentium quasi non, aliquid vitae. Unde corrupti officia quod nisi dolor.</p> */}
                {/* end text profile */}
                <hr />
                {/* begin video profile */}
                {/* begin header videoProfile */}
                <div className="d-flex">
                <h5>Video giới thiệu:</h5>
                {/* begin icon tools video profile*/}
                <button type="button" className="btn dropdown ms-auto" data-bs-toggle="modal" data-bs-target="#toolVideoProfileModal" data-bs-whatever><i className="fas fa-pen" /></button>
                {/* end */}
                {/* begin form tool video profile*/}
                <FormVideoProfile></FormVideoProfile>
                {/* end form tool */}
                </div>
                {/* end header videoProfile */}
                <video width="100%" height="100%" controls className="videoPlay mx-auto" style={{maxHeight: '480px', maxWidth: '750px'}}>
                <source src="./video1.mp4" type="video/mp4" />
                <source src="dammio.ogg" type="video/ogg" />
                Trình duyệt của bạn không hỗ trợ thẻ video.
                </video>
                {/* end video profile */}
                <hr />
                {/* begin from profile */}
                {/* begin text profile */}
                <div className="d-flex">
                <h5>Địa chỉ liên hệ: </h5>
                {/* begin icon tools from profile*/}
                <button type="button" className="btn dropdown ms-auto" data-bs-toggle="modal" data-bs-target="#toolFromProfileModal" data-bs-whatever><i className="fas fa-pen" /></button>
                {/* end */}
                {/* begin form tool From profile*/}
                <FormFromProfile></FormFromProfile>
                {/* end form tool */}
                </div>
                <p>Số điện thoại: 012382395213</p>
                <p>địa chỉ email: conbuomxuan@gmail.com</p>
                {/* end from profile */}
            </div>
            </div>

    )
}
