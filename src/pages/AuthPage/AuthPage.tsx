import axios from "axios";
import React, { useEffect, useId, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthAPI } from "../../api";
import Button from "../../components/Button/Button";
import FormInput from "../../components/FormInput/FormInput";
import Spinner from "../../components/Spinner";
import config from "../../utils/config";
import { useInput } from "../../utils/hooks";
import { showUp } from "../../styles/mixin";

export default function AuthPage() {
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

  // const submitHandler = async (e: React.LoginPageFormEvent<HTMLLoginPageFormElement>) => {
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

  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("login form submitted");
  };

  return (
    <LoginPageWrapper>
      <LoginPageForm onSubmit={handleLoginSubmit}>
        <div className="header mb20">
          <h3>Welcome back!</h3>
          <p className="subtitle">We're so excited to see you again!</p>
        </div>

        <FormInput label="Email or phone number" className="mb20" />
        <FormInput label="Password" type="password" />

        <div className="mb20 mt10">
          <Link>Forgot your password?</Link>
        </div>

        <Button>Login</Button>

        <LoginPageQuestionSignup>
          Need an account? <Link>Register</Link>
        </LoginPageQuestionSignup>
      </LoginPageForm>
    </LoginPageWrapper>
  );
}

const LoginPageForm = styled.form`
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

const LoginPageQuestionSignup = styled.div`
  color: #72767d;
  margin-top: 4px;
`;

const LoginPageWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  background: url("wallpaper.png");
  background-size: cover;

  font-size: 12px;
`;

const Link = styled.i`
  color: #ffd400;
  font-style: normal;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
