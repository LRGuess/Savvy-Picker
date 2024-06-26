import React, {useState, useEffect} from 'react';
import './app.css'
import Classroom from './Classroom'; 
import Student from './Student';
import DarkModeIcon from './assets/DarkModeIcon.png';
import LightModeIcon from './assets/LightModeIcon.png'; 

let darkMode = false;

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
      document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
    }, [isDarkMode]);

    const toggleTheme = () => {
      setIsDarkMode(!isDarkMode);
    }; 

    return (
      <div className="App">
        <div className='container'>
          <div>
            <span className="title header-margin">Savvy picker</span>
            <button className="button is-primary ld-toggle is-pulled-right" onClick={toggleTheme}>
              {isDarkMode ? <img src={LightModeIcon} alt="LightMode Icon" style={{ width: '20px', height: '20px'}} /> : <img src={DarkModeIcon} alt="DarkMode Icon" style={{ width: '20px', height: '20px' }} />}
            </button>
          </div>
          <hr className="is-divider" />
          <p className='is-uppercase inversion'>Current Classes:</p>
          <br></br><br></br>
        </div>
        <Classroom class_name={"9-2"} classStudentAmount={26}/>
        <Classroom class_name={"da bois"} classStudentAmount={46}/>
        <Classroom class_name={"DOMI SIKORAS CLASSY CLASS"} classStudentAmount={16}/>
        <Classroom class_name={"SNIFF"} classStudentAmount={3}/>
        <Classroom class_name={"SNIFF"} classStudentAmount={3}/>
        <Classroom class_name={"SNIFF"} classStudentAmount={3}/>
        <Classroom class_name={"SNIFF"} classStudentAmount={3}/>
        <footer></footer>
      </div>
    );
}

export default App;