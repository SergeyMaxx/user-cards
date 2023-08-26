import React from "react";
import { useParams } from "react-router-dom";
import { useStudents } from "../hooks/useStudents";

export default function StudentPage() {
  const { id } = useParams();
  const { getStudentById } = useStudents();
  const student = getStudentById(id);
  console.log(student);
  return <div>StudentPage</div>;
}
