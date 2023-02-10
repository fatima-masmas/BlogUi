import React from "react";
import "./topbar.css";
export default function Topbar() {
    const user = true;
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
                    </li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">WRITE</li>
                    <li className="topListItem">{user && "LOGOUT"}</li>
                </ul>
            </div>
            <div className="topRight">
                { 
                user ? (<img className="topImg" 
                     src="https://picsum.photos/75/700" 
                     alt=""  />) : (
                         <ul classname="topList">
                            <li className="topListItem">
                        LOGIN
                        </li>
                        <li className="topListItem">
                        REGISTTER
                        </li></ul>)}
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>

        </div>
    )
}