import React from "react";
import { useDispatch } from "react-redux";
import { AppTitle } from "../../components/UI/Title";
import StudentsForm from "../../components/UI/StudentsForm";
import { useNavigate } from "react-router-dom";

const CreateStudents = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onCreateHandler = (data) => {
    const updateData = { ...data, id: Math.floor(Math.random() * 1000) };
    dispatch({ type: "CREATE", payload: updateData });
    navigate(-1);
  };
  return (
    <div>
      <AppTitle>Create Students</AppTitle>
      <StudentsForm onSubmit={onCreateHandler} />
    </div>
  );
};

export default CreateStudents;
