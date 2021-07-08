import React from "react";

import style from "./Header.module.css";

const Header = ({ headTitle }) => {
  return (
    <div  data-aos="fade-left" className={style.nav_container}>
      <h1>{headTitle}📋</h1>

      <div data-aos="fade-right" className={style.typewriter}>
      <h3>A pastebin alternative to share code/text with your friends.🧑‍💻</h3>

      </div>
    </div>
  );
};

export default Header;
