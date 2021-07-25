import React, { Component } from 'react'
import { BrowserRouter as Link, NavLink } from "react-router-dom";
export default class VideoCard extends Component {
    render() {
        return (
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8 mr-auto">
                <div className="videoCard">
                    {/* <Link to="/hello"><img className="videoCard_thumbnail" src="./bg_1.jpg" alt="" /></Link> */}
                    <NavLink to="/hello"><img className="videoCard_thumbnail" src="./bg_1.jpg" alt="" /></NavLink>
                    {/* <a href="./watching.html"><img className="videoCard_thumbnail" src="./bg_1.jpg" alt="" /></a> */}
                    <div className="videoCard_info">
                    <a href="./user.html"><img className="img-video_avatar rounded-circle" alt="" src="./gai.jpg" /></a>
                        <div className="videoCard_text ">
                        <h4>VNIndexch cán mốc 1500 điểm và những điều cần lưu ý</h4>
                        <a href="./user.html" className="nameUser"><p>Tài chính và kinh doanh</p></a> 
                        <div className="statisticalVideo d-flex">
                            <div className="d-flex">
                                <p>2.500</p>
                                <p>views</p>
                            </div>
                            <div style={{marginLeft: '2px', marginRight: '2px'}}>•</div>
                            <div className="d-flex">
                                <p>1000</p>
                                <p>like</p>
                            </div>
                            <div style={{marginLeft: '2px', marginRight: '2px'}}>•</div>
                            <p>1h</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        )
    }
}
