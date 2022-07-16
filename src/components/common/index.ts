import { Link } from "react-router-dom";
import styled from "styled-components";
import { showUp } from "../../styles/mixin";

const StyledLink = styled(Link)`
  color: #00aff4;
  font-style: normal;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const PageForm = styled.form`
  padding: 32px;
  background-color: #36393f;
  color: white;

  width: 100%;
  max-width: 480px;

  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 20%);
  border-radius: 4px;

  ${showUp()}

  .mb20 {
    margin-bottom: 20px;
  }

  .mt20 {
    margin-top: 20px;
  }

  .mb8 {
    margin-bottom: 8px;
  }

  .mt10 {
    margin-top: 10px;
  }

  .header {
    text-align: center;

    h3 {
      font-weight: 600;
      font-size: 25px;
      line-height: 30px;
      margin-bottom: 8px;
    }

    .subtitle {
      font-size: 16px;
      line-height: 20px;
      font-weight: 400;
      color: #b9bbbe;
    }
  }
`;

const PageQuestionSignup = styled.div`
  color: #72767d;
  margin-top: 4px;
`;

export { StyledLink, PageForm, PageQuestionSignup };