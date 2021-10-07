import React from "react";
import ShareButton from "../ShareButton/ShareButton";
import CopyButton from "../CopyButton/CopyButton";
import style from "./Typing.module.css";
const Typing = ({ handleInputChange,onSubmit }) => {
  return (
    <div>
    <div data-aos="fade-up"  >
      
      <textarea
        onChange={(e) => handleInputChange(e.target.value)}
      ></textarea>
    </div>

    <div className={style.share}>
    <ShareButton  onSubmit={onSubmit} />

    </div>

    </div>
  );
};

export default Typing;
