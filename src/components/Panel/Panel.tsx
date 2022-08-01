import React from "react";
import styled from "styled-components";

import userInitAvaUrl from "../../assets/user.png";
import panelIconMuteUrl from "../../assets/panel-icon-mute.svg";
import panelIconDeafenUrl from "../../assets/panel-icon-deafen.svg";
import panelIconSettingUrl from "../../assets/panel-icon-setting.svg";

type PanelProps = {
  data: any;
  openSettingPopupFn: () => void;
};

const Panel: React.FC<PanelProps> = ({ data, openSettingPopupFn }) => {
  return (
    <PanelWrapper>
      <PanelAvatarWrapper>
        <PanelAvatar src={userInitAvaUrl} />
      </PanelAvatarWrapper>
      <PanelNameTag>
        <div className="username">{data?.username}</div>
        <div className="status">
          <div className="default">love Mint!</div>
          <div className="hovered">#ID</div>
        </div>
      </PanelNameTag>

      <PanelButtons>
        <button>
          <img src={panelIconMuteUrl} />
          <div className="tooltip">Unmute</div>
        </button>
        <button>
          <img src={panelIconDeafenUrl} />
          <div className="tooltip">Deafen</div>
        </button>
        <button onClick={openSettingPopupFn}>
          <img src={panelIconSettingUrl} />
          <div className="tooltip">User Setting</div>
        </button>
      </PanelButtons>
    </PanelWrapper>
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

export default Panel;
