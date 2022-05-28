import styled from "styled-components";
import { SelectionProps } from "../types";

export const DropdownContainer = styled.div`
  position: absolute;
  width: 188px;
  border: 1px solid #e0e0e0;
  box-shadow: 0px 2px 4px rgb(0 0 0 / 5%);
  border-radius: 12px;
  padding: 14px 12px;
  right: 18px;
  top: 100%;
  background: white;
  z-index: 5;
`;

export const Selection = styled.div<SelectionProps>`
  border-radius: 8px;
  padding: 12px 14px;
  display: flex;
  gap: 12px;
  align-items: center;
  cursor: pointer;
  transition: 200ms;

  .name {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: -0.035em;
    color: ${(props) => (props.logout ? "#EB5757" : "")};
  }

  .icon {
    color: ${(props) => (props.logout ? "#EB5757" : "")};
  }

  &:hover {
    background: #f2f2f2;
  }
`;
