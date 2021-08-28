
import { NavLink } from 'react-router-dom'
import React from 'react'

export default function HomeLeft() {
    return (
        <div className="col-xl-2 col-mb-1 col-sm-1 sideBar ">
                <div className="navigation">
                            <ul>
                                <li>
                                <NavLink to="/">
                                    <span className="Icon"><i className="fas fa-home" /></span>
                                    <span className="title">Trang chủ</span>
                                </NavLink>
                                </li>
                                <li>
                                <NavLink to="/manageUser">
                                    <span className="Icon"><i className="fas fa-user-tie" /></span>
                                    <span className="title">Kênh của bạn</span>
                                </NavLink>
                                </li>
                                <li>
                                <NavLink to="/news">
                                    <span className="Icon"><i className="fab fa-hotjar" /></span>
                                    <span className="title">Bản tin</span>
                                </NavLink>
                                </li>
                                <li>
                                <NavLink to="/videosWatched">
                                    <span className="Icon"><i className="fas fa-hourglass-start" /></span>
                                    <span className="title">Đã xem gần đây</span>
                                </NavLink>
                                </li>
                                <li>
                                <NavLink to="/videosLike">
                                    <span className="Icon"><i className="fas fa-user-clock" /></span>
                                    <span className="title">Video đã like</span>
                                </NavLink>
                                </li>
                                <li>
                                <NavLink to="/userFollow">
                                    <span className="Icon"><i className="fas fa-calendar-check" /></span>
                                    <span className="title">Kênh đă đăng ký</span>
                                </NavLink>
                                </li>
                            </ul>
                </div> 
            </div>
    )
}

