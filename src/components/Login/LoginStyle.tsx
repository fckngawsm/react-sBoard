import styled from "styled-components";
import { Link } from "react-router-dom";
export const LoginForm = styled.form`
  max-width: 480px;
  margin: 50px auto 0;
  display: flex;
  flex-direction: column;
`;

export const LoginTitle = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 120%;
  text-align: center;
  margin-top: 50px;
`;

export const LoginInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  color: black;
  padding: 15px;
  border: 1px solid black;
  border-radius: 5px;
  margin-bottom: 15px;
`;

export const LoginButton = styled.button`
  width: 100%;
  border-radius: 20px;
  background-color: rgb(255, 130, 62);
  border: 1px solid rgb(255, 130, 62);
  padding: 15px;
  color: rgb(255, 255, 255);
  text-align: center;
  cursor: pointer;
`;

export const LoginText = styled.p`
  font-size: 16px;
  font-weight: 700;
  text-align: center;
`;

export const LoginSpan = styled(Link)`
  font-size: 16px;
  font-weight: 700;
  margin-left: 5px;
  color: rgb(79, 79, 79);
`;
