import { styled } from "styled-components";

export const MyProfileWrapper = styled.div`
  width: 780px;
  margin: 50px auto;
  color: black;
`;

export const MyProfileInformation = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MyProfileTextInformation = styled.div`
  width: 60%;
`;

export const MyProfileAvatarInformation = styled.div`
  width: 30%;
`;

export const MyProfileName = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin: 0;
  margin-bottom: 20px;
`;

export const MyProfileCountFollowing = styled.h3`
  font-size: 18px;
  font-weight: 500;
  margin: 0;
`;

export const MyPrfileSpan = styled.span`
  font-weight: 700;
`;

export const MyProfileGroupButtons = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

export const MyProfileButton = styled.button`
  background-color: rgb(240, 240, 240);
  padding: 15px;
  border-radius: 15px;
  outline: none;
  border: 1px solid transparent;
  color: black;
  font-weight: 700;
  cursor: pointer;
  box-sizing: border-box;
  transition: linear 0.5s;
  &:hover {
    border: 1px solid black;
  }
`;

export const MyProfileAvatar = styled.img`
  width: 180px;
  height: 180px;
  object-fit: cover;
  background-color: transparent;
  border-radius: 50%;
`;
