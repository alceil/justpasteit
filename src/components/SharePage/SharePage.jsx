import React, { useState,useEffect,useRef}from "react";
import {useParams} from 'react-router-dom';
import ShareButton from "../ShareButton/ShareButton";
import CopyButton from "../CopyButton/CopyButton";
import Modal from '../Modal/Modal'
import axios from "axios";
import copy from "copy-to-clipboard";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import style from "./SharePage.module.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SharePage = () => {
  const {id} = useParams();
  const [isOpen, setIsOpen] = useState(false)
  const [data, setData] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://justpasteitapi.herokuapp.com/add/${id}`
      );


      
 console.log(result.data['content']);
      setData(result.data['content']);
      console.log(data);
    };
 
    fetchData();
  }, []);


 
  const notify = () =>{
  
   copy(data);
    toast("Text Copied📋");
  }


  return (
    <div>
    <div className={style.textarea_exp}>
      <h3 
      >{data}</h3>
    </div>

    <div className={style.actions}>
    <ShareButton onSubmit={()=>setIsOpen(true)} />

  <CopyButton  onSubmit={notify}/>


<ToastContainer
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
