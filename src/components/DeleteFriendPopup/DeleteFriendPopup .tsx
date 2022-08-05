import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDeleteFriend } from "../../utils/hooks";
import useDeleteUser from "../../utils/hooks/useDeleteUser";
import DotsLoading from "../DotsLoading/DotsLoading";
import Modal from "../Modal/Modal";
import ModalCard from "../ModalCard/ModalCard";

type DeleteFriendPopupProps = {
  deletingFriendUsername: string;
  closePopupFn: () => void;
  onDeleteSuccess: () => void;
};

const DeleteFriendPopup: React.FC<DeleteFriendPopupProps> = ({
  closePopupFn,
  deletingFriendUsername,
  onDeleteSuccess,
}) => {
  const [deleteFriend, { loading }] = useDeleteFriend(deletingFriendUsername);

  const handleConfirmBtnClick = async () => {
    try {
      await deleteFriend();
      await onDeleteSuccess();
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <Modal
      initial={{ background: "rgba(0, 0, 0, 0)" }}
      animate={{ background: "rgba(0, 0, 0, 0.85)" }}
      exit={{ background: "rgba(0, 0, 0, 0)" }}
      transition={{ ease: "easeInOut", duration: 0.2 }}
    >
      <Popup
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
      >
        <h2>Remove '{"username"}'</h2>

        <div className="content">
          Are you sure you want to permanently remove {"username"} from your
          friends?
        </div>

        <div className="footer">
          <button type="button" className="cancel-btn" onClick={closePopupFn}>
            Cancel
          </button>
          <button
            type="submit"
            className="confirm-btn"
            onClick={handleConfirmBtnClick}
          >
            {loading ? <DotsLoading /> : "Remove friend"}
          </button>
        </div>
      </Popup>
    </Modal>
  );
};

const Popup = styled(ModalCard)`
  h2 {
    padding: 1rem;
    font-size: 20px;
    color: #fff;
  }

  .content {
    padding: 0px 1rem 40px 1rem;
    font-size: 14px;
    color: #dcddde;
  }

  .inputs {
    padding: 1rem;

    h5 {
      margin-bottom: 8px;
      color: #b9bbbe;

      font-size: 12px;
      text-transform: uppercase;

      &.error {
        color: #f38688;
      }

      & .error-message {
        display: inline-block;
        text-transform: capitalize;
      }
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
      background-color: #d83c3e;

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
        background-color: #a12d2f;
      }
    }
  }
`;

export default DeleteFriendPopup;
