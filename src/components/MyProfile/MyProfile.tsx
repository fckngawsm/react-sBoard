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
function MyProfile() {
  return (
    <MyProfileWrapper>
      <MyProfileInformation>
        <MyProfileTextInformation>
          <MyProfileName>Марченко Кирилл</MyProfileName>
          <MyProfileCountFollowing>
            <MyPrfileSpan>0 </MyPrfileSpan> публикаций
          </MyProfileCountFollowing>
          <MyProfileGroupButtons>
            <MyProfileButton>Удалить аккаунт</MyProfileButton>
            <MyProfileButton>Редактировать аккаунт</MyProfileButton>
          </MyProfileGroupButtons>
        </MyProfileTextInformation>
        <MyProfileAvatarInformation>
          <MyProfileAvatarWrapper>
            <MyProfileAvatar src="https://cdn.dribbble.com/users/2313212/screenshots/11256142/media/27b57b3ee2ac221dc8c616d02161d96b.jpg?resize=400x0" />
          </MyProfileAvatarWrapper>
        </MyProfileAvatarInformation>
      </MyProfileInformation>
    </MyProfileWrapper>
  );
}

export default MyProfile;
