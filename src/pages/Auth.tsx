import axios from "axios";
import React, { useEffect, useId, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthAPI } from "../api";
import FormInput from "../components/FormInput/FormInput";
import Spinner from "../components/Spinner";
import config from "../config";
import { useInput } from "../hooks";

export default function Auth() {
  // const [isLoginStage, setIsLoginStage] = useState(true);
  // const [isLoading, setIsLoading] = useState(false);

  // const { input, setInput, error, initInput, setError } = useInput();
  // const navigate = useNavigate();
  // const location = useLocation();

  // useEffect(() => {
  //   (async () => {
  //     if (localStorage.getItem("userData")) {
  //       return navigate("/profile");
  //     }

  //     if (location.pathname === "/oauth") {
  //       try {
  //         setIsLoading(true);
  //         const { data } = await axios.post(`${config.API_URI}oauth/github`, {
  //           code: location.search.split("=")[1],
  //         });

  //         const sendData = {
  //           username: data.login,
  //           oauthType: "github",
  //           oauthId: data.id,
  //           photoUrl: data.avatar_url,
  //           bio: data.bio,
  //           email: data.email,
  //           fullName: data.name,
  //         };

  //         const result = await AuthAPI.post("/register", sendData);
  //         localStorage.setItem("userData", JSON.stringify(result.data));
  //         setIsLoading(false);
  //         navigate("/profile", { replace: true });
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     }
  //   })();
  // }, []);

  // const changeStageHandler = () => {
  //   setIsLoginStage((prev) => !prev);
  //   setInput(initInput);
  // };

  // const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const sendData = { username: input.username, password: input.password };
  //   setIsLoading(true);

  //   //REGISTER;
  //   if (!isLoginStage) {
  //     try {
  //       await AuthAPI.post("/register", sendData);
  //       setIsLoginStage(true);
  //       setInput(initInput);
  //       return;
  //     } catch (err: any) {
  //       setIsLoading(false);
  //       return setError(err.response.data.message);
  //     }
  //   }

  //   //LOGIN
  //   try {
  //     const { data } = await AuthAPI.post("/login", sendData);
  //     localStorage.setItem("userData", JSON.stringify(data));
  //     navigate("/profile", { replace: true });
  //   } catch (err: any) {
  //     setIsLoading(false);
  //     return setError(err.response.data.message);
  //   }
  // };

  return (
    <Wrapper>
      <LoginForm>
        <div className="header">
          <h3>Welcome back!</h3>
          <p className="subtitle">We're so excited to see you again!</p>
        </div>

        <FormInput label="Email or phone number" className="mb20" />
        <FormInput label="Password" type="password" />

        <p className="forgot-password">
          <StyledLink to="#">Forgot your password?</StyledLink>
        </p>

        <Button>Login</Button>

        <p className="question-signup">
          Need an account? <StyledLink to="#">Register</StyledLink>
        </p>
      </LoginForm>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  background: url("wallpaper.png");
  background-size: cover;
`;

const LoginForm = styled.form`
  padding: 32px;
  background-color: #36393f;
  color: white;

  width: 100%;
  max-width: 480px;

  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 20%);
  border-radius: 4px;

  .header {
    margin-bottom: 20px;

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

  .forgot-password {
    margin-bottom: 20px;
  }

  p {
    font-size: 14px;
  }

  .question-signup {
    color: #72767d;
    margin-top: 4px;
  }
`;

const StyledLink = styled(Link)`
  color: #ffd400;
  font-style: normal;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Button = styled.button`
  background-color: #ffd400;
  color: #36393f;
  width: 100%;
  border: none;
  padding: 10px 0;
  cursor: pointer;

  transition: background-color 0.17s ease, color 0.17s ease;
  border-radius: 4px;

  font-weight: bold;

  &:hover {
    background-color: #ffe566;
  }
`;
