import styled from "styled-components";

const Sidebar = () => {
  return (
    <Nav>
      <NavList role="tree">
        <NavListItemWrapper role="treeitem">
          <div className="pill" />
          <NavListItem role="home-item">
            <img src="/assets/icon-logo.svg" />
          </NavListItem>
          <div className="tooltip">Home</div>
        </NavListItemWrapper>
        <Seperator />
      </NavList>
    </Nav>
  );
};

const Nav = styled.nav`
  width: 72px;
  background-color: #202225;
`;

const NavList = styled.ul`
  list-style-type: none;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 12px;

  gap: 8px;
`;

const NavListItemWrapper = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  .pill {
    position: absolute;

    left: -16px;
    width: 8px;
    height: 0;

    opacity: 0;
    transform: none;

    border-radius: 0 4px 4px 0;
    background-color: #fff;
    transition: 0.1s ease-out;
  }

  &:hover .pill {
    height: 20px;
    opacity: 1;
  }

  &:hover .tooltip {
    opacity: 1;
    transform: scale(1);
    right: -6rem;
  }

  .tooltip {
    position: absolute;

    background-color: #18191c;
    color: #ffffffeb;
    font-weight: bold;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 8px 12px;
    border-radius: 8px;

    opacity: 0;
    transform: scale(0.9);
    right: -5.6rem;

    transition: 0.1s ease-out;

    &::after {
      content: "";
      width: 0;
      height: 0;

      position: absolute;
      top: 14px;
      left: -6px;

      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-right: 6px solid #18191c;
    }
  }
`;

const NavListItem = styled.li`
  width: 48px;
  height: 48px;

  background-color: #36393f;
  border-radius: 50%;

  transition: 0.1s ease-out;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #5865f2;
    border-radius: 35%;
  }

  &:active {
    transform: translateY(2px);
  }
`;

const Seperator = styled.div`
  height: 2px;
  width: 32px;
  border-radius: 1px;
  background-color: rgba(79, 84, 92, 0.48);
`;

export default Sidebar;
