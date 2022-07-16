import React from "react";
import { PageForm, PageQuestionSignup, StyledLink } from "../common";
import { Button, FormInput } from "../index";

const RegisterForm = () => {
  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("login form submitted");
  };

  return (
    <PageForm onSubmit={handleLoginSubmit}>
      <div className="header mb20">
        <h3>Create an accout</h3>
      </div>

      <FormInput label="Email" className="mb20" />
      <FormInput label="Password" type="password" className="mb20" />
      <FormInput
        label="Confirm you password"
        type="password"
        className="mb20"
      />

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
