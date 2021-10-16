import React, {useState, useEffect} from "react";
import style from "./Typing.module.css";
import hljs from 'highlight.js';
import ReactQuill from 'react-quill';
import Button from "../Button/Button";
import 'react-quill/dist/quill.snow.css';
import 'highlight.js/styles/atom-one-light.css';
import copy from "copy-to-clipboard";
import { toast } from "react-toastify";

const Typing = ({ handleInputChange, onSubmit }) => {
  const [value, setValue] = useState();

  useEffect(() => { 
    hljs.configure({useBR: false});
  }, []);

  useEffect(() => { // Called on value change
    handleInputChange(value);
    console.log("input debug: " + value);
  }, [handleInputChange, value]);

  const copyClickHandler = () => {
    //replace value with pure text from quill (without html tags)
    copy(value);
    toast.success("Text Copied to Clipboard");
  }

  return ( 
  <div>
      <div data-aos="fade-up">
        <div className={style.editor}>
          
          <ReactQuill modules={{
            syntax:{
              setInterval: 10,
            },
            toolbar: [['bold', 'italic', 'underline', 'blockquote'], [{ list: 'ordered' }, { list: 'bullet' }], ['link'], ['code-block']]
          }} className={style.textarea} theme="snow" value={value} onChange={setValue} placeholder="Start typing here!" />
        </div>
        <div className={style.share}>
          <Button name="Share" onClick={onSubmit} />
          <Button name="Copy" onClick={copyClickHandler} />
        </div>
      </div>
  </div>
  );
};

export default Typing;
