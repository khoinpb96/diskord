import { Navigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import config from "./config";
import { AuthProvider } from "./context";
import { Auth, Profile } from "./pages";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Auth />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
