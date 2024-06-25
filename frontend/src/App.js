import React from 'react';
import Classroom from './Classroom'; 
import Student from './Student';// Adjust the import path as necessary

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Classroom />
        <Student/>
      </div>
    );
  }
}

export default App;