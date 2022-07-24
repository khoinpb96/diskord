const config = {
  API_URI: import.meta.env.PROD
    ? "https://ms-auth-khoinpb96.herokuapp.com/"
    : "http://localhost:5000/",
  GITHUB: {
    CLIENT_ID: import.meta.env.VITE_GITHUB_CLIENT_ID,
  },
};

export default config;
