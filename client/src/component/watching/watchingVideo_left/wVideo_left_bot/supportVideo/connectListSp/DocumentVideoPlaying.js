import React from 'react'
import { useQuery } from '@apollo/client';
import { getDocumentVideo } from '../../../../../../graphql-client/Queries';
import { useParams } from 'react-router-dom';
export default function DocumentVideoPlaying() {
     // lấy id của video trên url/
     let {id} = useParams();
     // lấy dữ liệu thông tin video
     const {loading, error, data} = useQuery(getDocumentVideo,{
         variables: {id},
     });
     if(loading) return <p>loading...</p>;
     if (error) return `Error! ${error.message}`;

     console.log(data);
    return (
        <div className="tab-pane" id="document" role="tabpanel" aria-labelledby="document-tab">
                        
                        <p>{data.video.document}</p>
                        <p>Khon co tai lieu</p>
                        {/* {props.doc} */}
                        
                    
        </div>

    )
}
