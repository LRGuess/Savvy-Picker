// src/Classroom.js
import React from 'react';
import 'bulma/css/bulma.min.css';
import './Classroom.css'

let class_name = "9-2"
let classStudentAmount = "29"

class Classroom extends React.Component {
  render() {
    return (
      <div className="container">
        <div class="card">
            <div class="card-content">
                <div class="content">
                    <span class='has-text-primary mr-6 ComponentAlignment'>{class_name}</span>
                    <button class="button has-background-info-light has-text-info is-size-0.1 py-0 px-15 ComponentAlignment">Manage {classStudentAmount} Students</button>
                    <button class="button is-size-0.1 ClassesButtonSpacing has-background-warning-light has-text-warning">Student Picker</button>
                    <button class="button is-size-0.1 ChoserButtonSpacing has-background-danger-light has-text-danger">Team Creator</button>    
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Classroom;
