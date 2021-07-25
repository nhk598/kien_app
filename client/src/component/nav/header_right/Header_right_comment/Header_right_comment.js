import React from 'react'

export default function Header_right_comment() {
    return (
        <div className="btn-group dropstart">
                {/* icon thao luan */}
                <button type="button" className="btn dropdown" data-bs-toggle="dropdown" aria-expanded="false" data-bs-placement="bottom" title="thông báo">
                    <a className="nav-link " href="#">
                    {/* icon */}
                    <i className="fas fa-comments" /> 
                    {/* so luong thảo luận mới*/}
                    <span className="badge bg-primary">4</span>
                    </a>
                </button>
                {/* end icon tao luan */}
                {/* drop danh sach thảo luận */}
                <ul className="dropdown-menu notification">
                    {/* begin card comment */}
                    <div className="d-flex-column cardComment">
                    {/* begin heder card comment */}
                    <div className="headerCommented border d-flex">
                        {/* bergin card like  */}
                        <div className="d-flex border iconLikeComment">
                        {/* begin iconLike */}
                        <div className="d-flex flex-column">
                            <a href><i className="fas fa-chevron-up" /></a>
                            <a href><i className="fas fa-chevron-down" /></a>
                        </div>
                        {/* end iconLike */}
                        {/* begin likeText */}
                        <div className="d-flex-column likeText">
                            <p>2000</p>
                            <p>Like</p>
                        </div>
                        {/* end likeText */}
                        </div>
                        {/* end card like*/}
                        {/* begin card info author video */}
                        {/* begin card author */}
                        <div className="d-flex nameUserWhatching">
                        <a href="./user.html"><img className="img-video_avatar rounded-circle" alt="" src="./gai.jpg" /></a>
                        <a href="./user.html"><p>Tài chính và kinh doanh</p></a> 
                        </div>
                        {/* end card author */}
                        {/* end card info author video */}
                        <p>10 ngày trước</p>
                    </div>
                    {/* end heder card comment */}
                    {/* begin text commented */}
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis nam cumque dolorem facere, hic fugit, magni similique labore ipsa unde placeat, mollitia quam aspernatur nihil ab architecto! Autem, facere nihil?</p>
                    {/* end text commented */}
                    {/* begin button new comment */}
                    <button className="btn border d-flex" type="button" data-bs-toggle="collapse" data-bs-target="#abuttonNewComment" aria-expanded="false" aria-controls="abuttonNewComment">
                        Trả lời
                    </button>
                    <div className="collapse" id="abuttonNewComment">
                        <div className="card card-body">
                        {/* begin new comment */}
                        <div className="d-flex-column newComment">
                            <div className="headerNewComment d-flex input-group ">
                            <span className="input-group-text" id="basic-addon1">
                                <img className="img- video_avatar" alt="" src="./gai.jpg" />
                            </span>
                            <input type="text" style={{height: '50px'}} className="form-control" placeholder="Bình luận của bạn..." aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div className="d-flex " style={{marginTop: '10px'}}>
                            <button className="btn  me-md-2 ml-auto" type="button">Gửi</button>
                            <button className="btn " type="button">Hủy</button>
                            </div>
                        </div>
                        {/* end new comment */}
                        </div>
                    </div>
                    {/* end button new comment */}
                    {/* begin phan hoi  */}
                    <div className="row">
                        <div className="col-10 ml-auto">
                        <a className="btn " data-bs-toggle="collapse" href="#buttonListComment" role="button" aria-expanded="false" aria-controls="buttonListComment">
                            Xem các câu trả lời
                        </a>
                        <div className="collapse" id="buttonListComment">
                            <div className="card card-body">
                            {/* begin heder card comment */}
                            <div className="headerCommented border d-flex">
                                {/* bergin card like  */}
                                <div className="d-flex border iconLikeComment">
                                <div className="d-flex flex-column">
                                    <a href><i className="fas fa-chevron-up" /></a>
                                    <a href><i className="fas fa-chevron-down" /></a>
                                </div>
                                <p>1000 Like</p>
                                </div>
                                {/* end card like*/}
                                {/* begin card info author video */}
                                {/* begin card author */}
                                <div className="d-flex nameUserWhatching">
                                <a href="./user.html"><img className="img-video_avatar rounded-circle" alt="" src="./gai.jpg" /></a>
                                <a href="./user.html"><p>Tài chính và kinh doanh</p></a> 
                                </div>
                                {/* end card author */}
                                {/* end card info author video */}
                                <p>10 ngày trước</p>
                            </div>
                            {/* end heder card comment */}
                            {/* begin text commented */}
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis nam cumque dolorem facere, hic fugit, magni similique labore ipsa unde placeat, mollitia quam aspernatur nihil ab architecto! Autem, facere nihil?</p>
                            {/* end text commented */}
                            <button className="ml-auto">Phản Hồi</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* end phan hoi  */}
                    </div>
                    {/*end card comment */}
                </ul>
                {/* end drop danh sach thong bao */}
         </div>

    )
}
