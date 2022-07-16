import React from "react";
import { PageForm, PageQuestionSignup, StyledLink } from "../common";
import { Button, FormInput } from "../index";

const LoginForm = () => {
  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("login form submitted");
  };

  return (
    <PageForm onSubmit={handleLoginSubmit}>
      <div className="header mb20">
        <h3>Welcome back!</h3>
        <p className="subtitle">We're so excited to see you again!</p>
      </div>

      <FormInput label="Email or phone number" className="mb20" />
      <FormInput label="Password" type="password" />

      <div className="mb20 mt10">
        <StyledLink to="#">Forgot your password?</StyledLink>
      </div>

      <Button>Login</Button>

      <PageQuestionSignup>
        Need an account?{" "}
        <StyledLink to="/register" onClick={() => console.log("register")}>
          Register
        </StyledLink>
      </PageQuestionSignup>
    </PageForm>
  );
};

export default LoginForm;
