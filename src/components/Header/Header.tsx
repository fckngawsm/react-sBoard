import React from "react";
import logo from "../../images/logo.svg";
import {
  HeaderItemLink,
  HeaderLogo,
  HeaderWrapper,
  HeaderWrapperLink,
} from "./HeaderStyle";

function Header() {
  return (
    <HeaderWrapper>
      <HeaderLogo src={logo} alt="logo" />
      <HeaderWrapperLink>
        <HeaderItemLink to="/sign-in">Войти</HeaderItemLink>
        <HeaderItemLink to="/sign-up">Зарегистрироваться</HeaderItemLink>
      </HeaderWrapperLink>
    </HeaderWrapper>
  );
}

export default Header;
