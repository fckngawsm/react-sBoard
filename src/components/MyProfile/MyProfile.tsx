import React from "react";
import {
  MyPrfileSpan,
  MyProfileAvatar,
  MyProfileAvatarInformation,
  MyProfileButton,
  MyProfileCountFollowing,
  MyProfileGroupButtons,
  MyProfileInformation,
  MyProfileName,
  MyProfileTextInformation,
  MyProfileWrapper,
} from "./MyProfileStyle";
import { useAppDispatch, useAppSelector } from "../../redux-hooks";
import { authUserSelectors } from "../../features/user/user-selectors";
import { deleteAccount } from "../../features/user/user-slice";
import { useNavigate } from "react-router-dom";
import Publications from "../Publications/Publications";

interface MyProfileProps {
  onOpen: () => void;
}

function MyProfile({ onOpen }: MyProfileProps) {
  const dispatch = useAppDispatch();
  const user = useAppSelector(authUserSelectors);
  const navigate = useNavigate();
  function handleDeleteAccount() {
    dispatch(deleteAccount())
      .unwrap()
      .then(() => {
        navigate("/sign-up");
      });
  }
  return (
    <>
      <MyProfileWrapper>
        <MyProfileInformation>
          <MyProfileTextInformation>
            <MyProfileName>
              {user?.name} {user?.lastName}
            </MyProfileName>
            <MyProfileCountFollowing>
              <MyPrfileSpan>0</MyPrfileSpan> публикаций
            </MyProfileCountFollowing>
            <MyProfileGroupButtons>
              <MyProfileButton onClick={handleDeleteAccount}>
                Удалить аккаунт
              </MyProfileButton>
              <MyProfileButton onClick={onOpen}>
                Редактировать аккаунт
              </MyProfileButton>
            </MyProfileGroupButtons>
          </MyProfileTextInformation>
          <MyProfileAvatarInformation>
            <MyProfileAvatar src={user?.avatar} />
          </MyProfileAvatarInformation>
        </MyProfileInformation>
      </MyProfileWrapper>
      <Publications />
    </>
  );
}

export default MyProfile;
