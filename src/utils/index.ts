export const getUserDataFromLocalStorage = () => {
  const initVal = { id: "", accessToken: "" };
  const { id, accessToken } =
    JSON.parse(localStorage.getItem("userData")!) || initVal;

  return { id, accessToken };
};
