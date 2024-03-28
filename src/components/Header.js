import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <div class="image-container">
          <img src="https://media.licdn.com/dms/image/C4D0BAQHdjz5uh-p7zA/company-logo_200_200/0/1631340895256?e=2147483647&v=beta&t=KIvUHjVFz6Nd0NfxIu96KBJuLQE9eWzTJ_QhSv-U78E" alt="my logo img" class="cropped-image" />
        </div>
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 5rem;
  }
`;
export default Header;