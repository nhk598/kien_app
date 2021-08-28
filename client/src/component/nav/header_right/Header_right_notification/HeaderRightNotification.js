import React, { Component } from 'react'

export default class HeaderRightNotification extends Component {
    render() {
        return (
            <div className="btn-group dropstart">
                    {/* icon thong bao */}
                    <button type="button" className="btn dropdown" data-bs-toggle="dropdown" aria-expanded="false" data-bs-placement="bottom" title="thông báo">
                        <a className="nav-link " href="#">
                        {/* icon */}
                        <i className="far fa-bell" /> 
                        {/* so luong thong bao */}
                        <span className="badge bg-primary">4</span>
                        </a>
                    </button>
                    {/* end icon thong bao */}
                    {/* drop danh sach thong bao */}
                    <ul className="dropdown-menu notification">      
                        {/* một thông báo */}
                        <li>
                        <div className="d-flex">
                        <div className="nameCommented d-flex">
                            <a href> <img className="img- video_avatar" alt="" src="./gai.jpg" /></a>
                            <div className="d-flex">
                            <p>Tài chính kinh doanh </p>
                            <p>đã đăng video mới</p>
                            </div>
                        </div>
                        </div>
                        </li>
                        
                        {/* end */}
                        {/* begin card comment */}
                        <li>
                        <div className="d-flex-column cardComment">
                            {/* begin heder card comment */}
                            <div className="headerCommented border d-flex">
                                    {/* bergin card like  */}
                                    <div className="d-flex border iconLikeVideo">
                                        <div className="d-flex flex-column">
                                            <a href><i className="fas fa-chevron-up" /></a>
                                            <a href><i className="fas fa-chevron-down" /></a>
                                        </div>
                                        <p>1000 Like</p>
                                    </div>
                                    {/* end card like*/}
                                    {/* begin card info author video */}
                                    <div className="nameCommented d-flex">
                                        <a href="./user.html"> <img className="img- video_avatar" alt="" src="./gai.jpg" /></a>
                                        <a href><h4>Tài chính kinh doanh</h4></a>
                                    </div>
                                    {/* end card info author video */}
                                    <p>10 ngày trước</p>
                            </div>
                            {/* end heder card comment */}
                            {/* begin text commented */}
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis nam cumque dolorem facere, hic fugit, magni similique labore ipsa unde placeat, mollitia quam aspernatur nihil ab architecto! Autem, facere nihil?</p>
                            {/* end text commented */}
                            <button className="ms-auto">Phản Hồi</button>
                            <div className="row">
                                <div className="col-10 ms-auto">
                                    <a className="btn " data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                        Xem các câu trả lời
                                    </a>
                                <div className="collapse" id="collapseExample">
                                    <div className="card card-body">
                                        {/* begin heder card comment */}
                                        <div className="headerCommented border d-flex">
                                            {/* bergin card like  */}
                                            <div className="d-flex border iconLikeVideo">
                                                <div className="d-flex flex-column">
                                                    <a href><i className="fas fa-chevron-up" /></a>
                                                    <a href><i className="fas fa-chevron-down" /></a>
                                                </div>
                                                <p>1000 Like</p>
                                            </div>
                                            {/* end card like*/}
                                            {/* begin card info author video */}
                                            <div className="nameCommented d-flex">
                                                <a href> <img className="img- video_avatar" alt="" src="./gai.jpg" /></a>
                                                <a href><h4>Tài chính kinh doanh</h4></a>
                                            </div>
                                            {/* end card info author video */}
                                            <p>10 ngày trước</p>
                                        </div>
                                        {/* end heder card comment */}
                                        {/* begin text commented */}
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis nam cumque dolorem facere, hic fugit, magni similique labore ipsa unde placeat, mollitia quam aspernatur nihil ab architecto! Autem, facere nihil?</p>
                                        {/* end text commented */}
                                        <button className="ms-auto">Phản Hồi</button>
                                    </div>
                                 </div>
                            </div>
                            </div>
                        </div>
                        </li>
                        
                        {/*end card comment */}
                    </ul>
                    {/* end drop danh sach thong bao */}
            </div>

        )
    }
}
