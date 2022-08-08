import chatIcon from "../../assets/chat-icon.svg";
import deleteIcon from "../../assets/delete-icon.svg";
import userIcon from "../../assets/user1.png";
import useCreateChannel from "../../utils/hooks/useCreateChannel";
import {
  PeopleListItemActions,
  PeopleListItemUserInfo,
  PeopleListItemWrapper,
} from "./PeopleListItem.style";

type PeopleListItemProps = {
  friendData: { id: string; username: string };
  openPopupFn: (friendId: string) => void;
  onCreateChannelSuccess: () => void;
};

const PeopleListItem: React.FC<PeopleListItemProps> = ({
  friendData,
  openPopupFn,
  onCreateChannelSuccess,
}) => {
  const [createChannel, {}] = useCreateChannel(friendData.id);

  const handleDeleteIconClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    openPopupFn(friendData.username);
  };

  const handlePeopleListItemClick = async () => {
    try {
      await createChannel();
      await onCreateChannelSuccess();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <PeopleListItemWrapper onClick={handlePeopleListItemClick}>
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
