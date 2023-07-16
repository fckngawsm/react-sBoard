import React from "react";
import {
  MyPrfileSpan,
  MyProfileAvatar,
  MyProfileAvatarInformation,
  MyProfileAvatarWrapper,
  MyProfileButton,
  MyProfileCountFollowing,
  MyProfileGroupButtons,
  MyProfileInformation,
  MyProfileName,
  MyProfileTextInformation,
  MyProfileWrapper,
} from "./MyProfileStyle";
import { useAppSelector } from "../../redux-hooks";
import { authUserSelectors } from "../../features/auth/auth-selectors";

interface MyProfileProps {
  onOpen: () => void;
}

function MyProfile({ onOpen }: MyProfileProps) {
  const currentUser = useAppSelector(authUserSelectors);
  console.log(currentUser);
  return (
    <MyProfileWrapper>
      <MyProfileInformation>
        <MyProfileTextInformation>
          <MyProfileName>
            {currentUser?.name} {currentUser?.lastName}
          </MyProfileName>
          <MyProfileCountFollowing>
            <MyPrfileSpan>0</MyPrfileSpan> публикаций
          </MyProfileCountFollowing>
          <MyProfileGroupButtons>
            <MyProfileButton>Удалить аккаунт</MyProfileButton>
            <MyProfileButton onClick={onOpen}>
              Редактировать аккаунт
            </MyProfileButton>
          </MyProfileGroupButtons>
        </MyProfileTextInformation>
        <MyProfileAvatarInformation>
          <MyProfileAvatarWrapper>
            <MyProfileAvatar src={currentUser?.avatar} />
          </MyProfileAvatarWrapper>
        </MyProfileAvatarInformation>
      </MyProfileInformation>
    </MyProfileWrapper>
  );
}

export default MyProfile;
