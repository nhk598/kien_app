
import { NavLink } from 'react-router-dom'
import React from 'react'

export default function HeaderLeft() {
    return (
        <div className="IconMenu flex-fill ">
                    {/* begin iconMenu */}
                    <a className="btn " data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                        <i className="fas fa-bars a1 mx-t toggle" />
                    </a>
                    {/* begin sidebar */}
                    <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                        <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
                        </div>
                        <div className="offcanvas-body">
                        {/* begin iconMenuSideBar */}
                        <div className="col-1 sideBar ">
                            <div className="navigation1">
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
                                    <span className="title">Kênh đã đăng ký</span>
                                </NavLink>
                                </li>
                            </ul>
                            </div> 
                        </div>
                        {/* end iconMenuSideBar */}
                        </div>
                    </div>
                    {/* end sidebar */}
                    {/* end iconMenu */}
                    {/* begin logo */}
                    <NavLink className="navbar-brand" to="/">
                        <img src="./logo.jpg" className="logo" alt="" />
                    </NavLink>
                    {/* end logo */}
             </div>
    )
}

