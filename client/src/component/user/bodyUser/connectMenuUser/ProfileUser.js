import React from 'react'
import { useParams } from 'react-router'
import { useQuery } from '@apollo/client'
import { getUser } from '../../../../graphql-client/Queries'
export default function ProfileUser() {
    let {idUser} = useParams()
    const{loading, error, data}= useQuery(getUser,{
        variables: {idUser},
    });
    if(loading) return <p>loading...</p>;
    if(error) return `Error! ${error.message}`;
    return (
        <div className="tab-pane show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
        <div>
            <h5>Giới thiệu kênh: </h5>
            <p>{data.user.about}</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus qui eum, maxime, ratione aut dolor numquam consequuntur corporis culpa praesentium quasi non, aliquid vitae. Unde corrupti officia quod nisi dolor.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus qui eum, maxime, ratione aut dolor numquam consequuntur corporis culpa praesentium quasi non, aliquid vitae. Unde corrupti officia quod nisi dolor.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus qui eum, maxime, ratione aut dolor numquam consequuntur corporis culpa praesentium quasi non, aliquid vitae. Unde corrupti officia quod nisi dolor.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus qui eum, maxime, ratione aut dolor numquam consequuntur corporis culpa praesentium quasi non, aliquid vitae. Unde corrupti officia quod nisi dolor.</p>
            <hr />
            <h5>Video giới thiệu:</h5>
            <video width="100%" height="100%" controls className="videoPlay mx-auto" style={{maxHeight: '480px', maxWidth: '750px'}}>
            <source src="./video1.mp4" type="video/mp4" />
            <source src="dammio.ogg" type="video/ogg" />
            Trình duyệt của bạn không hỗ trợ thẻ video.
            </video>
            <hr />
            <h5>Địa chỉ liên hệ: </h5>
            <p>{data.user.about}</p>
            <p>Số điện thoại: 012382395213</p>
            <p>địa chỉ email: conbuomxuan@gmail.com</p>
        </div>
        </div>

    )
}
