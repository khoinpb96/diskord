import { useNavigate } from "react-router-dom";
import { DropdownContainer, Selection } from "../styles/Dropdown";

export default function Dropdown() {
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem("userData");
    navigate("/", { replace: true });
  };

  return (
    <DropdownContainer>
      <Selection>
        <i className="fa-solid fa-circle-user icon" />
        <i className="name">My Profile</i>
      </Selection>
      <Selection logout onClick={logoutHandler}>
        <i className="fa-solid fa-arrow-right-from-bracket icon" />
        <i className="name">Logout</i>
      </Selection>
    </DropdownContainer>
  );
}
