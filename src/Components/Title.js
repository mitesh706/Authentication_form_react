import React from 'react';

export default function Title({onLoginPress, onRegisterPress, ...props}) {
  return (
    <div className="heading">
    <p onClick={onLoginPress} style={props.LoStyle}>Login</p>
    <span>or</span>
    <p onClick={onRegisterPress} style={props.RgStyle}>Register</p>
   </div>
  );
}
