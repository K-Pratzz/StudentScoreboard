import { useState } from 'react';
import Header from './components/Header';
import StudentTable from './components/StudentTable';
import AddStudentForm from './components/AddStudentForm';
import './App.css';

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Aarav Sharma", score: 85 },
    { id: 2, name: "Priya Patel", score: 42 },
    { id: 3, name: "Rohan Singh", score: 78 },
    { id: 4, name: "Sneha Gupta", score: 35 },
  ]);

  const addStudent = (name, score) => {
    const newStudent = {
      id: Date.now(),
      name: name.trim(),
      score: parseInt(score) //this will convert the score to an integer before adding it to the students array
    };
    setStudents([...students, newStudent]);
  };

  const updateScore = (id, newScore) => {
    setStudents(students.map(student =>
      student.id === id ? { ...student, score: parseInt(newScore) } : student
    ));
  };

  return (
    <div className="app">
      <Header />
      
      <div className="container">
        <AddStudentForm onAddStudent={addStudent} />
        
        <StudentTable 
          students={students} 
          onUpdateScore={updateScore} 
        />
      </div>
    </div>
  );
}

export default App;