import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "../../components/Sidebar/Sidebar";

const ChannelsPage = () => {
  const navigate = useNavigate();
  const handleLogoutButton = () => {
    localStorage.removeItem("accessToken");
    navigate("/", { replace: true });
  };

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      navigate("/", { replace: true });
    }
  }, []);

  return (
    <Wrapper>
      <Sidebar />
      <div>
        <button onClick={handleLogoutButton}>logout</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  min-height: 100vh;
  display: flex;
`;

export default ChannelsPage;
