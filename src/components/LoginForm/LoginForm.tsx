import React, { useState } from "react";
import styled from "styled-components";
import {
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

  const isValidInput = input.username.length >= 6 && input.password.length >= 6;

  const handleUsernameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput((input) => ({ ...input, username: e.target.value }));
  };

  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput((input) => ({ ...input, password: e.target.value }));
  };

  const handleFormSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("form submitted");
  };

  return (
    <PageForm onSubmit={handleFormSubmit}>
      <div className="header mb20">
        <h3>Welcome back!</h3>
        <p className="subtitle">We're so excited to see you again!</p>
      </div>

      <div className="mb20">
        <FormLabel>Username</FormLabel>
        <FormInput value={input.username} onChange={handleUsernameInput} />
      </div>

      <div>
        <FormLabel>Password</FormLabel>
        <FormInput
          type="password"
          value={input.password}
          onChange={handlePasswordInput}
        />
      </div>

      <div className="mb20 mt10">
        <StyledLink to="#">Forgot your password?</StyledLink>
      </div>

      <Button disabled={!isValidInput}>Login</Button>

      <PageQuestionSignup>
        Need an account? <StyledLink to="/register">Register</StyledLink>
      </PageQuestionSignup>
    </PageForm>
  );
};

export default LoginForm;
