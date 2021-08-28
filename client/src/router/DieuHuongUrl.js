
import React from 'react'
import { Route, Switch} from "react-router-dom";
import Home from '../component/home/Home';
import WatchingVideo from '../component/watching/WatchingVideo'
import NewsFeed from '../component/newsFeed/NewsFeed'
import UserSub from '../component/userSub/UserSub'
import VideosLike from '../component/videosLike/VideosLike';
import User from '../component/user/User';
import ManageUser from '../component/manageUser/ManageUser';
import Login from '../component/login/Login';
import VideosSearch from '../component/videosSearch/VideosSearch';
import VideosWatched from '../component/videoWatched/VideoWatched'
export default function DieuHuongUrl() {
    const routes = [
        {
          path: "/",
          exact: true,
          main: () => <Home/>
        },
        {
          path: "/watching/:id",
          main: () => <WatchingVideo/>
        },
        {
          path: "/news",
          main: () => <NewsFeed/>
        },
        {
            path: "/userFollow",
            main: () => <UserSub/>
        },
        {
            path: "/videosLike",
            main: () => <VideosLike/>
        },
        {
            path: "/videosWatched",
            main: () => <VideosWatched/>
        },
        {
            path: "/user/:idUser",
            main: () => <User/>
        },
        {
            path: "/manageUser",
            main: () => <ManageUser/>
        },
        {
            path: "/login",
            main: () => <Login/>
        },
        {
            path: "/videosSearch",
            main: () => <VideosSearch/>
        }
      ];
      
        return (
            // <div>  
                <Switch>
                    {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                children={<route.main />}
                            />
                    ))}
                </Switch>
            // </div>
           
        )
    }

