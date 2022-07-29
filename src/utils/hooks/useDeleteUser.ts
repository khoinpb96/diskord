import { gql, useMutation } from "@apollo/client";

const EDIT_USER_MUTATION = gql`
  mutation deleteUser($password: String) {
    deleteUser(password: $password)
  }
`;

const useDeleteUser = (password: string) => {
  const token = localStorage.getItem("accessToken") || "";

  return useMutation(EDIT_USER_MUTATION, {
    variables: {
      password: password,
    },
    context: {
      headers: { authorization: `Bearer ${token}` },
    },
  });
};

export default useDeleteUser;
