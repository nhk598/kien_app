import { useQuery } from '@apollo/client'
import React from 'react'
import { getIntroduceVideo } from '../../../../../../graphql-client/Queries'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function IntroduceVideoPlaying() {
    let {id} = useParams();
    
    const {loading, error, data}= useQuery(getIntroduceVideo,{
        variables: {id}
    });
    if(loading) return <p>loading...</p>;
    if (error) return `Error! ${error.message}`;
    console.log(data);
    return (
              
        <div className="tab-pane show active" id="introduce" role="tabpanel" aria-labelledby="introduce-tab">
        {/* begin card author */}
        <div className="d-flex nameUserWatching">
        <Link to={"/user/" + data.video.user.id}><img className="img-video_avatar rounded-circle" alt="" src={data.video.user.avatar} /></Link>
        <Link to={"/user/" + data.video.user.id}><p>{data.video.user.username}</p></Link> 
        </div>
        {/* end card author */}
        {/* begin card mô tả */}
        <h5>Mô tả video: </h5>
        <p>{data.video.description}</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident architecto soluta tenetur quis porro voluptate, necessitatibus voluptates alias. Amet iusto quas molestias corrupti ab ex, perspiciatis iure quod dolor iste!</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident architecto soluta tenetur quis porro voluptate, necessitatibus voluptates alias. Amet iusto quas molestias corrupti ab ex, perspiciatis iure quod dolor iste!</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident architecto soluta tenetur quis porro voluptate, necessitatibus voluptates alias. Amet iusto quas molestias corrupti ab ex, perspiciatis iure quod dolor iste!</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident architecto soluta tenetur quis porro voluptate, necessitatibus voluptates alias. Amet iusto quas molestias corrupti ab ex, perspiciatis iure quod dolor iste!</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident architecto soluta tenetur quis porro voluptate, necessitatibus voluptates alias. Amet iusto quas molestias corrupti ab ex, perspiciatis iure quod dolor iste!</p>
        {/* end card mô tả */}
        {/* end connect introduce */}
        {/* begin connect comment */}
    </div>
    
    )
}
