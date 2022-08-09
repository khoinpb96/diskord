import { AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

import friendsIconUrl from "../../assets/friends-icon.svg";
import searchIcon from "../../assets/search-icon.svg";
import user1 from "../../assets/user1.png";

import AddfriendTab from "../../components/AddfriendTab/AddfriendTab";
import ChatRoom from "../../components/ChatRoom/ChatRoom";
import DeleteFriendPopup from "../../components/DeleteFriendPopup/DeleteFriendPopup ";
import Layer from "../../components/Layer/Layer";
import Panel from "../../components/Panel/Panel";
import PeopleListItem from "../../components/PeopleListItem/PeopleListItem";
import QuickSwitcher from "../../components/QuickSwitcher/QuickSwitcher";
import Sidebar from "../../components/Sidebar/Sidebar";
import UserSettingPopup from "../../components/UserSettingPopup/UserSettingPopup";

import { useGetUser } from "../../utils/hooks";
import LoadingPage from "../LoadingPage/LoadingPage";

import {
  Background,
  Base,
  BaseContent,
  BaseSideBar,
  Channel,
  Channels,
  ContentBody,
  ContentHeader,
  ContentHeaderTabBar,
  ContentHeaderTabBarItem,
  DirectMessage,
  DirectMessagesContainer,
  Divider,
  FriendsTabSearchBar,
  FriendsTabWrapper,
  FriendTabTitle,
  InviteButtonIcon,
  PeopleList,
  PrivateChannelsHeaderContainer,
  SearchBar,
  Wrapper,
} from "./ChannelsPage.style";

const ChannelsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const chatRoute = location.pathname.split("/")[2];

  const [settingPopup, setSettingPopup] = useState(false);
  const [addFriendPopup, setAddFriendPopup] = useState(false);
  const [selectedTabBarItem, setSelectedTabBarItem] = useState("All");
  const [deleteFriendPopup, setDeleteFriendPopup] = useState(false);
  const [deletingFriendUsername, setDeletingFriendUsername] = useState("");

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

  const openAddFriendPopup = () => {
    setAddFriendPopup(true);
  };

  const closeAddFriendPopup = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setAddFriendPopup(false);
  };

  const openDeleteFriendPopup = (friendUsername: string) => {
    setDeleteFriendPopup(true);
    setDeletingFriendUsername(friendUsername);
  };

  const closeDeleteFriendPopup = () => {
    setDeleteFriendPopup(false);
  };

  const handleTabBarItemClick = (e: any) => {
    setSelectedTabBarItem(e.target.innerHTML);
  };

  const handleDeleteFriendSuccess = async () => {
    setDeleteFriendPopup(false);
    await refetch();
  };

  const dmChannels = data?.user?.channels?.map((channel: any) => {
    const participant = channel.participants?.filter(
      (p: any) => p.id !== data?.user.id
    );

    return { id: channel.id, participant: participant[0].username };
  });

  if (loading) return <LoadingPage />;

  return (
    <Background>
      <Wrapper
        variants={{
          hidden: { opacity: 0, scale: 0.9 },
          show: { opacity: 1 },
        }}
        animate={settingPopup ? "hidden" : "show"}
        transition={{ ease: "easeInOut", duration: 0.2 }}
      >
        <Sidebar />
        <Base>
          <BaseSideBar>
            <div>
              <SearchBar>
                <button onClick={openAddFriendPopup}>
                  Find or start a conversation
                </button>
              </SearchBar>

              <Channels>
                <Channel to="/channels">
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

              <DirectMessagesContainer>
                {dmChannels?.map((channel: any) => (
                  <DirectMessage key={channel.id} to={channel.id}>
                    <img src={user1} />
                    <div className="username">{channel.participant}</div>
                  </DirectMessage>
                ))}
              </DirectMessagesContainer>
            </div>

            <Panel data={data?.user} openSettingPopupFn={openSettingPopup} />
          </BaseSideBar>

          <BaseContent>
            {chatRoute ? (
              <ChatRoom channelId={chatRoute} />
            ) : (
              <>
                <ContentHeader>
                  <img src={friendsIconUrl} />
                  <h3>Friends</h3>
                  <Divider />
                  <ContentHeaderTabBar role="tablist">
                    <ContentHeaderTabBarItem
                      isSelected={selectedTabBarItem === "All"}
                      onClick={handleTabBarItemClick}
                    >
                      All
                    </ContentHeaderTabBarItem>
                    <ContentHeaderTabBarItem
                      isSelected={selectedTabBarItem === "Add Friend"}
                      onClick={handleTabBarItemClick}
                    >
                      Add Friend
                    </ContentHeaderTabBarItem>
                  </ContentHeaderTabBar>
                </ContentHeader>

                <ContentBody>
                  {selectedTabBarItem === "All" && data?.user && (
                    <FriendsTabWrapper>
                      <FriendsTabSearchBar>
                        <input placeholder="Search" />
                        <img src={searchIcon} />
                      </FriendsTabSearchBar>

                      <FriendTabTitle>
                        All Friends - {data.user.friends.length}
                      </FriendTabTitle>
                      <PeopleList>
                        {data?.user?.friends &&
                          data.user.friends.map(
                            (friendData: { id: string; username: string }) => (
                              <PeopleListItem
                                key={friendData.id}
                                openPopupFn={openDeleteFriendPopup}
                                friendData={friendData}
                                onCreateChannelSuccess={refetch}
                              />
                            )
                          )}
                      </PeopleList>
                    </FriendsTabWrapper>
                  )}
                  {selectedTabBarItem === "Add Friend" && (
                    <AddfriendTab onAddSuccess={refetch} />
                  )}
                </ContentBody>
              </>
            )}
          </BaseContent>
        </Base>
      </Wrapper>

      <AnimatePresence>
        {settingPopup && (
          <Layer index={1}>
            <UserSettingPopup
              data={data.user}
              refetch={refetch}
              closePopupFn={closeSettingPopup}
            />
          </Layer>
        )}

        {addFriendPopup && (
          <Layer index={1}>
            <QuickSwitcher closePopupFn={closeAddFriendPopup} />
          </Layer>
        )}

        {deleteFriendPopup && (
          <Layer index={1}>
            <DeleteFriendPopup
              closePopupFn={closeDeleteFriendPopup}
              deletingFriendUsername={deletingFriendUsername}
              onDeleteSuccess={handleDeleteFriendSuccess}
            />
          </Layer>
        )}
      </AnimatePresence>
    </Background>
  );
};

export default ChannelsPage;
