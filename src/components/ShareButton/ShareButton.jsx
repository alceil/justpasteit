import React from "react";
import style from "./ShareButton.module.css";

const ShareButton = ({ onSubmit,created }) => {
  return (
    <div>
      <button className={style.button} onClick={onSubmit}>
      {
          created ? "Share":"Save"
        }
      </button>
    </div>
  );
};

export default ShareButton;
