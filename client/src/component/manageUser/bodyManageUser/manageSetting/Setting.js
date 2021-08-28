import { useMutation } from '@apollo/client'
import React from 'react'
import { PUBLISH_USER } from '../../../../graphql-client/Mutation'
import { useState } from 'react'
import {openUploadWidget} from '../../../../cloudinaryService/CloudinaryService'
import AvatarForm from './settingForm/AvatarForm'
import CoverForm from './settingForm/CoverForm'
export default function Setting() {
  
 const [fromSettingUser, setFromSettingUser] = useState({
   fromName:'',
   fromAvatar:'', 
   fromCover:'',
  });

  const [settingUser] = useMutation(PUBLISH_USER,{
    variables:{
      username:fromSettingUser.fromName,
    }
  });
  
    return (
        <div className="tab-pane" id="settings" role="tabpanel" aria-labelledby="settings-tab">
          <div className="container">
            <div className="row ">
              <hr />
              <div className="col-12 formdangky mx-auto">
                <div className="form-group">
                  <form action="submit"
                  onSubmit={(e) => {
                    e.preventDefault();
                    settingUser();
                    
                  }}
                  >

                  <h2>Thông tin cá nhân</h2>
                  
                  <hr />
                  <label htmlFor="inputName">Nhập tên</label>
                  <input type="text" name="inputName" id="inputName" className="form-control" placeholder="tên của bạn là" aria-describedby="helpId" 
                  value={fromSettingUser.fromName}
                  onChange={(e) =>
                    setFromSettingUser({
                      ...fromSettingUser,
                      fromName: e.target.value
                    })
                  }
                  />
                  
                  <button type="submit" className="btn btn-primary">Cập nhật</button>
                  </form>
                  <AvatarForm></AvatarForm>
                  <CoverForm></CoverForm>
                </div>
              </div>
            </div>
          </div>
        </div>

    )
}
