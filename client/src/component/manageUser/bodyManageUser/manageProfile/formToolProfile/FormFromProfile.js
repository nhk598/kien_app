import React from 'react'

export default function FormFromProfile() {
    return (
        <div className="modal fade" id="toolFromProfileModal" tabIndex={-1} aria-labelledby="toolFromProfileModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title" id="toolFromProfileModalLabel">Chỉnh sửa phần giới thiệu của bạn</h5>
                        </div>
                        <div className="modal-body">
                        <form>
                            <div className="mb-3">
                            <label htmlFor="Channels-address" className="col-form-label">Địa chỉ liên lạc:</label>
                            <textarea className="form-control" id="Channels-address" style={{height: '100px'}} defaultValue={""} />
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
