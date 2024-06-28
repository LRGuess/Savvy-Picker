import React, {useState, useEffect} from 'react';
import 'bulma/css/bulma.min.css';
import Icon from './Icons';
import DarkModeIcon from './assets/DarkModeIcon.gif';
import LightModeIcon from './assets/LightModeIcon.gif';
import ProfileIcon from './assets/profile.gif'
import NBellIcon from './assets/notification.gif';
import MenuIcon from './assets/menu.gif';
import SDarkModeIcon from './assets/Static Icons/DarkModeIcon Static.png';
import SLightModeIcon from './assets/Static Icons/LightModeIcon Static.png';
import SProfileIcon from './assets/Static Icons/profile Static.png'
import SNBellIcon from './assets/Static Icons/notification Static.png';
import SMenuIcon from './assets/Static Icons/menu Static.png';

let darkMode = false;

function TPHeader() {
    const [isHovered, setIsHovered] = useState(false);
    const [isTBHovered, setIsTBHovered] = useState(false);
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
            
            <button className="button is-primary ld-toggle is-pulled-right" onClick={toggleTheme}
            onMouseEnter={() => setIsTBHovered(true)}
            onMouseLeave={() => setIsTBHovered(false)}>
              {isDarkMode ? <Icon icon={LightModeIcon} staticIcon={SLightModeIcon} isHovered={isTBHovered} alt={"LightModeIcon"} width={30} height={30} /> : <Icon icon={DarkModeIcon} staticIcon={SDarkModeIcon} isHovered={isTBHovered} alt={"DarkModeIcon"} width={30} height={30} />}
            </button>
            <button class=" is-size-0.1 is-pulled-right mr-4" style={{marginTop: 20}}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>< Icon icon={NBellIcon} staticIcon={SNBellIcon} isHovered={isHovered} alt={"Notification Icon"} width={30} height={30}/></button>
            <button class=" is-size-0.1 is-pulled-right" style={{marginTop: 18}}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>< Icon icon={MenuIcon} staticIcon={SMenuIcon} isHovered={isHovered} alt={"Menu Icon"} width={30} height={30}/></button>
            <button class=" is-size-0.1 is-pulled-right" style={{marginTop: 18}}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>< Icon icon={ProfileIcon} staticIcon={SProfileIcon} isHovered={isHovered} alt={"Profile Icon"} width={30} height={30}/></button>
          </div>
          <hr className="is-divider" />
          <p>Current Classes:</p>
          <br></br><br></br>
      </div>
    );
}

export default TPHeader;
