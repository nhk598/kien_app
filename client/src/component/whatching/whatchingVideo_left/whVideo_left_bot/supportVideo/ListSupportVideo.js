import React, { Component } from 'react'

export default class ListSupportVideo extends Component {
    render() {
        return (
            /* begin menu introduce comment document */
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="introduce-tab" data-bs-toggle="tab" data-bs-target="#introduce" type="button" role="tab" aria-controls="introduce" aria-selected="true">Giới thiệu</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="comments-tab" data-bs-toggle="tab" data-bs-target="#comments" type="button" role="tab" aria-controls="comments" aria-selected="false">Thảo luận</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="document-tab" data-bs-toggle="tab" data-bs-target="#document" type="button" role="tab" aria-controls="document" aria-selected="false">Tài liệu</button>
                </li>
            </ul>
            /* end menu introduce  */

        )
    }
}
