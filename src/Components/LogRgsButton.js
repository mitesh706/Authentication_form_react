import React from 'react';
import "./LogRgsButton.css"

// console.log(onLoginPress)

export default function LogRgsButton({onLoginPress,onRegisterPress,...props }) {
  // console.log("mi", onLoginPress)
  return (
       <div className="button-grp">
        <button onClick={onLoginPress} className=" btn1">{props.login}</button>
        <button onClick={onRegisterPress} className=" btn2">{props.Register}</button>
    </div>
  );
}
