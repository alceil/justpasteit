import React, {useState, useEffect, useMemo} from "react";
import style from "./Typing.module.css";
import hljs from 'highlight.js';
import ReactQuill from 'react-quill';
import Button from "../Button/Button";
import 'react-quill/dist/quill.snow.css';
import 'highlight.js/styles/atom-one-light.css';
import debounce from 'lodash.debounce';

const Typing = ({ handleInputChange, onSubmit }) => {
  const [value, setValue] = useState();

  const debouncedOnSubmit = useMemo(() => {
    return debounce(onSubmit, 300);
  }, [onSubmit]);

  useEffect(() => { 
    hljs.configure({useBR: false});
  }, []);

  useEffect(() => { // Called on value change
    handleInputChange(value);
    console.log("input debug: " + value);
  }, [handleInputChange, value]);

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
          <Button name="Save" onClick={debouncedOnSubmit} />
        </div>
      </div>
  </div>
  );
};

export default Typing;
