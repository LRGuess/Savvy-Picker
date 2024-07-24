import React, { useEffect, useState } from 'react';
import './app.css';
import Classroom from './Classroom';
import Header from './TPortalHeader';
import Footer from './UniFooter';
import axios from 'axios';

const App = () => {
  const [classrooms, setClassrooms] = useState([]);

  useEffect(() => {
    const fetchClassrooms = async () => {
      try {
        const response = await axios.get('http://localhost:3000/classrooms.json');
        if (Array.isArray(response.data)) {
          setClassrooms(response.data);
        } else {
          console.error('API response is not an array:', response.data);
        }
      } catch (error) {
        console.error('Error fetching classrooms:', error);
      }
    };

    fetchClassrooms();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <Header />
        {classrooms.map((classroom) => (
          <Classroom 
            key={classroom.id} 
            class_name={classroom.name} 
            classStudentAmount={classroom.student_count || 0} 
            students={classroom.students || []} // Ensure this matches the backend response
          />
        ))}
        <Footer />
      </div>
    </div>
  );
};

export default App;
