import React from 'react';
import Classroom from './Classroom'; 
import Student from './Student';
class App extends React.Component {
  render() {
    return (
      <div className="App" data-theme="light">
        <div className='container'>
          <h1 className="title">Savvy picker</h1>
          <hr className="is-divider" />
          <p className='is-uppercase has-text-white'>Current Classes:</p>
          <br></br><br></br>
        </div>
        <Classroom />
      </div>
    );
  }
}

export default App;