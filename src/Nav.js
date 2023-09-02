import React from "react";
import "./Nav.css";

const Nav = ({darkMode,darkToggle}) => {
    
    return(
        <div className={darkMode ? "navContent dark" : "navContent"}>
            <div className="logo">
                <img src="./logo192.png" alt="logo" style={{height:"1.8rem" , width:"1.8rem"}}/>
                <p className="logoName">ReactFacts</p>
            </div>
            <p className={darkMode ? "tagLine dark" : "tagLine"}>React Course - Project 1</p>

            <div className="toggleBtn">
                <input type="checkbox" className="toggle" id="check"  onChange={darkToggle} checked={darkMode}/>
                <label htmlFor="check" ></label>
            </div>
        </div>
    );
}

export default Nav;