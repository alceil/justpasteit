import React from "react";
import "./Modal.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Button from '../Button/Button';
const MODAL_STYLES = {
  position: "fixed",
  // display: 'flex',
  // flexFlow: 'column',
  width: "50%",
  top: "50%",
  left: "50%",
  border: "50px",
  transform: "translate(-50%, -50%)",
  backgroundColor: "var(--bg-color)",
  padding: "50px",
  zIndex: 1000,
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000,
};

const getUrl = (id) => {
  return `${window.location.protocol}//${window.location.host}/${id}`;

}

export default function Modal({ id, open, children, onClose }) {
  if (!open) return null;
  console.log(id);
  var url = getUrl(id);
  const notify = () => toast("Link Copied📋");
  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <div className="modalTitle">
          <h1 className="h1">Share it on Social Media📱</h1>
        </div>
        <div className="textarea_exp">
          <p className="link">{url}</p>
        </div>

        <div className="modalbutton">
          <Button 
            name="Close"
            onClick={onClose}
            color="red"
            />

          <CopyToClipboard text={url}>
            <Button
              name="Copy"
              onClick={notify}
              />
          </CopyToClipboard>

          {/* <button onClick={()=>{
                  window.open("https://www.facebook.com/sharer/sharer.php?u=","facebook-share-dialog","width=800,height=600")

              }} 
              className="end-buttons share-btn">
                  Share
              </button>

              <button onClick={()=>{
                  window.open( "https://twitter.com/intent/tweet?text=Check%20this%20out%20" ,
              "Twitter",
              "width=800,height=600")

              }} 
              className="end-buttons tweet-btn">
                  Tweet
              </button> */}
        </div>
      </div>
    </>
  );
  // document.getElementById('portal')
}
