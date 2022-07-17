import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useLogin from "../../utils/hooks/useLogin";
import {
  ErrorMessage,
  FormInput,
  FormLabel,
  PageForm,
  PageQuestionSignup,
  StyledLink,
} from "../common";
import DotsLoading from "../DotsLoading/DotsLoading";
import { Button } from "../index";

const LoginForm = () => {
  const [input, setInput] = useState({ username: "", password: "" });
  const [loginFunc, { loading, error }] = useLogin(input);

  const navigate = useNavigate();
  const isValidInput =
    input.username.trim().length >= 6 && input.password.trim().length >= 6;

  const handleUsernameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput((input) => ({ ...input, username: e.target.value }));
  };

  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput((input) => ({ ...input, password: e.target.value }));
  };

  const handleFormSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const { data } = await loginFunc();
      const token = data.login.accessToken;
      localStorage.setItem("accessToken", token);
      navigate("/channels");
    } catch (error: any) {
      return console.log(error.message);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      navigate("/channels");
    }
  }, []);

  return (
    <PageForm onSubmit={handleFormSubmit}>
      <div className="header mb20">
        <h3>Welcome back!</h3>
        <p className="subtitle">We're so excited to see you again!</p>
      </div>

      <div className="mb20">
        <FormLabel isInvalid={error?.message == "Wrong username"}>
          Username
          {error?.message == "Wrong username" && (
            <ErrorMessage> - {error?.message}</ErrorMessage>
          )}
        </FormLabel>
        <FormInput value={input.username} onChange={handleUsernameInput} />
      </div>

      <div>
        <FormLabel isInvalid={error?.message == "Wrong password"}>
          Password
          {error?.message == "Wrong password" && (
            <ErrorMessage> - {error?.message}</ErrorMessage>
          )}
        </FormLabel>
        <FormInput
          type="password"
          value={input.password}
          onChange={handlePasswordInput}
        />
      </div>

      <div className="mb20 mt10">
        <StyledLink to="#">Forgot your password?</StyledLink>
      </div>

      <Button disabled={!isValidInput}>
        {loading ? <DotsLoading /> : "Login"}
      </Button>

      <PageQuestionSignup>
        Need an account? <StyledLink to="/register">Register</StyledLink>
      </PageQuestionSignup>
    </PageForm>
  );
};

export default LoginForm;
