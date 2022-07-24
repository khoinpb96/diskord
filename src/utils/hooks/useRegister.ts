import { gql, useMutation } from "@apollo/client";

const REGISTER_MUTATION = gql`
  mutation Register($user: UserInput) {
    register(user: $user) {
      accessToken
    }
  }
`;

const useRegister = (user: { username: string; password: string }) => {
  return useMutation(REGISTER_MUTATION, {
    variables: {
      user: user,
    },
  });
};

export default useRegister;
