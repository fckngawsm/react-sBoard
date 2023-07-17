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

interface PopupProps {
  onClose: () => void;
  isOpen: boolean;
}

function PopupEditAccount({ onClose, isOpen }: PopupProps) {
  const disptach = useAppDispatch();
  const { register, handleSubmit } = useForm<UserType>();
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
