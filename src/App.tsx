import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context";
import NotfoundPage from "./pages/NotfoundPage/NotfoundPage";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="*" element={<NotfoundPage />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
