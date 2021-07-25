import React, { Component } from 'react'

export default class Home_left extends Component {
    render() {
        return (
            <div className="col-xl-2 col-mb-1 col-sm-1 sideBar ">
                <div className="navigation">
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
                            <a href="./newsfeed.html">
                            <span className="Icon"><i className="fab fa-hotjar" /></span>
                            <span className="title">Bản tin</span>
                            </a>
                        </li>
                        <li>
                            <a href="./flollow.html">
                            <span className="Icon"><i className="fas fa-hourglass-start" /></span>
                            <span className="title">Video dang theo dõi</span>
                            </a>
                        </li>
                        <li>
                            <a href="./flollow.html">
                            <span className="Icon"><i className="fas fa-user-clock" /></span>
                            <span className="title">Video xem sau</span>
                            </a>
                        </li>
                        <li>
                            <a href="./flollow.html">
                            <span className="Icon"><i className="fas fa-calendar-check" /></span>
                            <span className="title">Kênh đă đăng ký</span>
                            </a>
                        </li>
                    </ul>
                </div> 
            </div>

        )
    }
}
