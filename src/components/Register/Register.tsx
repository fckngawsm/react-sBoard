import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  RegisterForm,
  RegisterInput,
  RegisterTitle,
  RegisterButton,
  RegisterText,
  RegisterSpan,
  RegisterMessageError,
} from "./RegisterStyle";
import { UserType } from "../../types/User";
import { useAppDispatch } from "../../redux-hooks";
import { registerUser } from "../../features/user/user-slice";

function Register() {
  const dispatch = useAppDispatch();
  const navgiate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserType>();
  const onSubmit: SubmitHandler<UserType> = (data) => {
    dispatch(registerUser(data))
      .unwrap()
      .then(() => {
        navgiate("/sign-in");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <RegisterTitle>Регистрация</RegisterTitle>
      <RegisterForm onSubmit={handleSubmit(onSubmit)}>
        <RegisterInput
          autoComplete="none"
          placeholder="Имя"
          {...register("name", {
            required: { value: true, message: "Вы забыли указать имя" },
            minLength: { value: 2, message: "Слишком короткое имя" },
            maxLength: { value: 40, message: "Слишком длинное имя" },
          })}
        />
        {errors.name && (
          <RegisterMessageError>{errors.name.message}</RegisterMessageError>
        )}
        <RegisterInput
          autoComplete="none"
          placeholder="Фамилия"
          {...register("lastName", {
            required: { value: true, message: "Вы забыли указать фамилию" },
            minLength: { value: 5, message: "Слишком короткое фамилия" },
            maxLength: { value: 40, message: "Слишком длинное фамилия" },
          })}
        />
        {errors.lastName && (
          <RegisterMessageError>{errors.lastName.message}</RegisterMessageError>
        )}
        <RegisterInput
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
        <RegisterInput
          placeholder="пароль"
          autoComplete="none"
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
        <RegisterButton type="submit">Зарегистрироваться</RegisterButton>
        <RegisterText>
          У вас уже есть аккаунт?
          <RegisterSpan to="/sign-in">Войти</RegisterSpan>
        </RegisterText>
      </RegisterForm>
    </>
  );
}

export default Register;
