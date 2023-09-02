import React , {useState} from 'react';
import './App.css';
import Nav from "./Nav";
import Hero from "./Hero";

function App() {

  const [darkMode,setDarkMode] = useState(false);

  function darkToggle(event) {
    const {checked} = event.target;
    setDarkMode(checked);
  }

  return (
    <div>
      <Nav darkMode={darkMode} darkToggle={darkToggle}/>
      <Hero darkMode={darkMode}/>
    </div>
  );
}

export default App;
