import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { gql, useSubscription } from "@apollo/client";

import {
  ContentBody,
  ContentHeader,
} from "../../pages/ChannelsPage/ChannelsPage.style";
import useGetChannel from "../../utils/hooks/useGetChannel";
import userUrl from "../../assets/user.png";
import useCreateMessage from "../../utils/hooks/useCreateMessage";
import symbolIconUrl from "../../assets/@-icon.svg";

const MESSAGES_SUBSCRIPTION = gql`
  subscription {
    messageCreated {
      text
      username
      createAt
    }
  }
`;

const ChatRoom: React.FC<any> = ({ channelId }) => {
  const [channelData, setChannelData] = useState<any>();
  const [messagesData, setMessagesData] = useState<any>();
  const [chatInput, setChatInput] = useState("");

  const navigate = useNavigate();
  const { data: useGetChannelRes, error } = useGetChannel(channelId);
  const [createMessage, {}] = useCreateMessage(channelId, chatInput);
  const scrollerRef = useRef<any>();

  useSubscription(MESSAGES_SUBSCRIPTION, {
    onSubscriptionData: ({ subscriptionData }) => {
      const message = subscriptionData.data.messageCreated;

      setMessagesData((prev: any) => {
        const res = [...prev];
        const sameUser = prev[0]?.username === message.username;
        const recentlySent = prev[0]?.createAt === message.createAt;

        if (sameUser && recentlySent) {
          res.shift();
          res.unshift(message);
          return res;
        }

        res.unshift(message);
        return res;
      });
    },
  });

  useEffect(() => {
    if (error) navigate("/channel", { replace: true });
    if (useGetChannelRes) {
      setChannelData({
        id: useGetChannelRes?.channel.id,
        participants: useGetChannelRes?.channel.participants,
      });
      setMessagesData(useGetChannelRes?.channel.messages);
    }

    scrollerRef.current.scrollTop = 0;
  }, [useGetChannelRes]);

  const handleChatFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await createMessage();
      setChatInput("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChatInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChatInput(e.target.value);
  };

  return (
    <>
      <ContentHeader>
        <ParticipantNameLogo src={symbolIconUrl} />
        <ParticipantName>
          {channelData?.participants[0].username}
        </ParticipantName>
      </ContentHeader>
      <ContentBody>
        <ChatContent>
          <div className="messagesWrapper">
            <Scroller ref={scrollerRef}>
              {messagesData?.map((message: any, index: number) => (
                <ChatItem key={index}>
                  <img src={userUrl} />
                  <div className="header">{message.username}</div>
                  <ul>
                    {message.text.map((text: any, i: any) => (
                      <li key={i}>{text}</li>
                    ))}
                  </ul>
                </ChatItem>
              ))}
            </Scroller>
          </div>
          <form onSubmit={handleChatFormSubmit}>
            <input
              placeholder={"Message @"}
              onChange={handleChatInputChange}
              value={chatInput}
            />
          </form>
        </ChatContent>
      </ContentBody>
    </>
  );
};

const ParticipantNameLogo = styled.img`
  filter: brightness(1) !important;
`;

const ParticipantName = styled.div`
  font-weight: 900;
`;

const Scroller = styled.div`
  display: flex;
  flex-direction: column-reverse;
  position: absolute;
  inset: 0;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #2e3338;
    border-radius: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background: #1b1e22ae;
    border-radius: 6px;
  }
`;

const ChatContent = styled.main`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;

  .messagesWrapper {
    flex: 1;
    position: relative;
  }

  form {
    margin-bottom: 24px;
    padding: 0 1rem;

    input {
      background-color: rgb(64, 68, 75);
      border: none;
      border-radius: 8px;
      outline: none;

      padding: 10px 20px;
      width: 100%;

      color: #dcddde;
    }
  }
`;

const ChatItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 48px 1rem 72px;
  position: relative;

  img {
    position: absolute;
    left: 16px;
    top: 18px;

    width: 40px;
    border-radius: 50%;
  }

  .header {
    font-weight: 700;
    color: #fff;
    font-size: 14px;
    line-height: 1.375rem;
  }

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 4px;

    li {
      color: #dcddde;
      font-size: 14px;
      line-height: 1.375rem;
    }
  }
`;

export default ChatRoom;
