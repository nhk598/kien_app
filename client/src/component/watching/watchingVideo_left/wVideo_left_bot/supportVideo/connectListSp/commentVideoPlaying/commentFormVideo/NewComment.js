import { useMutation } from '@apollo/client'
import React from 'react'
import { useParams } from 'react-router-dom'
import {NEW_COMMENT} from '../../../../../../../../graphql-client/Mutation'
import { useState } from 'react'
import { COMMENT_VIDEO } from '../../../../../../../../graphql-client/Queries'

export default function NewComment() {
    const {id} = useParams()
    const [formTextComment, setFormTextComment] = useState({text:''})
    const handleSubmit = (e)=> {
        e.preventDefault();
        new_comment();
        setFormTextComment({
            ...formTextComment,text:""
          })
      };
    
    const [new_comment] = useMutation(NEW_COMMENT, {
        // Nhập vào tham số
        variables:{
            // Nhập vào id của video từ id trên params
            videoId: id, 
            // Nhập vào text của comment từ state 
            text: formTextComment.text
        },
        // Cập nhật bộ nhớ cache với data comment thay đổi
        
        update:(cache, {data:{comment}})=>{
            // Gán biến data với giá trị trong bộ nhớ cache từ query: 
            const data = cache.readQuery({
                query: COMMENT_VIDEO,
                variables: {videoId:id}
                
            });
            // Gọi lại cache tìm phần thông tin chứa query, thay thế phần thông tin với thong tin data 
            cache.writeQuery({
                query: COMMENT_VIDEO,
                data:{
                      comment: [...data.comment, comment]}
                ,
                variables: {videoId:id}
            }); 
        },   
    })
    return (
        <div className="d-flex-column newComment">
            <div className="headerNewComment d-flex input-group ">
                <span className="input-group-text" id="basic-addon1">
                <img className="img- video_avatar" alt="" src="./gai.jpg" />
                </span>
                <form onSubmit={handleSubmit} >
                        <input type="text" style={{height: '50px', width:'400px'}} className="form-control" placeholder="Đặt câu hỏi hoăc bình luận của bạn..." aria-label="Username" aria-describedby="basic-addon1" 
                        value={formTextComment.text}
                        onChange={(e) =>
                          setFormTextComment({
                            ...formTextComment,text:e.target.value
                          })
                        }
                        />
                       
                            <button className="btn  me-md-2 ms-auto" type= "submit" >Gửi</button>
                            <button className="btn " type="button">Hủy</button>
                        
                </form>
                
            </div>
            
            </div>
    )
}
