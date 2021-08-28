import React from 'react'

export default function FormVideoProfile() {
    return (
        <div className="modal fade" id="toolVideoProfileModal" tabIndex={-1} aria-labelledby="toolVideoProfileModalLabel" aria-hidden="true">
        <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
            <h5 className="modal-title" id="toolVideoProfileModalLabel">Chỉnh sửa phần giới thiệu của bạn</h5>
            </div>
            <div className="modal-body">
            <form>
                <div className="form-group">
                <label htmlFor="introduceChannels-Video">Chọn Video giới thiệu của bạn</label>
                <input type="file" className="form-control-file" id="introduceChannels-Video" />
                </div>
            </form>
            </div>
            <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Thoát</button>
            <button type="button" className="btn btn-primary">Gửi</button>
            </div>
        </div>
        </div>
    </div>
    )
}
