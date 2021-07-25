import React, { Component } from 'react'



export default function ConnectListSp() {
    
        return (
            /* begin connect menu introduce comment document */
                <div className="tab-content">
                    {/* begin connect menu introduce */}
                    <div className="tab-pane show active" id="introduce" role="tabpanel" aria-labelledby="introduce-tab">
                        {/* begin card author */}
                        <div className="d-flex nameUserWhatching">
                        <a href="./user.html"><img className="img-video_avatar rounded-circle" alt="" src="./gai.jpg" /></a>
                        <a href="./user.html"><p>Tài chính và kinh doanh</p></a> 
                        </div>
                        {/* end card author */}
                        {/* begin card mô tả */}
                        <h5>Mô tả video: </h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident architecto soluta tenetur quis porro voluptate, necessitatibus voluptates alias. Amet iusto quas molestias corrupti ab ex, perspiciatis iure quod dolor iste!</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident architecto soluta tenetur quis porro voluptate, necessitatibus voluptates alias. Amet iusto quas molestias corrupti ab ex, perspiciatis iure quod dolor iste!</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident architecto soluta tenetur quis porro voluptate, necessitatibus voluptates alias. Amet iusto quas molestias corrupti ab ex, perspiciatis iure quod dolor iste!</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident architecto soluta tenetur quis porro voluptate, necessitatibus voluptates alias. Amet iusto quas molestias corrupti ab ex, perspiciatis iure quod dolor iste!</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident architecto soluta tenetur quis porro voluptate, necessitatibus voluptates alias. Amet iusto quas molestias corrupti ab ex, perspiciatis iure quod dolor iste!</p>
                        {/* end card mô tả */}
                        {/* end connect introduce */}
                        {/* begin connect comment */}
                    </div>
                    {/* end connect menu introduce  */}
                    {/* begin connect menu comment */}
                    <div className="tab-pane" id="comments" role="tabpanel" aria-labelledby="comments-tab">
                        <div className="binhLuan d-flex-column fa-border">
                            {/* begin new comment */}
                            <div className="d-flex-column newComment">
                            <div className="headerNewComment d-flex input-group ">
                                <span className="input-group-text" id="basic-addon1">
                                <img className="img- video_avatar" alt="" src="./gai.jpg" />
                                </span>
                                <input type="text" style={{height: '50px'}} className="form-control" placeholder="Đặt câu hỏi hoăc bình luận của bạn..." aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div className="d-flex " style={{marginTop: '10px'}}>
                                <button className="btn  me-md-2 ml-auto" type="button">Gửi</button>
                                <button className="btn " type="button">Hủy</button>
                            </div>
                            </div>
                            {/* end new comment */}
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
                            <button className="btn border d-flex" type="button" data-bs-toggle="collapse" data-bs-target="#buttonNewComment" aria-expanded="false" aria-controls="buttonNewComment">
                                Trả lời
                            </button>
                            <div className="collapse" id="buttonNewComment">
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
                                    </div>
                                </div>
                                </div>
                            </div>
                            {/* end phan hoi  */}
                            </div>
                            {/*end card comment */}
                        </div>
                    </div>

                    {/* end connect menu comment */}
                    {/* begin connect menu doccument */}
                    <div className="tab-pane" id="document" role="tabpanel" aria-labelledby="document-tab">
                        adsaad
                    
                    </div>
                    {/* end connect menu comment */}
                    </div>

        )
    }

