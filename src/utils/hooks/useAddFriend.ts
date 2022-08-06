import { gql, useMutation } from "@apollo/client";

const ADD_FRIEND_MUTATION = gql`
  mutation addFriend($username: String) {
    addFriend(username: $username)
  }
`;

const useAddFriend = (username: string) => {
  const token = localStorage.getItem("accessToken") || "";

  return useMutation(ADD_FRIEND_MUTATION, {
    variables: {
      username: username,
    },
    context: {
      headers: { authorization: `Bearer ${token}` },
    },
  });
};

export default useAddFriend;
