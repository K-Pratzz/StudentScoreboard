import StudentRow from './StudentRow';

const StudentTable = ({ students, onUpdateScore }) => {
  return (
    <div className="table-card">
      <h2>Student Performance</h2>
      <table className="scoreboard-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Student Name</th>
            <th>Score</th>
            <th>Status</th>
            <th>Update Score</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <StudentRow 
              key={student.id}
              student={student}
              index={index}
              onUpdateScore={onUpdateScore}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;