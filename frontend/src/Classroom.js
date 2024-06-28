import React from 'react';
import 'bulma/css/bulma.min.css';
import './Classroom.css'
import GarbageBinIcon from './assets/trash-bin.gif';
import SettingsIcon from './assets/settings.gif';

function Classroom({class_name, classStudentAmount}) {
    return (
      <div className="container ClassesListSpacing">
        <div class="card">
            <div class="card-content">
                <div class="content">
                    <span class='has-text-primary is-size-5 ComponentAlignment mr-6'>{class_name}</span>
                    <button class="button has-background-info-light has-text-info is-size-0.1 py-0 px-15 ComponentAlignment">Manage {classStudentAmount} Students</button>
                    <button class=" is-size-0.1 is-pulled-right"><img src={SettingsIcon} alt="Settings Icon" style={{ width: '30px', height: '30px', padding: 0, margin:0 }} /></button>
                    <button class=" is-size-0.1 is-pulled-right mr-1"><img src={GarbageBinIcon} alt="Garbage Bin Icon" style={{ width: '30px', height: '30px', padding: 0, margin:0 }} /></button>
                    <button class="button is-size-0.1 has-background-danger-light has-text-danger is-pulled-right mr-3">Team Creator</button> 
                    <button class="button is-size-0.1 has-background-warning-light has-text-warning is-pulled-right mr-5">Student Picker</button>
                    
                </div>
            </div>
        </div>
      </div>
    );
}

export default Classroom;
