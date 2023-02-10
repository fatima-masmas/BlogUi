import React from "react";
import Topbar from "./components/topbar/TopBar";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Settings from "./pages/settings/Settings";
import Write from "./pages/write/Write";
import Single from "./pages/single/Single";
import Register from "./pages/register/Register";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  const user = false;
  return (
    <>
    <Topbar></Topbar> 
    <Router>
     <Routes>

        <Route exact path="/" element={<Home />}></Route>
        <Route path="/register" element={user ? <Home/> :<Register /> }></Route>
        <Route path="/login" element={user ? <Home/> :<Login /> }></Route>
        <Route path="/settings" element={user ? <Settings />:<Login /> }></Route>
        <Route path="/write" element={user ? <Write /> :<Register /> }></Route>
        <Route path="/topbar" element={user ? <Topbar /> :<Register /> }></Route> 
        <Route path="/post/:postId"element={<Single />}></Route>
    </Routes>
    </Router>
    </>
  );
}

export default App;
