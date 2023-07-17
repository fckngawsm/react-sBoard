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
import { useDispatch } from "react-redux";
import { updateUser } from "../../features/auth/user-slice";
import { useAppDispatch, useAppSelector } from "../../redux-hooks";
import { authUserSelectors } from "../../features/auth/user-selectors";

interface PopupProps {
  onClose: () => void;
  isOpen: boolean;
}

function PopupEditAccount({ onClose, isOpen }: PopupProps) {
  const disptach = useAppDispatch();
  const { register, handleSubmit } = useForm<UserType>();
  const onSubmit: SubmitHandler<UserType> = (data) => {
    disptach(updateUser(data));
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
              required: true,
              minLength: 2,
              maxLength: 100,
            })}
          />
          <RegisterInput
            placeholder="Имя"
            {...register("name", {
              required: true,
              minLength: 2,
              maxLength: 40,
            })}
          />
          <RegisterInput
            placeholder="Фамилия"
            {...register("lastName", {
              required: true,
              minLength: 2,
              maxLength: 40,
            })}
          />
          <UpdateFormButton>Изменить значения</UpdateFormButton>
        </UpdateForm>
      </PopupContainer>
    </PopupWrapper>
  );
}

export default PopupEditAccount;
