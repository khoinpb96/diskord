const config = {
  BE_URI: import.meta.env.PROD
    ? "https://diskord-graphql-server.herokuapp.com/graphql"
    : "http://localhost:5000/graphql",
  GITHUB: {
    CLIENT_ID: import.meta.env.VITE_GITHUB_CLIENT_ID,
  },
};

export default config;
