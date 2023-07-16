import React from "react";
import logo from "../../images/logo.svg";
import { useNavigate } from "react-router-dom";
import {
  HeaderItemLink,
  HeaderLogo,
  HeaderWrapper,
  HeaderWrapperLink,
} from "./HeaderStyle";
import { useAppDispatch, useAppSelector } from "../../redux-hooks";
import { authUserSelectors } from "../../features/auth/auth-selectors";
import { logOut } from "../../features/auth/auth-slice";

function Header() {
  const dispatch = useAppDispatch();
  const user = useAppSelector(authUserSelectors);
  const navigate = useNavigate();
  const handleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <HeaderWrapper>
      <HeaderLogo
        src={logo}
        alt="logo"
        onClick={() => navigate("/my-profile")}
      />
      <HeaderWrapperLink>
        {user ? (
          <HeaderItemLink onClick={handleLogOut} to="/sign-in">
            Выйти
          </HeaderItemLink>
        ) : (
          <>
            <HeaderItemLink to="/sign-in">Войти</HeaderItemLink>
            <HeaderItemLink to="/sign-up">Зарегистрироваться</HeaderItemLink>
          </>
        )}
      </HeaderWrapperLink>
    </HeaderWrapper>
  );
}

export default Header;
