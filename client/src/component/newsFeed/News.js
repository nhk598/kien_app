import React from 'react'

export default function News() {
    return (
        
        <div className="col-xl-10 col-mb-10 col-sm-10">
            <div className="recommendedVideos">
                <div className="recommendedVideos_videos">
                <div className="binhLuan d-flex-column fa-border">
                <h2 style={{marginTop: '50px'}}>Tin mới</h2>
                {/* begin card News */}
                <div className="d-flex-column border cardComment">
                    {/* begin heder card News */}
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
                    {/* end heder card News */}
                    {/* begin contentNews */}
                    <div className="row col-xl-10 col-lg-10 col-md-10 col-sm-10 mx-auto">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione quibusdam error culpa vitae, numquam commodi eveniet laudantium voluptas, natus ab cum aspernatur officiis nobis, quod ut fuga asperiores. Neque, accusantium?</p>
                    {/* bigin img news */}
                    <img src="./bg_1.jpg" className="imgNews" alt="" />
                    {/* end img news */}
                    {/* begin footer menu icon News */}
                    <div className="d-flex iconcommentShareNews">
                        <button className="btn " data-bs-toggle="collapse" href="#buttonNewComment" role="button" aria-expanded="false" aria-controls="buttonNewComment">
                        <i className="far fa-comment">Trả lời</i>
                        </button>
                        <button className="btn " type="button" data-bs-toggle="collapse" data-bs-target="#buttonListComment" aria-expanded="false" aria-controls="buttonListComment">
                        <i className="far fa-comments">Thảo luận</i>
                        </button>
                        <button className="btn"><i className="fas fa-share-alt-square">Share</i></button>
                    </div>
                    {/* end footer menu icon News */}
                    {/* begin connect Icon new comment */}
                    <div className="collapse" id="buttonNewComment">
                        <div className="card card-body">
                        <div className="d-flex-column newComment">
                            <div className="headerNewComment d-flex input-group ">
                            <span className="input-group-text" id="basic-addon1">
                                <img className="img- video_avatar" alt="" src="./gai.jpg" />
                            </span>
                            <input type="text" style={{height: '50px'}} className="form-control" placeholder="Đặt câu hỏi hoặc viết bình luận của bạn..." aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div className="d-flex " style={{marginTop: '10px'}}>
                            <button className="btn  me-md-2 ml-auto" type="button">Gửi</button>
                            <button className="btn " type="button">Hủy</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* end conect Icon new comment */}
                    {/* begin connect button commentS */}
                    <div className="row">
                        <div className="col-12 ml-auto">
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
                            {/* begin button new comment */}
                            <button className="btn border d-flex" type="button" data-bs-toggle="collapse" data-bs-target="#a1buttonNewComment" aria-expanded="false" aria-controls="a1buttonNewComment">
                                Trả lời
                            </button>
                            <div className="collapse" id="a1buttonNewComment">
                                <div className="card card-body">
                                {/* begin new comment */}
                                <div className="d-flex-column newComment">
                                    <div className="headerNewComment d-flex input-group ">
                                    <span className="input-group-text" id="basic-addon1">
                                        <img className="img- video_avatar" alt="" src="./gai.jpg" />
                                    </span>
                                    <input type="text" style={{height: '50px'}} className="form-control" placeholder="Đặt câu hỏi hoặc viết bình luận của bạn..." aria-label="Username" aria-describedby="basic-addon1" />
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
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* end comnect button comments */}
                    <hr />
                    </div>
                </div>
                {/*end card News */}
                </div>

                </div>
            </div>
        </div>
        
    )
}
