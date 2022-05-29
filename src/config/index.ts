const config = {
  API_URI: import.meta.env.PROD
    ? "https://ms-auth-khoinpb96.herokuapp.com/"
    : "http://localhost:5000/",
};

export default config;
