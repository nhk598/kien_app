
import React from 'react'
import {
  BrowserRouter as Router,
  
} from "react-router-dom";
// import Home from './component/home/Home';
// import WhatchingVideo from './component/whatching/WhatchingVideo';
import Header from "./component/nav/Header";
import DieuHuongUrl from "./router/DieuHuongUrl";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider, 
  HttpLink
} from "@apollo/client";
// Tạo Liên kết truy vấn cố định
import { createPersistedQueryLink } from "@apollo/client/link/persisted-queries";
// Hàm băm
import { sha256 } from 'crypto-hash';
import { setContext } from '@apollo/client/link/context';
import { AUTH_TOKEN } from './constants';
import { CloudinaryContext } from "cloudinary-react";
// Phần mềm chung gian gắn token vào mọi res đến máy chủ
const authLink = setContext((_, { headers }) => {
  // Lấy token trong local Storage
  const token = localStorage.getItem(AUTH_TOKEN);
  return {
    // Gắn token vào headers của res
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  };
});
// thiết lập bộ nhớ cache
const linkChain = createPersistedQueryLink({ 
  sha256, 
  // Mặc định get với dữ liệu trong cache
  useGETForHashedQueries: true
}).concat(
  new HttpLink({ uri: "http://localhost:4000/", opts: {
    mode: "no-cors",
  }, }));
//  const linkChain = {uri: "http://localhost:4000/"};
const client = new ApolloClient({
  cache: new InMemoryCache(),
  
  link: authLink.concat(linkChain) ,
});


function App() {
  return (
    // Apollo client
<ApolloProvider client={client}>
  {/* router */}
   <Router>
     {/* Kết nối với cloud Cloudinary */}
   <CloudinaryContext cloudName="nhk598" secure = " true ">
      <div className="container-fluid">
        <Header></Header>
        <DieuHuongUrl></DieuHuongUrl>
      </div>
    </CloudinaryContext>
    </Router>
   
</ApolloProvider>
   
    
  );
}

export default App;
