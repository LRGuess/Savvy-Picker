// src/Classroom.js
import React from 'react';
import 'bulma/css/bulma.min.css';
import './Classroom.css'


function Classroom({class_name, classStudentAmount}) {
    return (
      <div className="container ClassesListSpacing">
        <div class="card">
            <div class="card-content">
                <div class="content">
                    <span class='has-text-primary is-size-5 mr-6 ComponentAlignment'>{class_name}</span>
                    <button class="button has-background-info-light has-text-info is-size-0.1 py-0 px-15 ComponentAlignment">Manage {classStudentAmount} Students</button>
                    <button class="button is-size-0.1 ClassesButtonSpacing has-background-warning-light has-text-warning">Student Picker</button>
                    <button class="button is-size-0.1 ChoserButtonSpacing has-background-danger-light has-text-danger">Team Creator</button>    
                </div>
            </div>
        </div>
      </div>
    );
}

export default Classroom;