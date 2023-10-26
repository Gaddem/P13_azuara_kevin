import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./screen/LoginScreen";
import ProfilScreen from "./screen/ProfilScreen";
import MainScreen from "./screen/MainScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<MainScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/profil" element={<ProfilScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
