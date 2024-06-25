import React from 'react';
import './app.css'
import Classroom from './Classroom'; 
import Student from './Student';

class App extends React.Component {
  render() {
    return (
      <div className="App light-mode" data-theme="light">
        <div className='container'>
          <div>
            <h1 className="title header-margin">Savvy picker</h1>
            <button class="button is-size-0.1">Student Picker</button>
          </div>
          <hr className="is-divider" />
          <p className='is-uppercase has-text-white'>Current Classes:</p>
          <br></br><br></br>
        </div>
        <Classroom class_name={"9-2"} classStudentAmount={26}/>
        <Classroom class_name={"da bois"} classStudentAmount={46}/>
        <Classroom class_name={"DOMI SIKORAS CLASSY CLASS"} classStudentAmount={16}/>
        <Classroom class_name={"SNIFF"} classStudentAmount={3}/>
      </div>
    );
  }
}

export default App;