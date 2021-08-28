import React from 'react'
import NewComment from './commentFormVideo/NewComment'
import CommentVideo from './CommentVideo'
export default function ListCommentVideoPlaying() {
    return (
        
        <div className="tab-pane" id="comments" role="tabpanel" aria-labelledby="comments-tab">
        <div className="binhLuan d-flex-column fa-border">
            {/* begin new comment */}
            <NewComment></NewComment>
            {/* end new comment */}
            {/* begin card comment */}
            <CommentVideo></CommentVideo>
            {/*end card comment */}
        </div>
    </div>
    )
}
