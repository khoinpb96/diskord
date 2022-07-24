import { useState } from "react";
import styled from "styled-components";

type FormInputProps = {
  label: string;
  type?: string;
  className?: string;
};

const CustomFormInput: React.FC<FormInputProps> = ({
  label,
  type = "text",
  className,
}) => {
  const [input, setInput] = useState("");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <InputContainer className={className}>
      <Label>{label}</Label>
      <Input type={type} value={input} onChange={handleOnChange} />
    </InputContainer>
  );
};

const InputContainer = styled.div`
  margin: 20px 0;
`;

const Label = styled.h5`
  margin-bottom: 8px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
  text-transform: uppercase;

  color: #b9bbbe;
`;

const Input = styled.input`
  font-weight: 400;
  text-rendering: optimizeLegibility;
  outline: 0;

  width: 100%;
  border-radius: 3px;
  padding: 10px;

  height: 40px;
  border: none;

  color: #dcddde;
  background-color: #202225;
`;

export default CustomFormInput;
