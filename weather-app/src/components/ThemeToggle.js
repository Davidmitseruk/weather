import React, {useContext} from "react";
import { ThemeContext } from "../context/ThemeContext";
import "./weather.css"

export default function ThemeToggle(){
    const {theme, toggleTheme} = useContext(ThemeContext);

    return(
        <button className="themeIcon"> {theme === "light"? "🌞": "🌙"}</button>
    )
}