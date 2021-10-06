import React, { useEffect, useState } from 'react'
import style from './ToggleDarkMode.module.css'
import Toggle from 'react-toggle'
import "react-toggle/style.css"
import useDarkMode from 'use-dark-mode';
const ToggleDarkMode = () => {
  
    const darkMode = useDarkMode(false);

    return (
        <Toggle
        className={style.toggleDark}
        checked={darkMode.value}
        onChange={darkMode.toggle}
        icons={{ checked: "🌙", unchecked: "🔆" }}
        aria-label="Dark mode toggle"
        // onClick={}
      />
    )
}

export default ToggleDarkMode
