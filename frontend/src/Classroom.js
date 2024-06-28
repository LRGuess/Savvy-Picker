import React, {useState} from 'react';
import 'bulma/css/bulma.min.css';
import './Classroom.css'
import Icon from './Icons';
import GarbageBinIcon from './assets/trash-bin.gif';
import SGarbageBinIcon from './assets/Static Icons/trash-bin Static.png';
import SettingsIcon from './assets/settings.gif';
import SSettingsIcon from './assets/Static Icons/settings Static.png';

function Classroom({class_name, classStudentAmount}) {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div className="container ClassesListSpacing">
        <div class="card">
            <div class="card-content">
                <div class="content">
                    <span class='has-text-primary is-size-5 ComponentAlignment mr-6'>{class_name}</span>
                    <button class="button has-background-info-light has-text-info is-size-0.1 py-0 px-15 ComponentAlignment" 
                    > Manage {classStudentAmount} Students</button>
                    <button class=" is-size-0.1 is-pulled-right"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>< Icon icon={SettingsIcon} staticIcon={SSettingsIcon} isHovered={isHovered} alt={"Settings Icon"} width={30} height={30} /></button>
                    <button class=" is-size-0.1 is-pulled-right mr-1"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>< Icon icon={GarbageBinIcon} staticIcon={SGarbageBinIcon} isHovered={isHovered} alt={"Garbage Icon"} width={30} height={30}/></button>
                    <button class="button is-size-0.1 has-background-danger-light has-text-danger is-pulled-right mr-3"
                    >Team Creator</button> 
                    <button class="button is-size-0.1 has-background-warning-light has-text-warning is-pulled-right mr-5"
                    >Student Picker</button>
                    
                </div>
            </div>
        </div>
      </div>
    );
}

export default Classroom;