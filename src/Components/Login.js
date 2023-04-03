import React, { useState } from "react";
import LogRgsButton from "./LogRgsButton";
import Title from "./Title";
import "./Login.css";

export default function Login(props) {
  const [email, setEmail] = useState("Enter Your Email");
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  const handlePasswordChange = (evnt) => {
    setPasswordInput(evnt.target.value);
  };
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }else{setPasswordType("password")}
   ;
  };


  // const login = () => {
  //   console.log("login");
  // };

  // const register = () => {
  //   console.log("register");
  // };

  const success = () => {
    const passlength = passwordInput.length;
    console.log();
    if (passlength < 6) {
      setPasswordErr("Please enter minimum 6 characters");
    } else {
      setPasswordErr("");
    }
  };

  // var emailRegex=   "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"

  return (
    <>
    <form action="">
      <div className="loginpage">
        <LogRgsButton
          onLoginPress={props.login}
          onRegisterPress={props.register}
          login="Login"
          Register="Register"
        />
        <div className="detail-box">
          <Title />
          <div className="detail">
            <div className="email">
              <label htmlFor="">Email</label>
              <input
                type="email"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
              />
            </div>
            <div className="password-box">
              <div className="content">
                <label className="email" htmlFor="">
                  Password
                </label>
                <div className="password">
                  <input
                    type={passwordType}
                    onChange={handlePasswordChange}
                    value={passwordInput}
                    // name="password"
                    className="form-control"
                    placeholder="Password"
                  ></input>
                  <div className="input-group-btn">
                    <p className="eyes" onClick={togglePassword}>
                      {passwordType === "password" ? (
                        <span className="material-symbols-outlined">
                          visibility
                        </span>
                      ) : (
                        <span className="material-symbols-outlined">
                          visibility_off
                        </span>
                      )}
                    </p>
                  </div>
                </div>
                <p className="err">{passwordErr}</p>
              </div>
            </div>
            <div className="term">
              <input type="checkbox" />
              <p>term & condition</p>
            </div>
            <div className="login-content">
              <button className="login" onClick={success}>
                Log In
              </button>
              <p>
                dont't have account? <button onClick={props.register} className="logd">Register</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
    </>
  );
}
