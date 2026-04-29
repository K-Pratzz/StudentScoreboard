const StudentRow = ({ student, index, onUpdateScore }) => {
  const status = student.score >= 40 ? "Pass" : "Fail";
  const statusClass = student.score >= 40 ? "pass" : "fail";

  return (
    <tr>
      <td>{index + 1}</td>
      <td className="student-name">{student.name}</td>
      <td className="score">{student.score}</td>
      <td>
        <span className={`status ${statusClass}`}>
          {status}
        </span>
      </td>
      <td>
        <input
          type="number"
          min="0"
          max="100"
          defaultValue={student.score}
          onBlur={(e) => onUpdateScore(student.id, e.target.value)}
          className="score-input"
        />
      </td>
    </tr>
  );
};

export default StudentRow;