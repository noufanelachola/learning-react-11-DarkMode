import React, { useState } from "react";
import "./Nav.css";

const Nav = () => {

    const [darkMode,setDarkMode] = useState(false);

    function darkToggle(event) {
        const {checked} = event.target;
        setDarkMode(checked);
    }
    
    console.log(darkMode);

    return(
        <div className="navContent">
            <div className="logo">
                <img src="./logo192.png" alt="logo" style={{height:"1.8rem" , width:"1.8rem"}}/>
                <p className="logoName">ReactFacts</p>
            </div>
            <p className="tagline">React Course - Project 1</p>

            <div className="toggleBtn">
                <input type="checkbox" className="toggle" id="check"  onChange={darkToggle}/>
                <label htmlFor="check" ></label>
            </div>
        </div>
    );
}

export default Nav;