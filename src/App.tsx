import { Route, Routes } from "react-router-dom";
import { LoginForm, RegisterForm } from "./components";
import { AuthPage, NotfoundPage } from "./pages";
import { AuthProvider } from "./utils/context";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<AuthPage />}>
          <Route path="login" element={<LoginForm />} />
          <Route path="register" element={<RegisterForm />} />
        </Route>
        <Route path="*" element={<NotfoundPage />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
