import React from "react";
import './stylesheets/Button.css';
export default function Button({text, isClickButton, clickHandler}) {
  return (
    <button className={ isClickButton ? 'click-button' : 'reset-button'} onClick={clickHandler}>
      {text}
    </button>
  )
  }
