import React from "react";
import "./Nav.css";

const Nav = () => {
    return(
        <div className="navContent">
            <div className="logo">
                <img src="./logo192.png" alt="logo" style={{height:"1.8rem" , width:"1.8rem"}}/>
                <p className="logoName">ReactFacts</p>
            </div>
            <p className="tagline">React Course - Project 1</p>
        </div>
    );
}

export default Nav;