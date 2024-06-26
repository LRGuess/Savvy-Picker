// src/Classroom.js
import React, {useState, useEffect} from 'react';
import 'bulma/css/bulma.min.css';
import DarkModeIcon from './assets/DarkModeIcon.gif';
import LightModeIcon from './assets/LightModeIcon.gif'; 

let darkMode = false;

function TPHeader() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
      document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
    }, [isDarkMode]);

    const toggleTheme = () => {
      setIsDarkMode(!isDarkMode);
    }; 

    return (
      <div className="container">
        <div>
            <span className="title header-margin">Savvy picker</span>
            <button className="button is-primary ld-toggle is-pulled-right" onClick={toggleTheme}>
              {isDarkMode ? <img src={LightModeIcon} alt="LightMode Icon" style={{ width: '30px', height: '30px', padding: 0, margin:0 }} /> : <img src={DarkModeIcon} alt="DarkMode Icon" style={{ width: '30px', height: '30px' }} />}
            </button>
          </div>
          <hr className="is-divider" />
          <p>Current Classes:</p>
          <br></br><br></br>
      </div>
    );
}

export default TPHeader;
