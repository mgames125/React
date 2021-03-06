import React from "react";
import students from "../../Data/students";

export const ListStudents = (props) => {
  const studentsList = students.map((student) => {
    return (
      <li key={student.id}>
        {student.id} {student.name} = {student.note}
      </li>
    );
  });

  return (
    <div>
      <ul style={{ listStyle: "none" }}>{studentsList}</ul>
    </div>
  );
};
