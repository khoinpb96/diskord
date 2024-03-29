import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import closeIconUrl from "../../assets/close-icon.svg";
import logoutIconUrl from "../../assets/logout-icon.svg";
import userInitAvaUrl from "../../assets/user.png";
import DeleteAccountPopup from "../DeleteAccountPopup/DeleteAccountPopup";
import EditAccountPopup from "../EditAccountPopup/EditAccountPopup";
import Layer from "../Layer/Layer";

type UserSettingPopupProps = {
  data: any;
  closePopupFn: () => void;
  refetch: any;
};

const UserSettingPopup: React.FC<UserSettingPopupProps> = ({
  data,
  closePopupFn,
  refetch,
}) => {
  const navigate = useNavigate();

  const [tabSelected] = useState("my-account");
  const [editMode, setEditMode] = useState(false);
  const [deleteAccountPopup, setDeleteAccountPopup] = useState(false);

  const openDeleteAccountPopup = () => {
    setDeleteAccountPopup(true);
  };

  const closeDeleteAccountPopup = () => {
    setDeleteAccountPopup(false);
  };

  const handleLogoutButton = () => {
    localStorage.removeItem("accessToken");
    navigate("/", { replace: true });
  };

  const handleEditButtonClick = () => {
    setEditMode(true);
  };

  const closeEditPopup = () => {
    setEditMode(false);
  };

  return (
    <UserSettingPopupWrapper
      initial={{ opacity: 0, scale: 1.2 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ ease: "easeInOut", duration: 0.2 }}
    >
      <UserSettingPopopSidebarWrapper>
        <UserSettingPopopSidebar>
          <div className="header">user settings</div>
          <div className={`item ${tabSelected === "my-account" && "selected"}`}>
            My Account
          </div>
          <div className="item">Profiles</div>
          <div className="item">Privacy & Safety</div>
          <div className="item">Authorized Apps</div>
          <div className="item">Connections</div>
          <div className="item">Friend Requests</div>
          <Seperator />
          <div className="header">billing settings</div>
          <div className="item">Nitro</div>
          <div className="item">Server Boost</div>
          <div className="item">Subscriptions</div>
          <div className="item">Gift Inventory</div>
          <div className="item">Billing</div>
          <div className="header">app settings</div>
          <div className="item">Appearance</div>
          <div className="item">Accessibility</div>
          <div className="item">Voice & Video</div>
          <div className="item">Text & Images</div>
          <div className="item">Notifications</div>
          <div className="item">Keybinds</div>
          <div className="item">Language</div>
          <div className="item">Streamer Mode</div>
          <div className="item">Advanced</div>
          <Seperator />
          <div className="header">activity settings</div>
          <div className="item">Activity Privacy</div>
          <div className="item">Registered Games</div>
          <Seperator />
          <div className="item">What's New</div>
          <div className="item">HypeSquad</div>
          <Seperator />
          <div className="item" onClick={handleLogoutButton}>
            Log out <img src={logoutIconUrl} />
          </div>
          <Seperator />
          <div className="info">Make by K</div>
        </UserSettingPopopSidebar>
      </UserSettingPopopSidebarWrapper>

      <UserSettingPopopContentWrapper>
        <UserSettingPopopContent>
          <CloseSettingPopupButton onClick={closePopupFn}>
            <img src={closeIconUrl} />
            ESC
          </CloseSettingPopupButton>

          <h1>My Account</h1>

          <AccountProfileCard>
            <AccountProfileCardBanner />

            <AccountProfileCardUserInfo>
              <div className="avatar" />
              <div className="name">{data?.username}</div>
            </AccountProfileCardUserInfo>

            <AccountProfileCardBackground>
              <FieldList>
                <div className="field">
                  <div className="field-col">
                    <h5>Username</h5>
                    <div>{data?.username}</div>
                  </div>
                </div>
                <div className="field">
                  <div className="field-col">
                    <h5>Email</h5>
                    <div>{data?.email}</div>
                  </div>
                </div>
                <div className="field">
                  <div className="field-col">
                    <h5>Phone Number</h5>
                    <div>{data?.phoneNumber}</div>
                  </div>
                </div>
              </FieldList>
            </AccountProfileCardBackground>
            <EditButton onClick={handleEditButtonClick}>Edit</EditButton>
          </AccountProfileCard>

          <Divider />

          <AccountRemovalWrapper>
            <h5>Account Removal</h5>
            <button onClick={openDeleteAccountPopup}>Delete Account</button>
          </AccountRemovalWrapper>
        </UserSettingPopopContent>
      </UserSettingPopopContentWrapper>

      <AnimatePresence>
        {editMode && (
          <Layer index={2}>
            <EditAccountPopup
              data={data}
              closePopupFn={closeEditPopup}
              refetch={refetch}
            />
          </Layer>
        )}

        {deleteAccountPopup && (
          <Layer index={2}>
            <DeleteAccountPopup closePopupFn={closeDeleteAccountPopup} />
          </Layer>
        )}
      </AnimatePresence>
    </UserSettingPopupWrapper>
  );
};

const UserSettingPopupWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
`;

const UserSettingPopopSidebarWrapper = styled.div`
  flex: 1 0 218px;
  background: #2f3136;
  display: flex;
  justify-content: flex-end;
`;

const UserSettingPopopSidebar = styled.div`
  width: 218px;
  padding: 60px 6px 60px 20px;

  overflow-y: scroll;

  .header {
    padding: 6px 10px;

    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    color: #96989d;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .item {
    color: #b9bbbe;
    padding: 6px 10px;
    margin-bottom: 2px;
    border-radius: 4px;

    font-size: 14.6px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: space-between;

    &.selected {
      background-color: rgba(79, 84, 92, 0.6);
      color: #fff;
    }

    &:hover {
      background-color: rgba(79, 84, 92, 0.4);
    }
  }

  .info {
    padding: 8px 10px;
    text-transform: capitalize;
    color: #a3a6aa;
    font-size: 10px;
    font-weight: 400;
  }

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: #202225;
    border-radius: 4px;
  }
`;

const UserSettingPopopContentWrapper = styled.div`
  flex: 1 1 800px;
  background-color: #36393f;
  display: flex;
  flex-direction: column;
`;

const CloseSettingPopupButton = styled.div`
  position: fixed;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  color: #b9bbbe;
  font-weight: 600;
  font-size: 13px;
  cursor: pointer;
  opacity: 0.85;

  &:hover {
    opacity: 1;
  }

  img {
    border: 2px solid #b9bbbe;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    padding: 6px;
  }
`;

const UserSettingPopopContent = styled.div`
  position: relative;
  padding: 60px 100px 80px 40px;

  min-width: 460px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: #202225;
    border-radius: 4px;
  }

  h1 {
    color: #fff;
    margin-bottom: 20px;
    font-size: 20px;
    line-height: 24px;
  }
`;

const AccountProfileCard = styled.div`
  background-color: #202225;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
`;

const AccountProfileCardBanner = styled.div`
  background-color: rgb(25, 25, 31);
  width: 100%;
  height: 100px;
`;

const AccountProfileCardUserInfo = styled.div`
  height: 72px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 16px 16px 0 120px;

  .avatar {
    width: 80px;
    height: 80px;

    border: 7px solid #202225;
    background-image: url(${userInitAvaUrl});
    background-size: cover;

    border-radius: 50%;

    position: absolute;
    top: 76px;
    left: 16px;
  }

  .name {
    margin-bottom: 6px;
    color: #fff;
    font-size: 18px;
    line-height: 24px;
    font-weight: bold;
  }

  button {
    color: #fff;
    background-color: #5865f2;

    cursor: pointer;
    padding: 8px 16px;

    font-size: 12px;
    font-weight: 500;

    outline: 0;
    border: none;
    border-radius: 3px;

    height: 32px;
    min-width: 60px;
    min-height: 32px;

    transition: 170ms;

    &:disabled {
      background-color: #3c438b;
      cursor: not-allowed;
      opacity: 0.5;
    }

    &:hover {
      background-color: #4752c4;
    }
  }
`;

const AccountProfileCardBackground = styled.div`
  border-radius: 8px;
  background-color: #2f3136;
  padding: 16px;
  margin: 8px 16px 16px;
`;

const FieldList = styled.div`
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  .field {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    min-height: 40px;

    .field-col {
      h5 {
        margin-bottom: 4px;
        color: #b9bbbe;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 12px;
      }
      div {
        overflow: hidden;
        color: #fff;
        text-overflow: ellipsis;
        font-size: 14px;
        font-weight: 400;
      }
    }

    button {
      color: #fff;
      background-color: #4f545c;

      min-width: 60px;
      min-height: 32px;

      border: none;
      border-radius: 3px;

      font-size: 14px;
      font-weight: 500;
      line-height: 16px;

      padding: 2px 16px;

      transition: background-color 0.17s ease, color 0.17s ease;
      cursor: pointer;

      &:hover {
        background-color: #686d73;
      }
    }
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  border-top: thin solid rgba(79, 84, 92, 0.48);
  margin: 40px 0;
`;

const AccountRemovalWrapper = styled.div`
  h5 {
    margin-bottom: 8px;
    color: #b9bbbe;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
  }

  button {
    color: #fff;
    border-color: #ed4245;

    transition: 170ms ease;

    border-width: 1px;
    border-style: solid;
    border-radius: 3px;

    font-size: 14px;
    line-height: 26px;

    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    padding: 2px 16px;
    outline: 0;
    background: none;

    cursor: pointer;

    &:hover {
      background: #ed4245;
    }
  }
`;

const Seperator = styled.div`
  margin: 8px 10px;
  height: 1px;
  background-color: rgba(79, 84, 92, 0.48);
`;

const EditButton = styled.div`
  color: #fff;
  background-color: #4f545c;

  min-height: 32px;

  border: none;
  border-radius: 3px;

  font-size: 14px;
  font-weight: 500;
  line-height: 16px;

  padding: 2px 16px;

  transition: background-color 0.17s ease, color 0.17s ease;
  cursor: pointer;

  max-width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 1rem 1rem auto;

  &:hover {
    background-color: #686d73;
  }
`;

export default UserSettingPopup;
