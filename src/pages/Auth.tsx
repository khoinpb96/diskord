import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/devchallenges-logo.svg";
import { Main, Socials } from "../components";
import {
  Button,
  ErrorMessage,
  FormContainer,
  Input,
  InputIcon,
  Label,
  Logo,
  NPLink,
  P,
  Title,
} from "../styles";
import { useAuth, useInput } from "../hooks";
import { AuthAPI } from "../api";

export default function Auth() {
  const [isLoginStage, setIsLoginStage] = useState(true);
  const { input, setInput, error, initInput, setError } = useInput();
  const navigate = useNavigate();
  const { login } = useAuth();

  const changeStageHandler = () => {
    setIsLoginStage((prev) => !prev);
    setInput(initInput);
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const sendData = { username: input.username, password: input.password };

    //REGISTER
    if (!isLoginStage) {
      try {
        const { data } = await AuthAPI.post("/register", sendData);
        if (data.code >= 400) {
          return setError(data.message);
        }

        setIsLoginStage(true);
        setInput(initInput);
      } catch (error) {
        console.log(error);
      }
    }

    //LOGIN
    try {
      const { data } = await AuthAPI.post("/login", sendData);
      if (data.code >= 400) {
        return setError(data.message);
      }

      login(data.data);
      localStorage.setItem("token", data.token);
      navigate("/profile", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Main>
      <FormContainer onSubmit={submitHandler}>
        <Link to="/">
          <Logo src={logo} />
        </Link>
        <Title mt="22" mb="22" fontSize="18">
          {isLoginStage ? "Login" : "Register"}
        </Title>
        <Label>
          <Input
            placeholder="Email"
            type="text"
            value={input.username}
            onChange={(e) => {
              setInput((prev) => ({
                ...prev,
                username: e.target.value,
                isTouched: true,
              }));
            }}
          />
          <InputIcon className="fa-solid fa-envelope" />
        </Label>
        <Label>
          <Input
            placeholder="Password"
            type="password"
            value={input.password}
            onChange={(e) => {
              setInput((prev) => ({
                ...prev,
                password: e.target.value,
                isTouched: true,
              }));
            }}
          />
          <InputIcon className="fa-solid fa-lock" />
        </Label>

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <Button type="submit" mt="8" mb="32">
          {isLoginStage ? "Login" : "Register"}
        </Button>
        <P textAlign="center">or continue with these social profile</P>
        <Socials />
        <P textAlign="center">
          Don't have an account yet?{" "}
          <NPLink onClick={changeStageHandler}>
            {isLoginStage ? "Register" : "Login"}
          </NPLink>
        </P>
      </FormContainer>
    </Main>
  );
}
