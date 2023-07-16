import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  LoginForm,
  LoginInput,
  LoginTitle,
  LoginButton,
  LoginText,
  LoginSpan,
} from "./LoginStyle";
import { UserType } from "../../types/User";
import { useAppDispatch } from "../../redux-hooks";
import { loginUser } from "../../features/auth/auth-slice";

function Login() {
  const dispatch = useAppDispatch();
  const navgiate = useNavigate();
  const { register, handleSubmit } = useForm<UserType>();
  const onSubmit: SubmitHandler<UserType> = (data) => {
    dispatch(loginUser(data))
      .unwrap()
      .then(() => {
        navgiate("/my-profile");
      });
  };
  return (
    <>
      <LoginTitle>Вход</LoginTitle>
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <LoginInput
          placeholder="Почта"
          {...register("email", {
            required: true,
            minLength: 2,
            maxLength: 40,
          })}
          type="email"
        />
        <LoginInput
          placeholder="Почта"
          {...register("password", {
            required: true,
            minLength: 2,
            maxLength: 40,
          })}
          type="password"
        />
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
