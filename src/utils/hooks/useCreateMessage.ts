import { gql, useMutation } from "@apollo/client";

const CREATE_MESSAGE_MUTATION = gql`
  mutation createMessage($channelId: String, $message: String) {
    createMessage(channelId: $channelId, message: $message)
  }
`;

const useCreateMessage = (channelId: string, message: string) => {
  const token = localStorage.getItem("accessToken") || "";

  return useMutation(CREATE_MESSAGE_MUTATION, {
    variables: {
      channelId: channelId,
      message: message,
    },
    context: {
      headers: { authorization: `Bearer ${token}` },
    },
  });
};

export default useCreateMessage;
