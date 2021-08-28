import {  useMutation } from '@apollo/client'
import React from 'react'
import { PUBLISH_USER } from '../../../../../graphql-client/Mutation'
import { useState } from 'react'
import {openUploadWidget} from '../../../../../cloudinaryService/CloudinaryService'

export default function CoverForm() {

        const [coverForm, setCoverForm] = useState({
        coverForm:'', 
        });

        const [settingUser] = useMutation(PUBLISH_USER,{
          variables:{
            cover: coverForm.coverForm,
            
          }
        });

        const beginUpload = tag => {
          const uploadOptions = {
            cloudName: "nhk598",
            tags: [tag],
            uploadPreset: "tailen"
          };
        
          openUploadWidget(uploadOptions, (error, photos) => {
            if (!error) {
              if(photos.event === 'success'){
                 setCoverForm({...coverForm,coverForm: photos.info.secure_url});
              }
            } else {
              console.log(error);
            }
          })
        }

    return (
        <form action="submit"
          onSubmit={(e) => {
            e.preventDefault();
            settingUser();
            alert('Đã thay đổi ảnh bìa thành công !');
          }}>

            <div className="form-group">
                    <label htmlFor="manageAvatar">Chọn ảnh bìa</label>
                    <button value={settingUser.coverForm} onClick={() => beginUpload()}>Chọn ảnh bìa của bạn</button>       
            </div>
            
            <button type="submit" className="btn btn-primary">Cập nhật</button>
        </form>
        
    )
}
