import React from 'react'
import {useState} from 'react'
import FormTitleVideo from './formTitleVideo/FormTitleVideo';
import { openUploadWidget } from "../../../../../cloudinaryService/CloudinaryService";

export default function FormNewVideo() {

    const [formState, setFormState] = useState({
        add:{
          url: '',
          thumbnail:''
        }
      });

      const beginUpload = tag => {
        const uploadOptions = {
          cloudName: "nhk598",
          tags: [tag],
          uploadPreset: "tailen"
        };
      
        openUploadWidget(uploadOptions, (error, video) => {
          if (!error) {
            console.log(video.info.thumbnail_url);
            if(video.event === 'success'){
              setFormState({...formState,add: {url:video.info.secure_url, thumbnail:video.info.thumbnail_url}});
            }
            
          } else {
            console.log(error);
          }
        })
        
      }
    return (
        
        <div className="modal fade" id="newVideoModal" tabIndex={-1} aria-labelledby="newVideoModalModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                <h5 className="modal-title" id="newVideoModalModalLabel">Tải lên video mới của bạn</h5>
                                </div>
                                <div className="modal-body">    
                                    <div className="form-group">
                                 
                                    <label htmlFor="new-Video">Chọn Video của bạn</label>
                                    <button value={formState.add.url} id="new-Video" onClick={() => beginUpload()}>Upload Video</button>
                                   
                                    {/* <input className="form-control-file" id="new-Video" value={formState.add.url} onClick={() => beginUpload()}/> */}

                                    </div>
                                    <FormTitleVideo urlVideo={formState.add.url} urlThumbnail={formState.add.thumbnail}></FormTitleVideo>
                                    
                                </div>
                                
                            </div>
                            </div>
                        </div>
    )
}
