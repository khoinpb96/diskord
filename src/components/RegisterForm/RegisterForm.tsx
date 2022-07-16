import React, { useState } from "react";
import {
  FormInput,
  FormLabel,
  PageForm,
  PageQuestionSignup,
  StyledLink,
} from "../common";
import DotsLoading from "../DotsLoading/DotsLoading";
import { Button } from "../index";

const RegisterForm = () => {
  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("login form submitted");
  };
  const [input, setInput] = useState({ username: "", password: "" });
  const [error, setError] = useState({ username: "", password: "" });

  const handleUsernameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput((input) => ({ ...input, username: e.target.value }));
  };

  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput((input) => ({ ...input, password: e.target.value }));
  };

  return (
    <PageForm onSubmit={handleLoginSubmit}>
      <div className="header mb20">
        <h3>Create an accout</h3>
      </div>

      <div className="mb20">
        <FormLabel>Username</FormLabel>
        <FormInput />
      </div>

      <div className="mb20">
        <FormLabel>Password</FormLabel>
        <FormInput type="password" />
      </div>
      <div className="mb20">
        <FormLabel>Confirm Password</FormLabel>
        <FormInput type="password" />
      </div>

      <Button className="mb8">Register</Button>

      <StyledLink to="/login">Already have an account?</StyledLink>

      <PageQuestionSignup className="mt20">
        By registering, you agree to Diskord's{" "}
        <StyledLink to="#">Term of Service</StyledLink> and{" "}
        <StyledLink to="#">Private Policy</StyledLink>
      </PageQuestionSignup>
    </PageForm>
  );
};

export default RegisterForm;
