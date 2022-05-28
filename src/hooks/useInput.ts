import { useEffect, useState } from "react";

type RegisterInput = {
  username: string;
  password: string;
  isTouched: boolean;
};

function useInput(time: number = 300) {
  const initInput = {
    username: "",
    password: "",
    isTouched: false,
  };

  const [input, setInput] = useState<RegisterInput>(initInput);

  const [error, setError] = useState("");

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (
        input.isTouched &&
        (input.username.trim().length <= 6 || input.password.trim().length <= 6)
      ) {
        setError("Inputs must be more than 5 characters");
      } else {
        setError("");
      }
    }, time);

    return () => clearTimeout(debounce);
  }, [input]);

  return { input, setInput, error, initInput, setError };
}

export default useInput;
