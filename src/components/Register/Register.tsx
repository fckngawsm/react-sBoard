import React from "react";
import {
  RegisterForm,
  RegisterInput,
  RegisterTitle,
  RegisterButton,
  RegisterText,
  RegisterSpan,
} from "./RegisterStyle";
function Register() {
  return (
    <>
      <RegisterTitle>Регистрация</RegisterTitle>
      <RegisterForm>
        <RegisterInput placeholder="Имя" />
        <RegisterInput placeholder="Фамилия" />
        <RegisterInput placeholder="Почта" />
        <RegisterInput placeholder="Пароль" />
        <RegisterButton>Зарегистрироваться</RegisterButton>
        <RegisterText>
          У вас уже есть аккаунт?
          <RegisterSpan to="/sign-in">Войти</RegisterSpan>
        </RegisterText>
      </RegisterForm>
    </>
  );
}

export default Register;
