import React, { useState } from "react";
import LogRgsButton from "./LogRgsButton";
import Title from "./Title";
import "./Register.css"

export default function Register(props) {
  const  [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const [comPasswordType, setComPasswordType] = useState("password");
  const [compasswordInput, setComPasswordInput] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [comPasswordErr, setComPasswordErr] = useState("");
  const [nameErr, setNameErr] = useState(" ")


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

    if(name.length < 2){
        setNameErr("Please Enter Name")
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


//   const login = () => {
//     console.log("login");
//   };

//   const register = () => {
//     console.log("register");
//   };

  const success = () => {
if(name === "Name"){
    setNameErr("Please Enter Fullname")
}
  else if(name.length < 2){
        setNameErr("Please Enter Fullname")
    }else{
        setNameErr("")
    };

    const passlength = passwordInput.length;
    if (passlength < 6) {
      setPasswordErr("Please enter minimum 6 characters");
    } else {
      setPasswordErr("");
    };

    if(compasswordInput !== passwordInput){
        setComPasswordErr("Password is not Matchs")
    }else{
        setComPasswordErr("")
    };


  };


  // var emailRegex=   "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"

  return (
    <>
    <form action="">
      <div className="Ragisterpage">
        <LogRgsButton
          onLoginPress={props.login}
          onRegisterPress={props.register}
          login="Login"
          Register="Register"
        />
        <div className="detail-box">
          <Title />
          <div className="detail">
            <div className="name box">
                <label className="lable" htmlFor="" >Full Name</label>
                <input type="text" placeholder="Name"
                 value={name} 
                 onChange={handleName} />
                <p className="err">{nameErr}</p>
            </div>
            <div className="email box">
              <label className="lable" htmlFor="">Email</label>
              <input placeholder="Email"
                type="email"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
              />
            </div>
            <div className="password-box">
              <div className="content">
                <label className="lable" htmlFor="">
                  Password
                </label>
                <div className="password">
                  <input
                    type={passwordType}
                    onChange={handlePasswordChange}
                    value={passwordInput}
                    name="password"
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
            <div className="password-box">
              <div className="content">
                <label className="lable" htmlFor="">
                  Password
                </label>
                <div className="password">
                  <input
                    type={comPasswordType}
                    onChange={handleComPasswordChange}
                    value={compasswordInput}
                    name="password"
                    className="form-control"
                    placeholder="Comfrom Password"
                  ></input>
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
              <button className="login" onClick={success}>
              Ragister
              </button>
              <p>
                Already have a Account : <button onClick={props.login} className="logd">Login</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
    </>
  );
}
