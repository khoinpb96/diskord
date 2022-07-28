import { gql, useMutation } from "@apollo/client";

const EDIT_USER_MUTATION = gql`
  mutation EditUser($user: EditUserInput) {
    editUser(user: $user)
  }
`;

const useEditUser = (user: { phoneNumber: string; email: string }) => {
  const token = localStorage.getItem("accessToken") || "";

  return useMutation(EDIT_USER_MUTATION, {
    variables: {
      user: user,
    },
    context: {
      headers: { authorization: `Bearer ${token}` },
    },
  });
};

export default useEditUser;
