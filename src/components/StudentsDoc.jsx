import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ROUTES } from "../routes/AppRoutes";
import { NavButton } from "./UI/NavButton";

const StudentsDoc = () => {
  const store = useSelector((state) => state.students);

  return (
    <div>
      <NavButton to={`${ROUTES.CREATE}`}>Add Students</NavButton>
      <div>
        {store.map((item) => {
          return (
            <StyledDiv key={item.id}>
                <div>
                <p>{item.name}</p>
                <p>{item.surname}</p>
                </div>
            
              <StyledLink to={`${ROUTES.UPDATE}/${item.id}`}>
                Details
              </StyledLink>
            </StyledDiv>
          );
        })}
      </div>
    </div>
  );
};

export default StudentsDoc;

const StyledDiv = styled.div`
  display: flex;
  background-color: rebeccapurple;
  color: white;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
  justify-content: space-between;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  background-color: aqua;
  padding: 5px;
  border-radius: 8px;
  &:hover {
    background-color: #84a2a2;
  }
`;
