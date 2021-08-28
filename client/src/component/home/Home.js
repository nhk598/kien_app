
import HomeLeft from './home_left/HomeLeft'
import HomeRight from './home_right/HomeRight'
import React from 'react'

export default function Home() {
  
    return (
            <div className="row" style={{paddingTop: '20px'}}>
                <HomeLeft></HomeLeft>
                <HomeRight></HomeRight>
            </div>
    )
 
    
}

