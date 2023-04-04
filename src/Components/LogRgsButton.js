import React from 'react';
import "./LogRgsButton.css"

// console.log(onLoginPress)

export default function LogRgsButton({onLoginPress,onRegisterPress,...props }) {
  // console.log("mi", onLoginPress)
  return (
       <div className="button-grp">
        <button onClick={onLoginPress} className=" btn1" style={props.LoStyle} >{props.login}</button>
        <button onClick={onRegisterPress} className=" btn2" style={props.RgStyle}>{props.Register}</button>
    </div>
  );
}
