import React from 'react';
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Login from './Login.js';
import LogoutBtn from './LogoutBtn.js';
import Profile from './Profile.js'
import AndysHangman from './AndysHangman.js';
import Navbar from './Navbar.js';
import Home from './Home.js';
import Register from './Register.js'
import About from './About.js';


export default function App(){
  return(
    <BrowserRouter>
        <div className="whole_html_container">
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            {/* <Route path="/" element={!session ? <Auth /> : <Account key={session.user.id} session={session} />}></Route> */}
            <Route path="/play" element={<AndysHangman />}></Route>
            <Route path="/profile" element={<Profile/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          </Routes>
       </div>
      </BrowserRouter>
  )
}
const root = createRoot(document.querySelector("#react-root"));
root.render(
  <Auth0Provider
    // domain="dev-0flopda72uhrfb0g.us.auth0.com"
    domain="dev-0flopda72uhrfb0g.us.auth0.com"
    clientId="IqpT21CYo4VYPDElU4v7D1gvVgye3Mx3"
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: "https://dev-0flopda72uhrfb0g.us.auth0.com/api/v2/",
      scope: "read:current_user update:current_user_metadata"
    }}
  >
      <React.StrictMode>
        <App />
      </React.StrictMode>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

