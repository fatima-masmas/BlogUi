import React from "react";
import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"
export default function Settings() {
  return (
    <div className="settings">
      <div className="sittingsWrapper">
        <div className="sttingsTitle">
            <span className="settingsUpdateTitle">Update Your Account </span>
            <span className="settingsDeleteTitle">Delete Your Account </span>
            </div>
            <form className="settingsForm">
                <label> Profile Picture</label>
            <div className="settingsPP">
                <img src="https://picsum.photos/220" alt="" />
                <label htmlFor="fileInput"><i className="settingsPPIcon fa-solid fa-child-reaching"></i></label>
                <input type="file" id="fileInput" style={{display:"none"}} />
            </div>
            <label>Username</label>
            <input type="tetxt" placeholder="Name" />
            <label>E-mail</label>
            <input type="email" placeholder="name@gmail.com" />
            <label>Password</label>
            <input type="password" />
            <button className="settingsSubmit">Update</button>
            </form>

      </div>
      <Sidebar />
    </div>
  )
}
