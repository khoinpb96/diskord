import { gql, useMutation } from "@apollo/client";

const LOGIN_MUTATION = gql`
  mutation Login($user: UserInput) {
    login(user: $user) {
      accessToken
    }
  }
`;

const useLogin = (user: { username: string; password: string }) => {
  return useMutation(LOGIN_MUTATION, {
    variables: {
      user: user,
    },
  });
};

export default useLogin;
