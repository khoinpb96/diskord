export const getUserDataFromLocalStorage = () => {
  const initVal = { id: "", accessToken: "" };
  const { id, accessToken } =
    JSON.parse(localStorage.getItem("userData")!) || initVal;

  return { id, accessToken };
};

export const emailChecker = (email: string) => {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  return regex.test(email);
};

export const phoneNumberChecker = (phoneNumber: string) => {
  const regex = /0(3|5|7|8|9)+(\d{8})/;

  return phoneNumber.length === 10 && regex.test(phoneNumber);
};
