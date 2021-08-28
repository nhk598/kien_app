import { useState } from 'react'
import { useLazyQuery } from '@apollo/client';
import React from 'react'
import { VIDEOS_SEARCH } from '../../../graphql-client/Queries';
import { Link, useHistory } from 'react-router-dom';
import VideosSearch from '../../videosSearch/VideosSearch';
export default function HeaderMid() {
  const history = useHistory();
  const [searchFilter, setSearchFilter] = useState('');
  const [executeSearch, { data }] = useLazyQuery(
    VIDEOS_SEARCH
  );
  console.log(data);
  return (
    <>
    <form className="d-flex">
            <input onChange={(e) => setSearchFilter(e.target.value)} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <Link onClick={() =>
            {executeSearch({
              variables: { filter: searchFilter }
            });
            history.push(`/videosSearch`);
            }

          } className="btn btn-outline-success" type="submit"><i className="fas fa-search" /></Link>
          
    </form>
    {data &&
      data.videosSearch.map((video)=>{     
                      
        return (                                  
             <VideosSearch
                 key={video.id}
                 title ={video.title}
                 username={video.user.username}
                 date={video.createdAt}
                 view={video.view.length}
                 like={video.videoLikes.length}
                 videoId={video.id}
                 avatarUser={video.user.avatar}
                 idUser={video.user.id}
               >
               
               </VideosSearch>
        )
    })
      }
      </>
  )
}
