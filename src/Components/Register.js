import React, { useState } from "react";
import LogRgsButton from "./LogRgsButton";
import Title from "./Title";
import "./Register.css";
import Input from "./Input";

export default function Register(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const [comPasswordType, setComPasswordType] = useState("password");
  const [compasswordInput, setComPasswordInput] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [comPasswordErr, setComPasswordErr] = useState("");
  const [nameErr, setNameErr] = useState(" ");

  const handleName = (evnt) => {
    setName(evnt.target.value);
  };

  const handlePasswordChange = (evnt) => {
    setPasswordInput(evnt.target.value);
  };

  const handleComPasswordChange = (evnt) => {
    setComPasswordInput(evnt.target.value);
  };
  const togglePassword = () => {
    if (name.length < 2) {
      setNameErr("Please Enter Name");
    }

    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const comtogglePassword = () => {
    if (comPasswordType === "password") {
      setComPasswordType("text");
      return;
    }
    setComPasswordType("password");
  };

  const rgSuccess = () => {
    if (name === "Name") {
      setNameErr("Please Enter Fullname");
    } else if (name.length < 2) {
      setNameErr("Please Enter Fullname");
    } else {
      setNameErr("");
    }

    const passlength = passwordInput.length;
    if (passlength < 6) {
      setPasswordErr("Please enter minimum 6 characters");
    } else {
      setPasswordErr("");
    }

    if (compasswordInput !== passwordInput) {
      setComPasswordErr("Password is not Matchs");
    } else {
      setComPasswordErr("");
    }
  };

  return (
    <>
      {/* <form action=""> */}
        <div className="Ragisterpage">
          <LogRgsButton
            onLoginPress={props.login}
            onRegisterPress={props.register}
            login="Login"
            Register="Register"
            RgStyle={{ backgroundColor: " #00d0c0" }}
          />
          <div className="detail-box">
            <Title
              onLoginPress={props.login}
              RgStyle={{ borderBottom: "2px solid #00d0c0", color: "#fff" }}
            />
            <div className="detail">
              <div className="name box">
                <label className="lable" htmlFor="">
                  Full Name
                </label>
                <Input
                  Type="text"
                  onChange={handleName}
                  value={name}
                  className="form-control"
                  placeholder="Name"
                />
                <p className="err">{nameErr}</p>
              </div>
              <div className="email box">
                <label className="lable" htmlFor="">
                  Email
                </label>
                <Input
                  Type="email"
                  onChange={(event) => setEmail(event.target.value)}
                  value={email}
                  className="form-control"
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="password-box">
                <div className="content">
                  <label className="lable" htmlFor="">
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
              <div className="password-box">
                <div className="content">
                  <label className="lable" htmlFor="">
                    Password
                  </label>
                  <div className="password">
                    <Input
                      Type={comPasswordType}
                      onChange={handleComPasswordChange}
                      value={compasswordInput}
                      className="form-control"
                      placeholder="Confrom Password"
                    />
                    <div className="input-group-btn">
                      <p className="eyes" onClick={comtogglePassword}>
                        {comPasswordType === "password" ? (
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
                  <p className="err">{comPasswordErr}</p>
                </div>
              </div>
              <div className="term">
                <input type="checkbox" />
                <p>term & condition</p>
              </div>
              <div className="login-content">
                <button className="login" onClick={rgSuccess}>
                  Ragister
                </button>
                <p>
                  already have a account ?{" "}
                  <button onClick={props.login} className="logd">
                    Login
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      {/* </form> */}
    </>
  );
}
