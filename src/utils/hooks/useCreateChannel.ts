import { gql, useMutation } from "@apollo/client";

const CREATE_CHANNEL_MUTATION = gql`
  mutation createChannel($friendId: String) {
    createChannel(friendId: $friendId)
  }
`;

const useCreateChannel = (friendId: string) => {
  const token = localStorage.getItem("accessToken") || "";

  return useMutation(CREATE_CHANNEL_MUTATION, {
    variables: {
      friendId: friendId,
    },
    context: {
      headers: { authorization: `Bearer ${token}` },
    },
  });
};

export default useCreateChannel;
