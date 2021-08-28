import React from 'react'
import FormNewFeed from './formToolNewsFeed/FormNewFeed'
import News from '../../../newsFeed/News'
export default function ManageNewsFeed() {
    return (
        
        <div className="tab-pane" id="newsfeed" role="tabpanel" aria-labelledby="newsfeed-tab">
            <FormNewFeed></FormNewFeed>
            <News></News>
        </div>
    )
}
