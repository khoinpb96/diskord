import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "../../components/Sidebar/Sidebar";
import { NavLink } from "react-router-dom";

const ChannelsPage = () => {
  const navigate = useNavigate();
  const [tabSelected, setTabSelected] = useState("my-account");
  const [settingPopup, setSettingPopup] = useState(false);
  const [deleteAccountPopup, setDeleteAccountPopup] = useState(false);

  const handleLogoutButton = () => {
    localStorage.removeItem("accessToken");
    navigate("/", { replace: true });
  };

  const openSettingPopup = () => {
    setSettingPopup(true);
  };

  const closeSettingPopup = () => {
    setSettingPopup(false);
  };

  const openDeleteAccountPopup = () => {
    setDeleteAccountPopup(true);
  };

  const closeDeleteAccountPopup = () => {
    setDeleteAccountPopup(false);
  };

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      navigate("/", { replace: true });
    }
  }, []);

  const [usernameInput, setUsernameInput] = useState("");

  const handleUsernameInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUsernameInput(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <Wrapper>
        <Sidebar />
        <Base>
          <BaseSideBar>
            <div>
              <SearchBar>
                <button>Find or start a conversation</button>
              </SearchBar>

              <Channels>
                <Channel to="@me">
                  <img src="/assets/friends-icon.svg" />
                  Friends
                </Channel>
              </Channels>

              <PrivateChannelsHeaderContainer>
                <span>Direct Messages</span>

                <InviteButtonIcon>
                  <div className="tooltip">Create DM</div>
                </InviteButtonIcon>
              </PrivateChannelsHeaderContainer>
            </div>

            <PanelWrapper>
              <PanelAvatarWrapper>
                <PanelAvatar src="https://cdn.discordapp.com/avatars/872311964569837658/bf10ee0eda3d383e3f963c50dbf059a4.webp?size=48" />
              </PanelAvatarWrapper>
              <PanelNameTag>
                <div className="username">kilian</div>
                <div className="status">
                  <div className="default">love Mint!</div>
                  <div className="hovered">#1996</div>
                </div>
              </PanelNameTag>

              <PanelButtons>
                <button>
                  <img src="/assets/panel-icon-mute.svg" />
                  <div className="tooltip">Unmute</div>
                </button>
                <button>
                  <img src="/assets/panel-icon-deafen.svg" />
                  <div className="tooltip">Deafen</div>
                </button>
                <button onClick={openSettingPopup}>
                  <img src="/assets/panel-icon-setting.svg" />
                  <div className="tooltip">User Setting</div>
                </button>
              </PanelButtons>
            </PanelWrapper>
          </BaseSideBar>

          <BaseContent>
            <ContentHeader></ContentHeader>
            <ContentBody>
              <PeopleCol>
                <header>
                  <h2>Add Friend</h2>
                  <form onSubmit={handleFormSubmit}>
                    <div className="instrument">
                      You can add a friend with their Discord Tag. It's cAsE
                      sEnSitIvE!
                    </div>
                    <AddFriendWrapper>
                      <input
                        type="text"
                        placeholder="Enter a Username"
                        value={usernameInput}
                        onChange={handleUsernameInputChange}
                      />
                      <button type="submit" disabled={!usernameInput}>
                        Send Friend Request
                      </button>
                    </AddFriendWrapper>
                  </form>
                </header>
              </PeopleCol>

              <FriendsEmpty>
                <img src="/assets/friends-empty-illu.svg" />
                <div>
                  Wumpus is waiting on friends. You don't have to though!
                </div>
              </FriendsEmpty>
            </ContentBody>
          </BaseContent>
        </Base>
      </Wrapper>

      {settingPopup && (
        <Layer index={1}>
          <UserSettingPopup>
            <UserSettingPopopSidebarWrapper>
              <UserSettingPopopSidebar>
                <div className="header">user settings</div>
                <div
                  className={`item ${
                    tabSelected === "my-account" && "selected"
                  }`}
                  onClick={() => setTabSelected("my-account")}
                >
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
                  Log out <img src="/assets/logout-icon.svg" />
                </div>
                <Seperator />
                <div className="info">Make by K</div>
              </UserSettingPopopSidebar>
            </UserSettingPopopSidebarWrapper>

            <UserSettingPopopContentWrapper>
              <UserSettingPopopContent>
                <CloseSettingPopupButton onClick={closeSettingPopup}>
                  <img src="/assets/close-icon.svg" />
                  ESC
                </CloseSettingPopupButton>

                <h1>My Account</h1>

                <AccountProfileCard>
                  <AccountProfileCardBanner />

                  <AccountProfileCardUserInfo>
                    <div className="avatar" />
                    <div className="name">kilian</div>
                    <button>Edit User Profile</button>
                  </AccountProfileCardUserInfo>

                  <AccountProfileCardBackground>
                    <FieldList>
                      <div className="field">
                        <div className="field-col">
                          <h5>Username</h5>
                          <div>kilian</div>
                        </div>
                        <button>Edit</button>
                      </div>
                      <div className="field">
                        <div className="field-col">
                          <h5>Email</h5>
                          <div> </div>
                        </div>
                        <button>Add</button>
                      </div>
                      <div className="field">
                        <div className="field-col">
                          <h5>Phone Number</h5>
                          <div> </div>
                        </div>
                        <button>Add</button>
                      </div>
                    </FieldList>
                  </AccountProfileCardBackground>
                </AccountProfileCard>

                <Divider />

                <AccountRemovalWrapper>
                  <h5>Account Removal</h5>
                  <button onClick={openDeleteAccountPopup}>
                    Delete Account
                  </button>
                </AccountRemovalWrapper>
              </UserSettingPopopContent>
            </UserSettingPopopContentWrapper>
          </UserSettingPopup>
        </Layer>
      )}

      {deleteAccountPopup && (
        <Layer index={2}>
          <DeleteAccountPopupModal>
            <DeleteAccountPopup>
              <h2>Delete Account</h2>

              <div className="warning-card">
                Are you sure that you want to delete your account? This will
                immediately log you out of your account and you will not be able
                to log in again.
              </div>

              <div className="confirm">
                <h5>Password</h5>
                <input type="password" />
              </div>

              <div className="footer">
                <button
                  className="cancel-btn"
                  onClick={closeDeleteAccountPopup}
                >
                  Cancel
                </button>
                <button className="confirm-btn">Delete Account</button>
              </div>
            </DeleteAccountPopup>
          </DeleteAccountPopupModal>
        </Layer>
      )}
    </>
  );
};

const PanelWrapper = styled.div`
  background-color: #292b2f;
  height: 52px;

  font-size: 14px;
  font-weight: 500;

  display: flex;
  align-items: center;

  padding: 0 8px;
  margin-bottom: 1px;

  &:hover .status .default {
    transform: translateY(-12px);
    opacity: 0;
  }

  &:hover .status .hovered {
    transform: translateY(0);
    opacity: 1;
  }
`;

const PanelAvatarWrapper = styled.div`
  margin-right: 8px;
  opacity: 1;

  &:hover {
    opacity: 0.8;
  }
`;

const PanelAvatar = styled.img`
  width: 32px;
  height: 32px;
  cursor: pointer;
  position: relative;
  border-radius: 50%;
`;

const PanelNameTag = styled.div`
  flex-grow: 1;

  .username {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #fff;
    line-height: 18px;
    font-weight: 600;
  }

  .status {
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 12px;
    line-height: 13px;

    overflow: hidden;
    color: #b9bbbe;
    position: relative;

    .default {
      opacity: 1;
      transition: 0.1s ease-out;
    }

    .hovered {
      position: absolute;
      inset: 0;
      opacity: 0;

      transform: translateY(12px);
      transition: 0.1s ease-out;
    }
  }
`;

const PanelButtons = styled.div`
  display: flex;

  button {
    width: 32px;
    height: 32px;

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    position: relative;

    color: #b9bbbe;
    background: transparent;
    border: 0;
    cursor: pointer;

    .tooltip {
      position: absolute;
      visibility: hidden;

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
      top: -36px;

      white-space: nowrap;
      transition: 0.1s ease-out;

      &::after {
        content: "";
        width: 0;
        height: 0;

        position: absolute;
        bottom: -6px;

        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-top: 6px solid #18191c;
      }
    }

    &:hover .tooltip {
      opacity: 1;
      transform: scale(1);
      top: -40px;

      z-index: 1;
      visibility: visible;
    }
  }
`;

const DeleteAccountPopupModal = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);

  display: flex;
  justify-content: center;
  align-items: center;

  animation: showModal 200ms ease-in-out;

  @keyframes showModal {
    from {
      background: rgba(0, 0, 0, 0);
    }

    to {
      background: rgba(0, 0, 0, 0.85);
    }
  }
`;

const DeleteAccountPopup = styled.div`
  display: flex;
  flex-direction: column;

  width: 440px;
  border-radius: 4px;
  background-color: #36393f;

  opacity: 1;
  transform: scale(1);

  animation: showPopup 200ms ease-in-out;

  @keyframes showPopup {
    from {
      opacity: 0;
      transform: scale(0.8);
    }

    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  h2 {
    padding: 1rem;
    font-size: 20px;
    color: #fff;
  }

  .warning-card {
    padding: 10px;
    margin: 0 1rem;

    color: #fff;
    background-color: #faa81a;
    border-radius: 5px;

    font-size: 14px;
  }

  .confirm {
    padding: 1rem;

    h5 {
      margin-bottom: 8px;
      color: #b9bbbe;

      font-size: 12px;
      text-transform: uppercase;
    }

    input {
      padding: 10px;
      font-size: 14px;
      color: #dcddde;
      background-color: #202225;

      border: none;
      border-radius: 3px;
      outline: none;

      height: 40px;
      width: 100%;
    }
  }

  .footer {
    padding: 1rem;
    border-radius: 0 0 5px 5px;
    background-color: #2f3136;

    display: flex;
    justify-content: flex-end;

    .cancel-btn {
      height: 38px;
      min-width: 96px;
      min-height: 38px;

      color: #fff;
      background: none;
      border: none;
      border-radius: 3px;
      font-size: 13px;

      padding: 2px 16px;
      cursor: pointer;
      transition: 170ms ease-out;

      &:hover {
        text-decoration: underline;
      }
    }

    .confirm-btn {
      color: #fff;
      background-color: #5865f2;

      height: 38px;
      min-width: 96px;
      min-height: 38px;

      border: none;
      border-radius: 3px;

      font-size: 13px;
      padding: 2px 16px;
      cursor: pointer;
      transition: 170ms ease-out;

      &:hover {
        background-color: #4752c4;
      }
    }
  }
`;

const Wrapper = styled.main`
  min-height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Layer = styled.div<{ index?: number }>`
  inset: 0;
  position: absolute;
  transition: 100ms ease-out;
  overflow: hidden;

  z-index: ${({ index }) => index};
`;

const UserSettingPopup = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  opacity: 1;
  transform: scale(1);
  animation: showSettingPopup 200ms ease-in-out;

  @keyframes showSettingPopup {
    from {
      opacity: 0;
      transform: scale(1.2);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
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
    background-color: #202225;
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

const Base = styled.div`
  flex: 1;
  display: flex;
`;

const BaseSideBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;
  width: 240px;
  background-color: #2f3136;
`;

const Channels = styled.div`
  padding: 8px 0;
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

const Channel = styled(NavLink)`
  position: relative;
  max-width: 224px;
  margin-left: 8px;
  height: 42px;
  border-radius: 4px;

  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 0 12px;
  font-size: 14px;
  color: #96989d;
  gap: 1rem;

  &:hover {
    color: #dcddde;
    background-color: rgba(79, 84, 92, 0.4);

    img {
      filter: brightness(1);
    }
  }

  img {
    width: 24px;
    height: 24px;
    filter: brightness(0.7);
  }
`;

const SearchBar = styled.div`
  height: 48px;
  padding: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 0 1px 0 rgba(4, 4, 5, 0.2), 0 1.5px 0 rgba(6, 6, 7, 0.05),
    0 2px 0 rgba(4, 4, 5, 0.05);

  button {
    width: 100%;
    height: 28px;
    overflow: hidden;
    border-radius: 4px;
    background-color: #202225;
    color: #a3a6aa;

    padding: 0 6px;
    border: 0;
    outline: 0;
    text-overflow: ellipsis;

    font-size: 12px;
    white-space: nowrap;
    text-align: left;
    cursor: pointer;
  }
`;

const PrivateChannelsHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 18px 18px 4px;
  height: 40px;

  span {
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    white-space: nowrap;
    letter-spacing: 0.02em;

    color: #96989d;
    transition: 100ms ease-in;
  }

  &:hover span {
    color: #dcddde;
  }
`;

const InviteButtonIcon = styled.div`
  background-image: url("/assets/plus-btn.svg");
  background-size: cover;

  filter: grayscale(1);
  width: 16px;
  height: 16px;
  position: relative;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 1;

  .tooltip {
    position: absolute;
    visibility: hidden;

    background-color: #18191c;
    color: #ffffffeb;
    font-weight: bold;
    font-size: 12px;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 8px 12px;
    border-radius: 8px;

    opacity: 0;
    transform: scale(0.9);
    top: -36px;

    white-space: nowrap;
    transition: 0.1s ease-out;

    &::after {
      content: "";
      width: 0;
      height: 0;

      position: absolute;
      bottom: -6px;

      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-top: 6px solid #18191c;
    }
  }

  &:hover .tooltip {
    opacity: 1;
    transform: scale(1);
    top: -40px;

    z-index: 1;
    visibility: visible;
  }
`;

const BaseContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ContentHeader = styled.div`
  background: #36393f;
  width: 100%;
  height: 48px;
  padding: 0 8px;
  font-size: 16px;
  color: #dcddde;
`;

const ContentBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #36393f;
  position: relative;

  flex: 1;

  &::before {
    content: "";
    position: absolute;
    display: block;
    top: -1px;
    left: 0;
    right: 0;
    height: 1px;

    pointer-events: none;
    box-shadow: 0 1px 0 rgba(4, 4, 5, 0.2), 0 1.5px 0 rgba(6, 6, 7, 0.05),
      0 2px 0 rgba(4, 4, 5, 0.05);
  }
`;

const PeopleCol = styled.div`
  width: 100%;

  header {
    padding: 20px 30px;
    border-bottom: 1px solid rgba(79, 84, 92, 0.48);

    h2 {
      margin-bottom: 8px;
      color: #fff;

      font-size: 16px;
      font-weight: bold;
      text-transform: uppercase;
    }
  }

  .instrument {
    color: #b9bbbe;
    font-size: 13px;
    letter-spacing: -0.3px;
    font-weight: 400;
  }
`;

const AddFriendWrapper = styled.div`
  background-color: #202225;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 16px;
  padding: 0 12px;
  position: relative;

  input {
    background-color: unset;
    border: none;
    padding: 0;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.04em;
    white-space: pre;

    height: 40px;
    flex: 1;

    outline: 0;
    color: #dcddde;
    margin: 4px 8px 4px 0;
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

    &:disabled {
      background-color: #3c438b;
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
`;

const FriendsEmpty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 52px;

  width: 100%;
  flex: 1;

  div {
    font-size: 14px;
    text-align: center;
    color: #a3a6aa;
  }
`;

export default ChannelsPage;
