import style from './ToggleDarkMode.module.css'
import Toggle from 'react-toggle'
import "react-toggle/style.css"
import CheckedIcon from '../CheckedIcon/CheckedIcon';
import UnCheckedIcon from '../UnCheckedIcon/UncheckedIcon';
const ToggleDarkMode = ( { darkMode } ) => {
    return (
        <Toggle
        className={style.toggleDark}
        checked={darkMode.value}
        onChange={darkMode.toggle}
        icons={{ checked: <CheckedIcon />, unchecked: <UnCheckedIcon /> }}
        aria-label="Dark mode toggle"
        // onClick={}
      />
    )
}

export default ToggleDarkMode
