import { useState } from 'react';

const AddStudentForm = ({ onAddStudent }) => {
  const [name, setName] = useState('');
  const [score, setScore] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && score !== '') {
      onAddStudent(name, score);
      setName('');
      setScore('');
    }
  };

  return (
    <div className="form-card">
      <h2>Add New Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Student Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter student name"
            required
          />
        </div>

        <div className="form-group">
          <label>Score (0-100)</label>
          <input
            type="number"
            value={score}
            onChange={(e) => setScore(e.target.value)}
            min="0"
            max="100"
            placeholder="Enter marks"
            required
          />
        </div>

        <button type="submit" className="add-btn">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudentForm;