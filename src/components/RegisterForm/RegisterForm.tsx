import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useRegister } from "../../utils/hooks";
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

const RegisterForm = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [registerFunc, { loading, error }] = useRegister({
    username: input.username,
    password: input.password,
  });

  const whitespaceRegex = /\s/g;
  const passwordsAreMatched = input.password === input.confirmPassword;

  const isValidInput =
    input.username.length >= 6 &&
    input.password.length >= 6 &&
    !input.password.match(whitespaceRegex) &&
    !input.confirmPassword.match(whitespaceRegex) &&
    passwordsAreMatched;

  const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!passwordsAreMatched) {
      console.log("passwords are not matched");
    }

    try {
      const { data } = await registerFunc();
      const token = data.register.token;
      localStorage.setItem("accessToken", token);
      navigate("/channels");
    } catch (error: any) {
      console.log(error.message);
      return;
    }
  };

  const handleUsernameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput((input) => ({ ...input, username: e.target.value }));
  };

  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput((input) => ({ ...input, password: e.target.value }));
  };

  const handleConfirmPasswordInput = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInput((input) => ({ ...input, confirmPassword: e.target.value }));
  };

  return (
    <PageForm onSubmit={handleLoginSubmit}>
      <div className="header mb20">
        <h3>Create an accout</h3>
      </div>

      <div className="mb20">
        <FormLabel isInvalid={error?.message === "User existed"}>
          Username
          {error?.message === "User existed" && (
            <ErrorMessage> - {error?.message}</ErrorMessage>
          )}
        </FormLabel>
        <FormInput value={input.username} onChange={handleUsernameInput} />
      </div>

      <div className="mb20">
        <FormLabel>Password</FormLabel>
        <FormInput
          value={input.password}
          type="password"
          onChange={handlePasswordInput}
        />
      </div>
      <div className="mb20">
        <FormLabel>Confirm Password</FormLabel>
        <FormInput
          value={input.confirmPassword}
          type="password"
          onChange={handleConfirmPasswordInput}
        />
      </div>

      <Button disabled={!isValidInput} className="mb8">
        {loading ? <DotsLoading /> : "Register"}
      </Button>

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
