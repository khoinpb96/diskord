import styled from "styled-components";

type FormInputProps = {
  label?: string;
  type?: string;
  className?: string;
};

const FormInput: React.FC<FormInputProps> = ({
  label,
  type = "text",
  className,
}) => {
  return (
    <div className={className}>
      <Label>{label}</Label>
      <Input type={type} />
    </div>
  );
};

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

export default FormInput;
