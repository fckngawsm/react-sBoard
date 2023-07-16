import React from "react";
import {
  LoginForm,
  LoginInput,
  LoginTitle,
  LoginButton,
  LoginText,
  LoginSpan,
} from "./LoginStyle";
function Login() {
  return (
    <>
      <LoginTitle>Вход</LoginTitle>
      <LoginForm>
        <LoginInput placeholder="Почта" />
        <LoginInput placeholder="Пароль" />
        <LoginButton>Войти</LoginButton>
        <LoginText>
          У вас нет аккаунта?
          <LoginSpan to="/sign-up">Зарегистрироваться</LoginSpan>
        </LoginText>
      </LoginForm>
    </>
  );
}

export default Login;
