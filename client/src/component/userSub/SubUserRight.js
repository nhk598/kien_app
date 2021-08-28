import React from 'react'

export default function SubUserRight() {
    
    return (
        <div className="col-xl-10 col-mb-10 col-sm-10">
            <div className="recommendedVideos">
                <div className="recommendedVideos_videos">
                <div>
                    <h2 style={{marginTop: '50px'}}>Danh sách kênh đăng ký</h2>
                        <div className="row">
                                {/* begin listUserCard */}
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mr-auto UserCard">
                                <div className="card">
                                    <div className="card-body">
                                    {/* begin card author */}
                                    <div className="d-flex nameUserWhatching">
                                        <a href="./user.html"><img className="img-video_avatar rounded-circle" alt="" src="./gai.jpg" /></a>
                                        <a href="./user.html"><p>Tài chính và kinh doanh</p></a> 
                                    </div>
                                    {/* end card author */}
                                    <div className="d-flex flex-column">
                                        <h5>Giới thiệu</h5>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla recusandae perferendis fuga a consequatur magni neque delectus ut ipsa atque itaque architecto, vitae sint nemo dolore vero accusamus quidem iure.</p>
                                    </div>
                                    <div className="d-flex mx-auto">
                                        <p>1000</p>
                                        <div style={{marginLeft: '2px', marginRight: '2px'}}>•</div>
                                        <p>Người đăng ký</p>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                {/* end listUserCard */}
                            
                        </div>
                </div>

                </div>
            </div>
        </div>
    )
}
