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
  const user = useAppSelector(authUserSelectors);
  console.log(user)
  return (
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
            <MyProfileButton>Удалить аккаунт</MyProfileButton>
            <MyProfileButton onClick={onOpen}>
              Редактировать аккаунт
            </MyProfileButton>
          </MyProfileGroupButtons>
        </MyProfileTextInformation>
        <MyProfileAvatarInformation>
          <MyProfileAvatarWrapper>
            <MyProfileAvatar src={user?.avatar} />
          </MyProfileAvatarWrapper>
        </MyProfileAvatarInformation>
      </MyProfileInformation>
    </MyProfileWrapper>
  );
}

export default MyProfile;
