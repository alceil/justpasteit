import React from 'react'
import style from "./Button.module.css"
const Button = ({name, onClick, color="green"}) => {
    return (
            <button 
                className={style.button} 
                onClick={onClick}
                style={{backgroundColor: color}}
            >
                {name}
            </button>
    )
}

export default Button
