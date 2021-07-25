
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import Home from './component/home/Home';
// import WhatchingVideo from './component/whatching/WhatchingVideo';
import Header from "./component/nav/Header";
import DieuHuongUrl from "./router/DieuHuongUrl";
function App() {
  return (
    <Router>
      
        <div className="container-fluid">
      <Header></Header>
      {/* <div>
        <Link to="/hello"></Link>
      </div> */}
      {/* <Home></Home> */}
      {/* <WhatchingVideo></WhatchingVideo> */}
      <DieuHuongUrl></DieuHuongUrl>
      </div>
    </Router>
    
  );
}

export default App;
