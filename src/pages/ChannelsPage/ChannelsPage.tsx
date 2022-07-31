import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import friendsEmptyIlluUrl from "../../assets/friends-empty-illu.svg";
import friendsIconUrl from "../../assets/friends-icon.svg";
import useGetUser from "../../utils/hooks/useGetUser";
import Sidebar from "../../components/Sidebar/Sidebar";
import DeleteAccountPopup from "../../components/DeleteAccountPopup/DeleteAccountPopup";
import Layer from "../../components/Layer/Layer";
import Panel from "../../components/Panel/Panel";
import UserSettingPopup from "../../components/UserSettingPopup/UserSettingPopup";
import LoadingPage from "../LoadingPage/LoadingPage";
import {
  AddFriendWrapper,
  Base,
  BaseContent,
  BaseSideBar,
  Channel,
  Channels,
  ContentBody,
  ContentHeader,
  FriendsEmpty,
  InviteButtonIcon,
  PeopleCol,
  PrivateChannelsHeaderContainer,
  SearchBar,
  Wrapper,
} from "./ChannelsPage.style";

const ChannelsPage = () => {
  const navigate = useNavigate();
  const [settingPopup, setSettingPopup] = useState(false);
  const [usernameInput, setUsernameInput] = useState("");
  const { data, loading, error, refetch } = useGetUser();

  useEffect(() => {
    if (error) {
      localStorage.removeItem("accessToken");
      return navigate("/", { replace: true });
    }

    refetch();
  }, [error]);

  const openSettingPopup = useCallback(() => {
    setSettingPopup(true);
  }, []);

  const closeSettingPopup = useCallback(() => {
    setSettingPopup(false);
  }, []);

  const handleUsernameInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUsernameInput(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("form submit");
  };

  if (loading) return <LoadingPage />;

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
                  <img src={friendsIconUrl} />
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

            <Panel data={data?.user} openSettingPopupFn={openSettingPopup} />
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
                <img src={friendsEmptyIlluUrl} />
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
          <UserSettingPopup
            data={data.user}
            refetch={refetch}
            closePopupFn={closeSettingPopup}
          />
        </Layer>
      )}
    </>
  );
};

export default ChannelsPage;
