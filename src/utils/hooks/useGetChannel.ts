import { gql, useQuery } from "@apollo/client";

const GET_CHANNEL_QUERY = gql`
  query channel($channelId: String) {
    channel(channelId: $channelId) {
      id
      participants {
        id
        username
      }
      messages {
        text
        username
        createAt
      }
    }
  }
`;

const useGetChannel = (channelId: string) => {
  const token = localStorage.getItem("accessToken") || "";

  return useQuery(GET_CHANNEL_QUERY, {
    variables: {
      channelId: channelId,
    },
    context: {
      headers: { authorization: `Bearer ${token}` },
    },
  });
};

export default useGetChannel;
