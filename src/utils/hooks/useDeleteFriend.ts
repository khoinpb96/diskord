import { gql, useMutation } from "@apollo/client";

const DELETE_FRIEND_MUTATION = gql`
  mutation ($username: String) {
    deleteFriend(username: $username)
  }
`;

const useDeleteFriend = (username: string) => {
  const token = localStorage.getItem("accessToken") || "";

  return useMutation(DELETE_FRIEND_MUTATION, {
    variables: {
      username: username,
    },
    context: {
      headers: { authorization: `Bearer ${token}` },
    },
  });
};

export default useDeleteFriend;
