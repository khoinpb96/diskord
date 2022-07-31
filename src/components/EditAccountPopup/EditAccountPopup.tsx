import React, { useState } from "react";
import styled from "styled-components";
import closeIconUrl from "../../assets/close-icon.svg";
import { emailChecker, phoneNumberChecker } from "../../utils";
import { useEditUser } from "../../utils/hooks";
import DotsLoading from "../DotsLoading/DotsLoading";
import Modal from "../Modal/Modal";
import ModalCard from "../ModalCard/ModalCard";

const EditAccountPopup: React.FC<any> = ({ data, closePopupFn, refetch }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [phoneNum, setPhoneNum] = useState("");
  const [phoneNumError, setPhoneNumError] = useState(false);

  const [editUserFn, { loading: editUserLoading }] = useEditUser({
    email: email || data?.email,
    phoneNumber: phoneNum || data?.phoneNumber,
  });

  const handleEmailInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPhoneNum(e.target.value);
  };

  const handleEditUserFormSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const isValidEmail = emailChecker(email);
    const isValidPhoneNumer = phoneNumberChecker(phoneNum);

    setEmailError(!isValidEmail);
    setPhoneNumError(!isValidPhoneNumer);

    if (isValidEmail && isValidPhoneNumer) {
      const res = await editUserFn();
      res.data?.editUser && (await refetch());

      setEmail("");
      setPhoneNum("");
      closePopupFn();
    }
  };

  return (
    <Modal>
      <Popup>
        <form onSubmit={handleEditUserFormSubmit}>
          <h2>
            Edit Account
            <img src={closeIconUrl} onClick={closePopupFn} />
          </h2>

          <div className="inputs">
            <h5 className={emailError ? "error" : ""}>
              Email{" "}
              {emailError && (
                <div className="error-message">- Invalid email</div>
              )}
            </h5>
            <input value={email} onChange={handleEmailInputChange} />

            <h5 className={phoneNumError ? "error" : ""}>
              Phone Number{" "}
              {phoneNumError && (
                <div className="error-message">- Invalid phone number</div>
              )}
            </h5>
            <input value={phoneNum} onChange={handlePhoneNumInputChange} />
          </div>

          <div className="footer">
            <button type="button" className="cancel-btn" onClick={closePopupFn}>
              Cancel
            </button>
            <button type="submit" className="confirm-btn">
              {editUserLoading ? <DotsLoading /> : "Confirm"}
            </button>
          </div>
        </form>
      </Popup>
    </Modal>
  );
};

const Popup = styled(ModalCard)`
  h2 {
    padding: 1rem;
    font-size: 20px;
    color: #fff;

    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      cursor: pointer;
    }
  }

  .warning-card {
    padding: 10px;
    margin: 0 1rem;

    color: #fff;
    background-color: #faa81a;
    border-radius: 5px;

    font-size: 14px;
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

      margin-bottom: 1rem;
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

export default EditAccountPopup;
