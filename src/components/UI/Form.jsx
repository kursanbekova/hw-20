import { useEffect, useState } from "react";
import styled from "styled-components";



export const Form = ({ onSubmit, data }) => {
  const [value, setValue] = useState("");
  const [id, setId] = useState("");

  const valueChangeHandler = (e) => {
    setValue(e.target.value);
  };

  function onSubmitForm(e) {
    e.preventDefault();
    onSubmit({ id, name: value });
  }

  useEffect(() => {
    if (data) {
      setId(data.id);
      setValue(data.name);
    }
  }, [data]);

  return (
    <StyledForm onSubmit={onSubmitForm}>
      <StyledInput
        type="text"
        value={value}
        onChange={valueChangeHandler}
        placeholder="Enter title materials"
      />
      <StyledButton type="submit">Save</StyledButton>
    </StyledForm>
  );
};


const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: auto;
  padding: 20px;
  background-color: #f7f9fc;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const StyledInput = styled.input`
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

const StyledButton = styled.button`
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