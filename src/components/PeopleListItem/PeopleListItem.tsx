import chatIcon from "../../assets/chat-icon.svg";
import deleteIcon from "../../assets/delete-icon.svg";
import userIcon from "../../assets/user1.png";
import {
  PeopleListItemActions,
  PeopleListItemUserInfo,
  PeopleListItemWrapper,
} from "./PeopleListItem.style";

type PeopleListItemProps = {
  friendData: { id: string; username: string };
  openPopupFn: (friendId: string) => void;
};

const PeopleListItem: React.FC<PeopleListItemProps> = ({
  friendData,
  openPopupFn,
}) => {
  const handleDeleteIconClick = () => {
    openPopupFn(friendData.username);
  };

  return (
    <PeopleListItemWrapper>
      <PeopleListItemUserInfo>
        <img src={userIcon} />
        <div className="text">
          <div className="diskordTag">{friendData.username}</div>
          <div className="subtext">Offline</div>
        </div>
      </PeopleListItemUserInfo>

      <PeopleListItemActions>
        <div className="action">
          <img src={chatIcon} />
        </div>
        <div className="action" onClick={handleDeleteIconClick}>
          <img src={deleteIcon} />
        </div>
      </PeopleListItemActions>
    </PeopleListItemWrapper>
  );
};

export default PeopleListItem;
