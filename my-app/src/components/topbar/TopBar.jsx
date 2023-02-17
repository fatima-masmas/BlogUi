import React from "react";
import { Link } from "react-router-dom";
import "./topbar.css";
export default function Topbar() {
    const user = false;
    return (
        <div className="top">
            <div className="topLeft"> 
             <i className="topIcon fa-brands fa-facebook"></i>
             <i className="topIcon fa-brands fa-twitter"></i>
             <i className="topIcon fa-brands fa-pinterest"></i>
             <i className="topIcon fa-brands fa-square-instagram"></i></div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/" >HOME</Link>   
                    </li>
                    <li className="topListItem"><Link className="link" to="/" >ABOUT</Link></li>
                    <li className="topListItem"><Link className="link" to="/" >CONTACT</Link></li>
                    <li className="topListItem"><Link className="link" to="/write" >WRITE</Link></li>
                    <li className="topListItem">{user && "LOGOUT"}</li>
                </ul>
            </div>
            <div className="topRight">
                { 
                user ? (<img className="topImg" 
                     src="https://picsum.photos/75/700" 
                     alt=""  />) : (
                         <ul>
                            <li className="topListItem">
                                <Link className="link" to="/login">
                                    LOGIN
                                 </Link>
                            </li>
                        <li className="topListItem">
                            <Link className="link" to="/register">
                                 REGISTTER
                            </Link>
                        </li>
                    </ul>)}
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>

        </div>
    )
}