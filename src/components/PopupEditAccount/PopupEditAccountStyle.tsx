import styled from "styled-components";
export const PopupWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.9);
  border-radius: 10px;
  opacity: 1;
  transition: visibility 0.3s, opacity 0.4s ease-in;
`;
export const UpdateTitle = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 120%;
  text-align: center;
  margin: 0;
  margin-bottom: 50px;
`;
export const PopupContainer = styled.div`
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.15);
  padding: 20px;
  border-radius: 10px;
  position: relative;
  display: block;
  width: 100%;
  max-width: 430px;
  color: black;
  background-color: #fff;
  align-self: center;
  box-sizing: border-box;
`;
export const Button = styled.button`
  position: absolute;
  background-image: url(../../images/icon-close.svg);
  background-repeat: no-repeat;
  background-color: transparent;
  background-size: auto;
  background-position: center;
  cursor: pointer;
  top: -42px;
  right: -42px;
  height: 32px;
  width: 32px;
  padding: 0;
  align-self: end;
  border: none;
  outline: none;
  box-sizing: border-box;
  opacity: 1;
  transition: opacity linear 0.5s;
  &:hover {
    opacity: 0.6;
  }
`;
export const ButtonImage = styled.img``;
export const RegisterInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  color: black;
  padding: 15px;
  border: 1px solid black;
  border-radius: 5px;
  margin-bottom: 15px;
`;
export const UpdateForm = styled.form`
  max-width: 480px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
export const UpdateFormButton = styled.button`
  width: 100%;
  border-radius: 20px;
  background-color: rgb(255, 130, 62);
  border: 1px solid rgb(255, 130, 62);
  padding: 15px;
  margin-top: 20px;
  color: rgb(255, 255, 255);
  text-align: center;
  cursor: pointer;
`;
