import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Backdrop from "../Backdrop/Backdrop";

import Modal from "../Modal/Modal";
import ModalCard from "../ModalCard/ModalCard";

type QuickSwitcherProps = {
  closePopupFn: (e: React.MouseEvent<HTMLElement>) => void;
};

const QuickSwitcher: React.FC<QuickSwitcherProps> = ({ closePopupFn }) => {
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Modal>
      <Backdrop
        initial={{ background: "rgba(0, 0, 0, 0)" }}
        animate={{ background: "rgba(0, 0, 0, 0.85)" }}
        exit={{ background: "rgba(0, 0, 0, 0)" }}
        transition={{ ease: "easeInOut", duration: 0.2 }}
        onClick={closePopupFn}
      />
      <StyledModalCard
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <StyledForm onSubmit={handleFormSubmit}>
          <StyledInput
            placeholder="Where would you like to go?"
            ref={inputRef}
            value={input}
            onChange={handleInputChange}
          />
          <Protip>
            <h3>Protip: </h3>
            <div>
              Using your friend username is the fastest way to search for 'em
            </div>
          </Protip>
        </StyledForm>
      </StyledModalCard>
    </Modal>
  );
};

const StyledModalCard = styled(ModalCard)`
  width: 570px;
  overflow: hidden;
  height: 365px;
  background: none;
  border-radius: 0;
  z-index: 2;
`;

const StyledForm = styled.form`
  padding: 20px 20px 0 20px;
  background: #2f3136;
  border-radius: 8px;
`;

const Protip = styled.div`
  padding: 10px 0;

  h3 {
    color: #3ba55d;
    margin-right: 3px;
    font-size: 12px;
    display: inline;
    text-transform: uppercase;
  }

  div {
    font-size: 11px;
    display: inline;
    line-height: 16px;
    color: #dcddde;
    opacity: 0.6;
  }
`;

const StyledInput = styled.input`
  padding: 0 12px;
  font-size: 20px;
  border-radius: 5px;
  border: none;
  outline: none;
  height: 70px;
  line-height: 70px;

  background-color: #202225;
  color: #dcddde;
  width: 100%;
`;

export default QuickSwitcher;
