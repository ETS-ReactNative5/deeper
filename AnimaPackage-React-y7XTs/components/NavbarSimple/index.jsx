import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


function NavbarSimple(props) {
  const { className } = props;

  return (
    <NavbarSimple1 className={`navbar-simple ${className || ""}`}>
      <IconHome className="icon-home" src="/img/icon-home@2x.svg" />
      <Link to="/community">
        <IconLanguage className="icon-language" src="/img/icon-language@2x.svg" />
      </Link>
      <Link to="/journal">
        <IconLanguage className="icon-edit" src="/img/icon-edit@2x.svg" />
      </Link>
      <Link to="/inbox">
        <IconPerson className="icon-person" src="/img/icon-person@2x.svg" />
      </Link>
    </NavbarSimple1>
  );
}

const NavbarSimple1 = styled.div`
  height: 56px;
  margin-top: 38px;
  display: flex;
  padding: 0 32px;
  align-items: center;
  min-width: 375px;
  background-color: var(--palettewhite);
  box-shadow: 0px -1px 4px #00000014;

  &.navbar-simple.navbar-simple-1 {
    margin-top: 16px;
  }

  &.navbar-simple.navbar-simple-2 {
    margin-top: 16px;
  }

  &.navbar-simple.navbar-simple-3 {
    margin-top: 16px;
  }

  &.navbar-simple.navbar-simple-4 {
    margin-top: 138px;
  }
`;

const IconHome = styled.img`
  width: 24px;
  height: 24px;
`;

const IconLanguage = styled.img`
  width: 25px;
  height: 24px;
  margin-left: 71px;
  cursor: pointer;
`;

const IconPerson = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 71px;
  cursor: pointer;
`;

const IconHome1 = styled.img`
  .navbar-simple.navbar-simple-1 & {
    cursor: pointer;
  }
`;

const IconEdit = styled.img`
  .navbar-simple.navbar-simple-1 & {
    cursor: unset;
  }
`;

const IconHome2 = styled.img`
  .navbar-simple.navbar-simple-2 & {
    cursor: pointer;
  }
`;

const IconPerson1 = styled.img`
  .navbar-simple.navbar-simple-2 & {
    cursor: unset;
  }
`;

const IconHome3 = styled.img`
  .navbar-simple.navbar-simple-3 & {
    cursor: pointer;
  }
`;

const IconLanguage1 = styled.img`
  .navbar-simple.navbar-simple-3 & {
    cursor: unset;
  }
`;

const IconLanguage2 = styled.img`
  .navbar-simple.navbar-simple-4 & {
    cursor: unset;
  }
`;

export default NavbarSimple;
