import React, { useState } from "react";
import LogRgsButton from "./LogRgsButton";
import Title from "./Title";
import "./Login.css";
import Input from "./Input";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [emailErr, setEmailErr] = useState("");

  const handlePasswordChange = (evnt) => {
    setPasswordInput(evnt.target.value);
  };
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    } else {
      setPasswordType("password");
    }
  };

  // const login = () => {
  //   console.log("login");
  // };

  // const register = () => {
  //   console.log("register");
  // };

  const success = () => {
    const passlength = passwordInput.length;
    // const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-  zA-Z0-9.-]+$/;

    if (passlength < 6) {
      setPasswordErr("Please enter minimum 6 characters");
    } else {
      setPasswordErr("");
    }

    function isValidEmail(email) {
      return /\S+@\S+\.\S+/.test(email);
    }
    console.log("email",typeof email);
    if (email === "") {
      setEmailErr("Please enter email address");
    } else if (!isValidEmail(email)) {
      setEmailErr("invalid email");
    } else {
      setEmailErr("");
    }
  };

  // if (email.length < 6) {
  //   setEmailErr("Please enter minimum 6 characters");
  // } else {
  //   setEmailErr("");
  // }
  // };

  // var emailRegex=   "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"

  return (
    <>
      <div className="loginpage">
        <LogRgsButton
          onLoginPress={props.login}
          onRegisterPress={props.register}
          login="Login"
          Register="Register"
          LoStyle={{ backgroundColor: " #00d0c0" }}
        />
        <div className="detail-box">
          <Title
            onRegisterPress={props.register}
            LoStyle={{ "borderBottom": "2px solid #00d0c0", color: "#fff" }}
          />
          <div className="detail">
            <div className="email">
              <label htmlFor="">Email</label>
              <Input
                Type="email"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                className="form-control"
                placeholder="Enter your Email"
              />
              <p className="err">{emailErr}</p>
            </div>
            <div className="password-box">
              <div className="content">
                <label className="email" htmlFor="">
                  Password
                </label>
                <div className="password">
                  <Input
                    Type={passwordType}
                    onChange={handlePasswordChange}
                    value={passwordInput}
                    className="form-control"
                    placeholder="Password"
                  />
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
                dont't have account?{" "}
                <button onClick={props.register} className="logd">
                  Register
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
