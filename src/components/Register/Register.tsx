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
} from "./RegisterStyle";
import { UserType } from "../../types/User";
import { useAppDispatch } from "../../redux-hooks";
import { registerUser } from "../../features/user/user-slice";
function Register() {
  const dispatch = useAppDispatch();
  const navgiate = useNavigate();
  const { register, handleSubmit } = useForm<UserType>();
  const onSubmit: SubmitHandler<UserType> = (data) => {
    dispatch(registerUser(data))
      .unwrap()
      .then(() => {
        navgiate("/sign-in");
      })
      .catch((err) => {
        console.log(err)
      })
  };
  return (
    <>
      <RegisterTitle>Регистрация</RegisterTitle>
      <RegisterForm onSubmit={handleSubmit(onSubmit)}>
        <RegisterInput
          placeholder="Имя"
          {...register("name", { required: true, minLength: 2, maxLength: 40 })}
        />
        <RegisterInput
          placeholder="Фамилия"
          {...register("lastName", {
            required: true,
            minLength: 2,
            maxLength: 40,
          })}
        />
        <RegisterInput
          placeholder="Почта"
          {...register("email", {
            required: true,
            minLength: 2,
            maxLength: 40,
          })}
          type="email"
        />
        <RegisterInput
          placeholder="пароль"
          {...register("password", {
            required: true,
            minLength: 2,
            maxLength: 40,
          })}
          type="password"
        />
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
