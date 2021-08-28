import React from 'react'
import {PUBLISH_USER} from '../../../../../graphql-client/Mutation'
import {GET_AVATAR_USER_MANAGE} from '../../../../../graphql-client/Queries'
import { useState } from 'react'
import { useMutation } from '@apollo/client'
export default function FormTextProfile() {
    const [fromTextProfile, setFromTextProfile] = useState({text:''})
    const [creatFromTextProfile] = useMutation(PUBLISH_USER,{
        variables: {
            about: fromTextProfile.text
        },
        update:(cache, {data: {about}})=>{
          const data = cache.readQuery({
            query: GET_AVATAR_USER_MANAGE,
          })
          
          cache.writeQuery({
            query:GET_AVATAR_USER_MANAGE,
            data:{
              userManage:
              {about: [...data.userManage.about, about]}
              
            }
          })
        }
      }
        )
        
    return (
        <div className="modal fade" id="toolTextProfileModal" tabIndex={-1} aria-labelledby="toolTextProfileModalLabel" aria-hidden="true">
        <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
            <h5 className="modal-title" id="toolTextProfileModalLabel">Chỉnh sửa phần giới thiệu của bạn</h5>
            </div>
            <div className="modal-body">
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                creatFromTextProfile();
                setFromTextProfile({fromTextProfile, text:''})
                alert("Đã thay đổi giới thiệu ấn vào 'Thoát' để trở lại !" )
              }}
            >
                <div className="mb-3">
                <label htmlFor="introduceChannels-text" className="col-form-label">Giới thiệu kênh:</label>
                <textarea className="form-control" id="introduceChannels-text" style={{height: '200px'}} 
                    value={fromTextProfile.text}
                    onChange={(e) =>
                      setFromTextProfile({
                        ...fromTextProfile,
                        text: e.target.value
                      })
                    }
                />
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Thoát</button>
                    <button type="submit" className="btn btn-primary">Gửi</button>
                </div>
            </form>
            </div>
            
        </div>
        </div>
    </div>
    )
}
