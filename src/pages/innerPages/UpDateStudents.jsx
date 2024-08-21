import React from "react";
import { AppTitle } from "../../components/UI/Title";
import StudentsForm from "../../components/UI/StudentsForm";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const UpDateStudents = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const students = useSelector((state) => state.students);
  const existingStudents = students.find((item) => item.id === +id);

  const dispatch = useDispatch();

  const onUpdateHandler = (data) => {
    dispatch({ type: "UPDATE", payload: data });
    navigate(-1);
  };

  return (
    <div>
      <AppTitle> UpDate students</AppTitle>
      <StudentsForm onSubmit={onUpdateHandler} data={existingStudents} />
    </div>
  );
};

export default UpDateStudents;
