import { Route, Routes } from "react-router-dom";
import config from "./config";
import { AuthProvider } from "./context";
import { Auth, Profile } from "./pages";

function App() {
  console.log(config);
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
