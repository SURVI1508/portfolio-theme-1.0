import React from "react";

const StudentPage = ({ params }) => {
  console.log(params, "Student");
  return <div>StudentPage {params.studentsname}</div>;
};

export default StudentPage;
