import { Route, Routes, useLocation } from "react-router-dom";
import { LoginForm, RegisterForm } from "./components";
import { AuthPage, NotfoundPage, ChannelsPage } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />}>
        <Route path="login" element={<LoginForm />} />
        <Route path="register" element={<RegisterForm />} />
      </Route>

      <Route path="/channels" element={<ChannelsPage />}></Route>

      <Route path="*" element={<NotfoundPage />} />
    </Routes>
  );
}

export default App;
