import React, {useState, useEffect} from "react";

import ShareButton from "../ShareButton/ShareButton";
import style from "./Typing.module.css";
import hljs from 'highlight.js';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Typing = ({ handleInputChange, onSubmit }) => {
  const [value, setValue] = useState();

  useEffect(() => { 
    hljs.configure({useBR: false});
  }, []);

  useEffect(() => { // Called on value change
    handleInputChange(value);
  }, [handleInputChange, value]);

  return ( 
  <div>
      <div data-aos="fade-up">
        <div className={style.editor}>
          
          <ReactQuill options={{hljs: hljs}} modules={{
            syntax: true,
            toolbar: [['bold', 'italic', 'underline', 'blockquote'], [{ list: 'ordered' }, { list: 'bullet' }], ['link'], ['code-block']]
          }} className={style.textarea} theme="snow" value={value} onChange={setValue} placeholder="Start typing here!" />
        </div>
        <div className={style.share}>
          <ShareButton  onSubmit={onSubmit} />
        </div>
      </div>
  </div>
  );
};

export default Typing;
