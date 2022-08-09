import { gql, useQuery } from "@apollo/client";

const GET_USER_QUERY = gql`
  query {
    user {
      id
      username
      phoneNumber
      email
      friends {
        id
        username
      }
      channels {
        id
        participants {
          id
          username
        }
      }
    }
  }
`;

const useGetUser = () => {
  const token = localStorage.getItem("accessToken") || "";

  return useQuery(GET_USER_QUERY, {
    context: {
      headers: { authorization: `Bearer ${token}` },
    },
  });
};

export default useGetUser;
