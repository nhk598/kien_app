import React, { Component } from 'react'

export default class Header_right_user extends Component {
    render() {
        return (
            <div className="btn-group dropstart">
                <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="./gai.jpg" style={{height: '25px'}} alt="" />
                </button>
                <ul className="dropdown-menu">
                    {/* Dropdown menu links */}
                    <li><a className="dropdown-item" href="./user.html">Tài khoản</a></li>
                    <li><a className="dropdown-item" href="#">Đóng góp ý kiến</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Đăng xuất</a></li>
                </ul>
            </div>

        )
    }
}
