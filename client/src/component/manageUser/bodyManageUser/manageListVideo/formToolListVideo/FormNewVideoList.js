import React from 'react'

export default function FormNewVideoList() {
    return (
        <div className="modal fade" id="NewVideoListModal" tabIndex={-1} aria-labelledby="NewVideoListModalModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title" id="NewVideoListModalModalLabel">Tạo danh sách VideoList mới</h5>
                    </div>
                    <div className="modal-body">
                    
                        <div className="mb-3">
                        <label htmlFor="titleNewVideoList-from" className="col-form-label">Tên của VideoList</label>
                        <textarea className="form-control" id="titleNewVideoList-from" style={{height: '50px'}} defaultValue={""} />
                        </div>
                        <div className="mb-3">
                        <label htmlFor="descriptionNewVideoList-from" className="col-form-label">Miêu tả VideoList</label>
                        <textarea className="form-control" id="descriptionNewVideoList-from" style={{height: '100px'}} defaultValue={""} />
                        </div>
                        <div className="form-group">
                        <label htmlFor="new-listVideo">Chọn ảnh đại diện của videoList</label>
                        <input type="file" className="form-control-file" id="new-listVideo" />
                        </div>
                        <hr />
                    
                    </div>
                    <div className="modal-footer">
                    <button type="button" className="btn btn-light" data-bs-dismiss="modal">Thoát</button>
                    <button type="button" className="btn btn-success">Tạo</button>
                    </div>
                </div>
                </div>
            </div>
    )
}
