import React, { useState } from "react";
import Header from "../Header/Header";

import Typing from "../Typing/Typing";
import axios from "axios";
import { Route, Switch, useHistory, withRouter } from "react-router-dom";
import SharePage from "../SharePage/SharePage";

import style from "./App.module.css";

const App = () => {
  const history = useHistory();
  const [shareText, setShareText] = useState("");
  const [created,setCreated]= useState(false)
  //   const [routeNav, setRouteNav] = useState(false);

  const handleInputChange = (inputValue) => {
    setShareText(inputValue);
  };

  const onSubmit = (inputValue) => {
    setCreated(true);
    console.log("pressed dude");
    console.log(shareText);
    //http://localhost:4000
    axios
      .post("https://justpasteitapi.herokuapp.com/add", { content: shareText })
      .then((response) => {
        let id = response.data["_id"];
        history.push("/"+id);
 
        console.log(id);
      })
      .catch((error) => {
        console.log(error);
      });



  };
  return (
    <div>
      <Header headTitle="Justpasteit" />
      <Switch>
        <Route exact path="/">
          <Typing handleInputChange={handleInputChange} onSubmit={onSubmit} />
        </Route>
        <Route exact path="/:id">
          <SharePage />
        </Route>
      </Switch>
      <div className={style.container}>
 
      </div>
    
    </div>
  );
};

export default withRouter(App);
