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
import { loginUser } from "../../features/user/user-slice";
import { RegisterMessageError } from "../Register/RegisterStyle";

function Login() {
  const dispatch = useAppDispatch();
  const navgiate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserType>();
  const onSubmit: SubmitHandler<UserType> = (data) => {
    console.log(data)
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
          autoComplete="none"
          placeholder="Почта"
          {...register("email", {
            required: { value: true, message: "Вы забыли указать почту" },
            minLength: { value: 2, message: "Слишком короткая почта" },
            maxLength: { value: 40, message: "Слишком длинная почта" },
          })}
          type="email"
        />
        {errors.email && (
          <RegisterMessageError>{errors.email.message}</RegisterMessageError>
        )}
        <LoginInput
          autoComplete="none"
          placeholder="пароль"
          {...register("password", {
            required: { value: true, message: "Вы забыли указать пароль" },
            minLength: { value: 2, message: "Слишком короткая почта" },
            maxLength: { value: 40, message: "Слишком длинная почта" },
          })}
          type="password"
        />
        {errors.password && (
          <RegisterMessageError>{errors.password.message}</RegisterMessageError>
        )}
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
