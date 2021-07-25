import React, { Component } from 'react'
import ListSupportVideo from './ListSupportVideo'
import ConnectListSp from './ConnectListSp'
export default class SupportVideoPlaying extends Component {
    render() {
        return (
            <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div className="bodyUser" style={{marginTop: '20px'}}>
                        <ListSupportVideo></ListSupportVideo>
                        <ConnectListSp></ConnectListSp>
                    </div>
                </div>
            </div>

        )
    }
}
