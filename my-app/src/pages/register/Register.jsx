import React from "react";
import "./register.css"

export default function Register() {
  return (
    <div className="register">
         <span className="registerTitle">Register</span>
        <form className="registerForm">
            <label >User Name</label>
            <input type="text" className="registerInput" placeholder="Enter your Email..." />
            <label >E-mail</label>
            <input type="text" className="registerInput" placeholder="Enter your User Name..." />
            <label >Passwort</label>
            <input type="passwort" className="registerInput" placeholder="Enter your Passwort..." />
            <button className="registerButton">Register</button>
               </form>
            <button className="registerLoginButton">
              Log In
              </button>
     
      
    </div>
  )
}
