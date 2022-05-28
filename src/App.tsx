import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context";
import { Auth, Profile } from "./pages";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
