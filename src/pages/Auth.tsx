import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthAPI } from "../api";
import logo from "../assets/devchallenges-logo.svg";
import { Main, Socials } from "../components";
import Spinner from "../components/Spinner";
import config from "../config";
import { useInput } from "../hooks";
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

export default function Auth() {
  const [isLoginStage, setIsLoginStage] = useState(true);
  const { input, setInput, error, initInput, setError } = useInput();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    (async () => {
      if (localStorage.getItem("userData")) {
        return navigate("/profile");
      }

      if (location.pathname === "/oauth") {
        try {
          setIsLoading(true);
          const { data } = await axios.post(`${config.API_URI}oauth/github`, {
            code: location.search.split("=")[1],
          });

          const sendData = {
            username: data.login,
            oauthType: "github",
            oauthId: data.id,
            photoUrl: data.avatar_url,
            bio: data.bio,
            email: data.email,
            fullName: data.name,
          };

          const result = await AuthAPI.post("/register", sendData);
          localStorage.setItem("userData", JSON.stringify(result.data));
          setIsLoading(false);
          navigate("/profile", { replace: true });
        } catch (error) {
          console.log(error);
        }
      }
    })();
  }, []);

  const changeStageHandler = () => {
    setIsLoginStage((prev) => !prev);
    setInput(initInput);
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const sendData = { username: input.username, password: input.password };
    setIsLoading(true);

    //REGISTER;
    if (!isLoginStage) {
      try {
        await AuthAPI.post("/register", sendData);
        setIsLoginStage(true);
        setInput(initInput);
        return;
      } catch (err: any) {
        setIsLoading(false);
        return setError(err.response.data.message);
      }
    }

    //LOGIN
    try {
      const { data } = await AuthAPI.post("/login", sendData);
      localStorage.setItem("userData", JSON.stringify(data));
      navigate("/profile", { replace: true });
    } catch (err: any) {
      setIsLoading(false);
      return setError(err.response.data.message);
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
          {isLoading ? <Spinner /> : isLoginStage ? "Login" : "Register"}
        </Button>
        <P textAlign="center">or continue with these social profile</P>
        <Socials setIsLoading={setIsLoading} />
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
