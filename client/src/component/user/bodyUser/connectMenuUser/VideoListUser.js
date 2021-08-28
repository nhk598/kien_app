import React from 'react'
import { useParams } from 'react-router'
import { useQuery } from '@apollo/client'
import { getUser } from '../../../../graphql-client/Queries'

export default function VideoListUser() {
    let {idUser} = useParams();
    const{loading, error, data}= useQuery(getUser,{
        variables: {idUser},
    });
    if(loading) return <p>loading...</p>;
    if(error) return `Error! ${error.message}`;
    console.log(data);
    return (
        <div className="tab-pane" id="videoList" role="tabpanel" aria-labelledby="videoList-tab">
        <hr />
        {/* begin listVideoCard */}
        <div className="col-xl-6 col-lg-4 col-md-6 col-sm-8 mr-auto">
            <div className="card mb-3" style={{maxWidth: '540px'}}>
            <div className="row g-0">
                <div className="col-md-4">
                <a href="./watching.html"><img className="imgListVideo" src="./bg_1.jpg" alt="..." /></a>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">Tiêu Đề</h5>
                    <p className="card-text">Miêu tả: This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div className="statisticalVideo d-flex">
                    <div className="d-flex">
                        <p>50</p>
                        <p>Video</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        {/* end listVideoCard */}
        {/* begin showlistvideo */}
        <div>
            <a className="btn ml-auto" data-bs-toggle="collapse" href="#listVideo" role="button" aria-expanded="false" aria-controls="collapseExample">
            Danh sách Video
            </a>
            <div className="collapse" id="listVideo">
            <div className="card card-body">
                {/* 00000 */}
                <div className="row">
                {/* begin videoCard */}
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8 mr-auto">
                    <div className="videoCard">
                    <a href="./watching.html"><img className="card-img videoCard_thumbnail" src="./bg_1.jpg" alt="" /></a>
                    <div className="videoCard_info">
                        <a href="./user.html"><img className="img-video_avatar rounded-circle" alt="" src="./gai.jpg" />
                        </a>
                        <div className="videoCard_text ">
                        <h4>VNIndexch cán mốc 1500 điểm và những điều cần lưu ý</h4>
                        <a href="./user.html" className="nameUser">
                            <p>Tài chính và kinh doanh</p>
                        </a>
                        <div className="statisticalVideo d-flex">
                            <div className="d-flex">
                            <p>2.500</p>
                            <p>views</p>
                            </div>
                            <div style={{marginLeft: '2px', marginRight: '2px'}}>•</div>
                            <div className="d-flex">
                            <p>1000</p>
                            <p>like</p>
                            </div>
                            <div style={{marginLeft: '2px', marginRight: '2px'}}>•</div>
                            <p>1h</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* end videoCard */}
                </div>
                {/* 0000 */}
            </div>
            </div>
        </div>
        {/* begin showlistvideo */}
        {/* end showlistvideo */}
        {/* end listVideoCard */}
        </div>

    )
}
