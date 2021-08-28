import { useMutation } from '@apollo/client'
import React from 'react'
import { PUBLISH_USER } from '../../../../../graphql-client/Mutation'
import { useState } from 'react'
import {openUploadWidget} from '../../../../../cloudinaryService/CloudinaryService'

export default function AvatarForm() {

      const [avatarForm, setAvatarForm] = useState({
       avatarForm:'', 
       
       });

       const [settingUser] = useMutation(PUBLISH_USER,{
         variables:{
           
           avatar: avatarForm.avatarForm,
           
           
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
                setAvatarForm({...avatarForm,avatarForm: photos.info.secure_url});
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
          alert('Đã thay đổi ảnh đại diện thành công !');        
        }}>
            <div className="form-group">
                    <label htmlFor="manageAvatar">Chọn ảnh đại diện</label>
                    <button value={settingUser.avatarForm} onClick={() => beginUpload()}>Tải lên ảnh đại diện</button>
                                      
                  </div>
                  <button type="submit" className="btn btn-primary">Cập nhật</button>
        </form>
    );
}
