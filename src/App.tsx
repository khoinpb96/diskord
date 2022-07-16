import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./utils/context";
import { NotfoundPage } from "./pages";

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
