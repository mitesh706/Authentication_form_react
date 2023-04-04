import React from "react";
import "./Input.css";

export default function Input({ ...props }) {
  return (
    <div className="ii">
      <input
        type={props.Type}
        onChange={props.onChange}
        value={props.value}
        className={props.className}
        placeholder={props.placeholder}
      ></input>
    </div>
  );
}
