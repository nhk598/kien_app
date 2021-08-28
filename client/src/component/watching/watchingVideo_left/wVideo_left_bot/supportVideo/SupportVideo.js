import React from 'react'
import IntroduceVideoPlaying from './connectListSp/IntroduceVideoPlaying'
import ListCommentVideoPlaying from './connectListSp/commentVideoPlaying/ListCommentVideoPlaying'
import DocumentVideoPlaying from './connectListSp/DocumentVideoPlaying'

export default function SupportVideo() {
    return (
        <div className="tab-content" id="nav-tabContent">
        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
            <div className="bodyUser" style={{marginTop: '20px'}}>
            {/* begin ListSupportVideo */}
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="introduce-tab" data-bs-toggle="tab" data-bs-target="#introduce" type="button" role="tab" aria-controls="introduce" aria-selected="true">Giới thiệu</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="comments-tab" data-bs-toggle="tab" data-bs-target="#comments" type="button" role="tab" aria-controls="comments" aria-selected="false">Thảo luận</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button  className="nav-link" id="document-tab" data-bs-toggle="tab" data-bs-target="#document" type="button" role="tab" aria-controls="document" aria-selected="false">Tài liệu</button>
                </li>
                </ul>
                {/* <ListSupportVideo></ListSupportVideo> */}
            {/* end ListSupportVideo */}
                {/* begin connectListSp */}
                <div className="tab-content">
                    <ListCommentVideoPlaying/>
                    <DocumentVideoPlaying/>
                    <IntroduceVideoPlaying />
                </div>
                {/* <ConnectListSp></ConnectListSp> */}
                {/* begin connectListSp */}
                
            </div>
        </div>
    </div>
    )
}
