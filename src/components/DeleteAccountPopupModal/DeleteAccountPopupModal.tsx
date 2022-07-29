import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useDeleteUser from "../../utils/hooks/useDeleteUser";
import DotsLoading from "../DotsLoading/DotsLoading";
import Modal from "../Modal/Modal";
import ModalCard from "../ModalCard/ModalCard";

type DeleteAccountPopupModalProps = {
  closePopupFn: () => void;
};

const DeleteAccountPopupModal: React.FC<DeleteAccountPopupModalProps> = ({
  closePopupFn,
}) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [deleteUser, { loading }] = useDeleteUser(password);
  const navigate = useNavigate();

  const handleFormSubmit = async () => {
    try {
      await deleteUser();
      localStorage.removeItem("accessToken");
      navigate("/", { replace: true });
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handlePasswordInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(e.target.value);
  };

  return (
    <Modal>
      <DeleteAccountPopup>
        <h2>Delete Account</h2>

        <div className="warning-card">
          Are you sure that you want to delete your account? This will
          immediately log you out of your account and you will not be able to
          log in again.
        </div>

        <div className="confirm">
          <h5>Password</h5>
          <input
            type="password"
            onChange={handlePasswordInputChange}
            value={password}
          />

          {error && <ErrorMessage>{error}</ErrorMessage>}
        </div>

        <div className="footer">
          <button className="cancel-btn" onClick={closePopupFn}>
            Cancel
          </button>
          <button className="confirm-btn" onClick={handleFormSubmit}>
            {loading ? <DotsLoading /> : "Delete Account"}
          </button>
        </div>
      </DeleteAccountPopup>
    </Modal>
  );
};

const ErrorMessage = styled.div`
  color: #f38688;

  margin-top: 8px;
  margin-left: 1px;

  font-size: 12px;
  font-weight: 400;
`;

const DeleteAccountPopup = styled(ModalCard)`
  h2 {
    padding: 1rem;
    font-size: 20px;
    color: #fff;
  }

  .warning-card {
    background-color: #faa81a;
    color: #fff;

    margin: 0 1rem;
    padding: 10px;
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

export default DeleteAccountPopupModal;
