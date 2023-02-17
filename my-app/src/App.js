import React from "react";
import Topbar from "./components/topbar/TopBar";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Settings from "./pages/settings/Settings";
import Write from "./pages/write/Write";
import Single from "./pages/single/Single";
import Register from "./pages/register/Register";

import {BrowserRouter, Link, Routes, Route} from "react-router-dom";


function App() {
  const user = true;
  return (
    
    <BrowserRouter>
    <div>
      <nav>

          <Link href="/"> Home </Link>
          <Link href="/blog"> Blog </Link>
        </nav>
    
  
    <Topbar /> 
   
     <Routes>

        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home/> :<Register /> } />
        <Route path="/login" element={user ? <Home/> :<Login /> } />
        <Route path="/settings" element={user ? <Settings />:<Login /> } />
        <Route path="/write" element={user ? <Write /> :<Register /> } />
        <Route path="/topbar" element={user ? <Topbar /> :<Register /> } /> 
        <Route path="/post/:postId"element={<Single />} />
    </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App;
