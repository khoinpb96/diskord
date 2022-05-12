import {
  DropdownButton,
  HeaderContainer,
  UserContainer,
  UserImg,
  UserName,
} from "../styles/Header.style";
import Dropdown from "./Dropdown";

import { HeaderProps } from "../types";
import logo from "../assets/devchallenges-logo.svg";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../styles";

export default function Header(props: HeaderProps) {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

  const dropdownClickHandler = () => {
    setDropdownIsOpen((prev) => !prev);
  };

  const navigate = useNavigate();
  const logoClickHandler = () => {
    navigate("/");
  };

  return (
    <HeaderContainer>
      <Logo src={logo} onClick={logoClickHandler} />
      <UserContainer onClick={dropdownClickHandler}>
        <UserImg />
        <UserName>{props.name || "NAME"}</UserName>
        <DropdownButton className="fa-solid fa-caret-down" />
        {dropdownIsOpen && <Dropdown />}
      </UserContainer>
    </HeaderContainer>
  );
}
