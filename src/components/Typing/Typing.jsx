import React, {useState, useEffect} from "react";

import style from "./Typing.module.css";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Button from "../Button/Button";

const Typing = ({ handleInputChange, onSubmit }) => {
  const [value, setValue] = useState();

  useEffect(() => { // Called on value change
    handleInputChange(value);
  }, [handleInputChange, value]);

  return ( 
  <div>
      <div data-aos="fade-up">
        <div className={style.editor}>
          <ReactQuill className={style.textarea} theme="snow" value={value} onChange={setValue} placeholder="Start typing here!" />
        </div>
        <div className={style.share}>
          <Button name="Share" onClick={onSubmit} />
        </div>
      </div>
  </div>
  );
};

export default Typing;
