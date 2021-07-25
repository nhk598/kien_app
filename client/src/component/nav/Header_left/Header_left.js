import React, { Component } from 'react'

export default class Header_left extends Component {
    render() {
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
                                <a href="./home.html">
                                    <span className="Icon"><i className="fas fa-home" /></span>
                                    <span className="title">Trang chủ</span>
                                </a>
                                </li>
                                <li>
                                <a href="./user.html">
                                    <span className="Icon"><i className="fas fa-user-tie" /></span>
                                    <span className="title">Kênh của bạn</span>
                                </a>
                                </li>
                                <li>
                                <a href="#">
                                    <span className="Icon"><i className="fab fa-hotjar" /></span>
                                    <span className="title">Bản tin</span>
                                </a>
                                </li>
                                <li>
                                <a href="#">
                                    <span className="Icon"><i className="fas fa-hourglass-start" /></span>
                                    <span className="title">Đang theo dõi gần đây</span>
                                </a>
                                </li>
                                <li>
                                <a href="#">
                                    <span className="Icon"><i className="fas fa-user-clock" /></span>
                                    <span className="title">Video xem sau</span>
                                </a>
                                </li>
                                <li>
                                <a href="#">
                                    <span className="Icon"><i className="fas fa-calendar-check" /></span>
                                    <span className="title">Kênh đă đăng ký</span>
                                </a>
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
                    <a className="navbar-brand" href="./home.html">
                        <img src="./logo.jpg" className="logo" alt="" />
                    </a>
                    {/* end logo */}
             </div>

        )
    }
}
