import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StudentsForm = ({ onSubmit, data }) => {
  const [nameValue, setNameValue] = useState("");
  const [surnameValue, setSurnameValue] = useState("");
  const [id, setId] = useState("");

  const getnameValueHandler = (e) => {
    setNameValue(e.target.value);
  };
  const getsurnameValueHandler = (e) => {
    setSurnameValue(e.target.value);
  };

  function onSubmitForm(e) {
    e.preventDefault();
    onSubmit({ id, name: nameValue, surname: surnameValue });
  }

  useEffect(() => {
    if (data) {
      setId(data.id);
      setNameValue(data.name);
      setSurnameValue(data.surname);
    }
  }, [data]);

  return (
    <Form onSubmit={onSubmitForm}>
      <Input
        type="text"
        value={nameValue}
        onChange={getnameValueHandler}
        placeholder="Enter first name"
      />
      <Input
        type="text"
        value={surnameValue}
        onChange={getsurnameValueHandler}
        placeholder="Enter surname"
      />
      <Button type="submit">Save</Button>
    </Form>
  );
};

export default StudentsForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: auto;
  padding: 20px;
  background-color: #f7f9fc;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 10px;
  margin-top: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;
