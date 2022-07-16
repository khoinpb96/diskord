import {
  DropdownButton,
  HeaderContainer,
  UserContainer,
  UserImg,
  UserName,
} from "../styles/Header.style";
import Dropdown from "./Dropdown";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../styles";
import { useAuth } from "../hooks";

export default function Header() {
  const { user } = useAuth();
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const auth = useAuth();

  const dropdownClickHandler = () => {
    setDropdownIsOpen((prev) => !prev);
  };

  const navigate = useNavigate();

  const logoClickHandler = () => {
    auth.logout();
    navigate("/");
  };

  return (
    <HeaderContainer>
      <UserContainer onClick={dropdownClickHandler}>
        <UserImg src={user.photoUrl} />
        <UserName>{user.username || "USER"}</UserName>
        <DropdownButton className="fa-solid fa-caret-down" />
        {dropdownIsOpen && <Dropdown />}
      </UserContainer>
    </HeaderContainer>
  );
}
