import React from 'react'
import {useState} from 'react'
import { CREATE_VIDEO } from '../../../../../../graphql-client/Mutation';
import { useMutation } from '@apollo/client';
import {VIDEOS_USER_MANAGE} from '../../../../../../graphql-client/Queries'
export default function FormTitleVideo(props) {
    const [formState, setFormState] = useState({
        description: '',
        title:'',
        document:'',
      
      });
    //   Tạo video mới 
      const [createVideo] = useMutation(CREATE_VIDEO, {
        variables: {
          description: formState.description,
        //   url: formState.add.url,
          url: props.urlVideo,
          title:formState.title,
          document:formState.document,
          thumbnail:props.urlThumbnail
        },
        // Cập nhật bộ nhớ cache khi thêm video mới thì danh sách video của người dùng
        // được cập nhật và hiện thì ra video vừa được tải lên
        update:(cache, {data:{video}})=>{
            const skip="9";
            const take="11";
            // Gán biến data với giá trị trong bộ nhớ cache từ query: 
            const data = cache.readQuery({
                query: VIDEOS_USER_MANAGE,
                variables:{skip, take}
            });
            // Gọi lại cache tìm phần thông tin chứa query, thay thế phần thông tin với thong tin data 
            cache.writeQuery({
                query: VIDEOS_USER_MANAGE,
//                 const VIDEO_USER_MANAGE = gql `
                    // query userManage{
                    //     userManage{
                    //         videos{
                    //             id
                    //             title
                    //             thumbnail
                    //             videoLikes{
                    //                 id
                    //             }
                    //             view{
                    //                 id
                    //             }
                    //         }
                    //     }
                    // }
                    // `;
                // data:{
                //     userManage: {
                //         video: [...data.userManage.videos, video]
                //     }
                      
                //     }
            //     data:{
            //         comment: [...data.comment, comment]}
            //   ,
            // const COMMENT_VIDEO = gql `
            // query comment($videoId: String!){
            //     comment(videoId: $videoId){
            //         createdAt
            //         id
            //         text
            //         user{
            //             id
            //             avatar
            //             username
            //         }
            //     }
            // }
            // `;
            // const VIDEOS_USER_MANAGE = gql `
            //     query videosUserManage($skip: String!, $take: String!){
            //         videosUserManage(skip: $skip, take: $take){
            //             id
            //             title
            //             thumbnail
            //             view{
            //                 id
            //             }
            //             videoLikes{
            //                 id
            //             }
            //             user{
            //                 id
            //                 avatar
            //             }
            //         }
            //     }
            //     `
                data:{
                    videosUserManage: {
                        videos: [...data.videosUserManage.videos, video]
                    }
                      
                    }
                ,
                variables:{
                    skip, take
                }
            }); 
            

        },
      });
      const handleSubmit = (e)=> {
        e.preventDefault();
        createVideo();
        setFormState({...formState, description: '', title:'', document:'',})
        alert('Đã thêm video mới thành công ấn nút "Thoát" để quay lại !');
      };
    return (
        <div>
                        <form onSubmit={handleSubmit}>
                                    
                        <div className="mb-3">
                                    <label htmlFor="titleNewVideo-from" className="col-form-label">Tiêu đề vủa Video</label>
                                    <input type="text" className="form-control" id="titleNewVideo-from" style={{height: '50px'}} 
                                    value={formState.title}
                                        onChange={(e) =>
                                        setFormState({
                                            ...formState,
                                            title: e.target.value
                                        })
                                        } 
                                        />
                                    </div>
                                    
                                    <div className="mb-3">
                                    <label htmlFor="descriptionNewVideo-from" className="col-form-label">Miêu tả video</label>
                                    <input type="text" className="form-control" id="descriptionNewVideo-from" style={{height: '100px'}} 
                                    value={formState.description}
                                        onChange={(e) =>
                                        setFormState({
                                            ...formState,
                                            description: e.target.value
                                        })
                                        }
                                         />
                                    </div>
                                    <hr />
                                    <h3>Tài liệu Video</h3>
                                    <div className="mb-3">
                                    <label htmlFor="docsNewVideo-from" className="col-form-label">Thêm tài liệu</label>
                                    <textarea type="text" className="form-control" placeholder="Nhập vào tài liệu của bạn" id="docsNewVideo-from" style={{height: '100px'}} 
                                   
                                    value={formState.document}
                                        onChange={(e) =>
                                        setFormState({
                                            ...formState,
                                            document: e.target.value
                                        })
                                        } 
                                     />
                                    </div>
                                    <div className="modal-footer">
                                    <button type="button" className="btn btn-light" data-bs-dismiss="modal">Thoát</button>
                                    <button type="submit" className="btn btn-info" >Gửi</button>
                                    </div>
                                    </form>
        </div>
    )
}
