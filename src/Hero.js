import React from "react";
import "./Hero.css";

const Hero = ({darkMode}) => {
    return(
        <div className={darkMode ? "heroContent dark" : "heroContent"}>
            <h2 className={darkMode ? "dark" : ""}>Fun facts about React</h2>
            <ul>
                <li className={darkMode ? "dark" : ""}>Was first released in 2013</li>
                <li className={darkMode ? "dark" : ""}>Was originally created by Jordan Walke</li>
                <li className={darkMode ? "dark" : ""}>Has well over 100k stars on GitHub</li>
                <li className={darkMode ? "dark" : ""}>Is maintained by Facebook</li>
                <li className={darkMode ? "dark" : ""}>Powers thousands of enterprise apps, incuding <br/> mobile apps</li>
            </ul>
        </div>
    );
}

export default Hero;