import React from "react";
import buttonClose from "../../images/CloseIcon.svg";
import {
  Button,
  ButtonImage,
  PopupContainer,
  PopupWrapper,
  RegisterInput,
  UpdateForm,
  UpdateFormButton,
  UpdateTitle,
} from "./PopupEditAccountStyle";
import { UserType } from "../../types/User";
import { SubmitHandler, useForm } from "react-hook-form";
import { updateUser } from "../../features/user/user-slice";
import { useAppDispatch } from "../../redux-hooks";
import { RegisterMessageError } from "../Register/RegisterStyle";

interface PopupProps {
  onClose: () => void;
  isOpen: boolean;
}

function PopupEditAccount({ onClose, isOpen }: PopupProps) {
  const disptach = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserType>();
  const onSubmit: SubmitHandler<UserType> = (data) => {
    disptach(updateUser(data))
      .unwrap()
      .then(() => onClose());
  };
  return (
    <PopupWrapper style={{ visibility: `${isOpen ? "visible" : "hidden"}` }}>
      <PopupContainer>
        <Button onClick={onClose}>
          <ButtonImage src={buttonClose} />
        </Button>
        <UpdateForm onSubmit={handleSubmit(onSubmit)}>
          <UpdateTitle>Редактировать профиль</UpdateTitle>
          <RegisterInput
            placeholder="Аватарка"
            {...register("avatar", {
              required: {
                value: true,
                message: "Вы забыли указать ссылку на аватарку",
              },
              minLength: { value: 2, message: "Проверьте ссылку" },
            })}
            type="url"
          />
          {errors.avatar && (
            <RegisterMessageError>{errors.avatar.message}</RegisterMessageError>
          )}
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
            <RegisterMessageError>
              {errors.lastName.message}
            </RegisterMessageError>
          )}
          <UpdateFormButton>Изменить значения</UpdateFormButton>
        </UpdateForm>
      </PopupContainer>
    </PopupWrapper>
  );
}

export default PopupEditAccount;
