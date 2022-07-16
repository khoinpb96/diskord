import { Navigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import config from "./config";
import { AuthProvider } from "./context";
import { Auth, LoginPage, Profile } from "./pages";
import NotfoundPage from "./pages/NotfoundPage/NotfoundPage";

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* <Route path="/" element={<AuthPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Auth />} /> */}
        <Route path="/" element={<Navigate to="login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<div>REGISTER</div>} />
        <Route path="*" element={<NotfoundPage />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
