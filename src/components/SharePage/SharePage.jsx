import React, { useState,useEffect}from "react";
import {useParams} from 'react-router-dom';
import Button from "../Button/Button";
import Modal from '../Modal/Modal'
import axios from "axios";
import copy from "copy-to-clipboard";
import style from "./SharePage.module.css";
import { ToastContainer, toast } from 'react-toastify';
import xss from 'xss';
import 'react-toastify/dist/ReactToastify.css';

import 'highlight.js/styles/atom-one-light.css';


const SharePage = () => {
  const {id} = useParams();
  const [isOpen, setIsOpen] = useState(false)
  const [data, setData] = useState('');
  
  const options = {
    whiteList: {
      pre: ["class"],
      span: ["class"],
      p: [],
      br: [],
      strong: [],
      em: [],
      u: [],
      ul: [],
      li: [],
      ol: [],
      a: ["href", "rel", "target"]
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://justpasteitapi.herokuapp.com/add/${id}`
      );

      let text = xss(result.data['content'], options);
      setData(text);
      console.log(result.data['content']); // Debug log
    };
 
    fetchData();
  }, [data, id]);

 
  const notify = () =>{
    copy(data);
    toast("Text Copied Successfully 📋");
  }


  return (
    <div>
    <div className={style.textarea_exp}>
      <p dangerouslySetInnerHTML={{__html: data}}></p> {/*Data was sanitized with the XSS library*/}
    </div>

    <div className={style.actions}>
    <Button name="Share" onClick={() => setIsOpen(true)} />
    <Button name="Copy" onClick={notify} />


<ToastContainer
toastStyle={{
  color: 'black',
  paddingLeft:'3rem'
}}
position="bottom-center"
autoClose={1000}
hideProgressBar={true}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
    </div>
    <Modal id={id} open={isOpen} onClose={() => setIsOpen(false)}/> 
    </div>
    
  );
};

export default SharePage;
