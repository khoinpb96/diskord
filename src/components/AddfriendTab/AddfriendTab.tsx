import { useState } from "react";

import {
  AddFriendErrorMessage,
  AddFriendSuccessMessage,
  AddFriendWrapper,
  FriendsEmpty,
  PeopleCol,
} from "./AddfriendTab.style";
import friendsEmptyIlluUrl from "../../assets/friends-empty-illu.svg";
import { useAddFriend } from "../../utils/hooks";
import DotsLoading from "../DotsLoading/DotsLoading";

type AddFriendTabProps = {
  onAddSuccess: () => void;
};

const AddfriendTab: React.FC<AddFriendTabProps> = ({ onAddSuccess }) => {
  const [username, setUsername] = useState("");
  const [addFriend, { data, loading, error, reset }] = useAddFriend(username);

  const handleUsernameInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    reset();
    setUsername(e.target.value);
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await addFriend();
      await onAddSuccess();
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <>
      <PeopleCol>
        <header>
          <h2>Add Friend</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="instrument">
              You can add a friend with their Discord Tag. It's cAsE sEnSitIvE!
            </div>
            <AddFriendWrapper isError={!!error} isSuccess={data?.addFriend}>
              <input
                type="text"
                placeholder="Enter a Username"
                value={username}
                onChange={handleUsernameInputChange}
              />
              <button type="submit" disabled={!username}>
                {loading ? <DotsLoading /> : "Send Friend Request"}
              </button>
            </AddFriendWrapper>

            {error && (
              <AddFriendErrorMessage>
                Failed! {error.message}
              </AddFriendErrorMessage>
            )}

            {data?.addFriend && (
              <AddFriendSuccessMessage>
                Success! You and <strong>{username}</strong> now are friends.
              </AddFriendSuccessMessage>
            )}
          </form>
        </header>
      </PeopleCol>

      <FriendsEmpty>
        <img src={friendsEmptyIlluUrl} />
        <div>Wumpus is waiting on friends. You don't have to though!</div>
      </FriendsEmpty>
    </>
  );
};

export default AddfriendTab;
