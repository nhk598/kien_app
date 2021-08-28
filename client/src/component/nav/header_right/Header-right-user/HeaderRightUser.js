import { Link, useHistory } from 'react-router-dom';
import { AUTH_TOKEN } from '../../../../constants';
import React from 'react'

export default function HeaderRightUser() {
    const history = useHistory();
    const authToken = localStorage.getItem(AUTH_TOKEN);
    return (
        <div className="btn-group dropstart">
        <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="./gai.jpg" style={{height: '25px'}} alt="" />
        </button>
        <ul className="dropdown-menu">
            {/* Dropdown menu links */}
            <li><Link className="dropdown-item" to="/manageUser">Tài khoản</Link></li>
            <li><Link className="dropdown-item" to="/home">Đóng góp ý kiến</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li>
            <div className="flex flex-fixed">
                        {authToken ? (
                        <div
                            className="ml1 pointer black"
                            onClick={() => {
                            localStorage.removeItem(AUTH_TOKEN);
                            history.push(`/`);
                            }}
                        >
                            logout
                        </div>
                        ) : (
                        <Link
                            to="/login"
                            className="ml1 no-underline black"
                        >
                            login
                        </Link>
                        )}
                </div>
                </li>
        </ul>
    </div>

    )
}


