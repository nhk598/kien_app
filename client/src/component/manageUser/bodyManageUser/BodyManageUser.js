import React from 'react'
import ManageListVideo from './manageListVideo/ManageListVideo'
import ManageNewsFeed from './manageNewsFeed/ManageNewsFeed'
import ManageProfile from './manageProfile/ManageProfile'
import Setting from './manageSetting/Setting'

export default function BodyManageUser() {
    return (
        <div className="bodyUser">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
                <button className="nav-link active" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="true">Profile</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="videoList-tab" data-bs-toggle="tab" data-bs-target="#videoList" type="button" role="tab" aria-controls="videoList" aria-selected="false">video List</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="newsfeed-tab" data-bs-toggle="tab" data-bs-target="#newsfeed" type="button" role="tab" aria-controls="newsfeed" aria-selected="false">News feed</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="settings-tab" data-bs-toggle="tab" data-bs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Settings</button>
            </li>
            </ul>
            <div className="tab-content">
                <ManageProfile></ManageProfile>
                <ManageListVideo></ManageListVideo>
                <ManageNewsFeed></ManageNewsFeed>
                <Setting></Setting>
            </div>
        </div>
    )
}
