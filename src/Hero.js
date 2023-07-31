import React from "react";
import "./Hero.css";

const Hero = () => {
    return(
        <div className="heroContent">
            <h2>Fun facts about React</h2>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, incuding <br/> mobile apps</li>
            </ul>
        </div>
    );
}

export default Hero;