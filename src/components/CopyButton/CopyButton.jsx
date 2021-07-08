import React from 'react'
import style from "./CopyButton.module.css"
const CopyButton = ({onSubmit}) => {
    return (
        <div>
            <button className={style.copy} onClick={onSubmit}>
                Copy
            </button>
            
        </div>
    )
}

export default CopyButton
