import React from 'react';
import './app.css'
import Classroom from './Classroom'; 
import Header from './TPortalHeader';

const App = () => {
    return (
      <div className="App">
        <div className='container'>
          <Header />
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