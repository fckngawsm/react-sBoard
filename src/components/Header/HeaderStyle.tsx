import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled.header`
  width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLogo = styled.img`
  width: 150px;
  height: 50px;
`;

export const HeaderWrapperLink = styled.div`
  width: 25%;
  display: flex;
  justify-content: space-between;
`;

export const HeaderItemLink = styled(Link)`
  font-size: 18px;
  line-height: 1.55;
  font-weight: 500;
  border: 2px solid #ff823e;
  color: black;
  border-radius: 100px;
  padding: 5px 15px;
  text-decoration: none;
`;