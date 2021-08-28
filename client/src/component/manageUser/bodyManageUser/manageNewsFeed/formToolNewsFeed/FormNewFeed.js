import React from 'react'

export default function FormNewFeed() {
    return (
            <div className="card">
                <div className="card-body">
                {/* begin card author */}
                <div className="d-flex nameUserWhatching">
                    <a href="./user.html"><img className="img-video_avatar rounded-circle" alt="" src="./gai.jpg" />
                    </a>
                    <a href="./user.html">
                    <p>Tài chính và kinh doanh</p>
                    </a>
                </div>
                {/* end card author */}
                <div className="d-flex flex-column">
                    <div>
                    <h5>Viết bài</h5>
                    
                        <div className="mb-3">
                        <label htmlFor="news-text" className="col-form-label">Bài viết của bạn</label>
                        <textarea className="form-control" id="news-text" placeholder="thêm bài viết" defaultValue={""} />
                        </div>
                        <div className="form-group">
                        <label htmlFor="file-News">Chọn tài liệu của Video</label>
                        <input type="file" className="form-control-file" id="file-News" />
                        </div>
                    
                    <button className="btn btn-outline-success" type="submit">Đăng</button>
                    </div>
                </div>
                </div>
            </div>
        
    )
}
