import React, { Component } from 'react'

export default class CardIntVideoPlaying extends Component {
    render() {
        return (
            <div className="dataVideoPlaying">
                {/* name video */}
                <h4>VNIndexch cán mốc 1500 điểm và những điều cần lưu ý</h4>
                {/* begin thong ke video + like + share video */}
                <div className="intVideo d-flex justify-content-between">
                    {/*begin statistical(thống kê) int views-comment-datetime  */}
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

                    {/*end statistical(thống kê) int views-comment-datetime  */}
                    {/* begin like and share video */}
                    <div className="iconVideoPlaying d-flex ">
                        {/* like */}
                        {/* bergin card like  */}
                        <div className="iconLikeVideo d-flex border">
                            {/* begin iconLike */}
                            <div className="d-flex flex-column">
                                <a href><i className="fas fa-chevron-up" /></a>
                                <a href><i className="fas fa-chevron-down" /></a>
                            </div>
                            {/* end iconLike */}
                            {/* begin likeText */}
                            <div className="d-flex flex-column likeTextVideo ">
                                <p>1000</p>
                                <p>Like</p>
                            </div>
                            {/* end likeText */}
                        </div>
                        {/* end card like*/}
                        {/* share */}
                        <div className="shareVideo border  d-flex">
                            <a href><i className="fas fa-share" /></a>
                            <p>CHIA SẺ</p>
                        </div>       
                    </div> 
                    {/* end like and share video */} 
                </div>
                {/* end thong ke video like share video */}
            </div>

        )
    }
}
