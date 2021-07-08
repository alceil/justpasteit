import React from "react";
import style from "./ShareButton.module.css";

const ShareButton = ({ onSubmit }) => {
  return (
    <div>
      <button className={style.button} onClick={onSubmit}>
        Share
      </button>
    </div>
  );
};

export default ShareButton;
