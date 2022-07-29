import { gql, useMutation, useQuery } from "@apollo/client";

const GET_USER_QUERY = gql`
  query User {
    user {
      username
      phoneNumber
      email
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
