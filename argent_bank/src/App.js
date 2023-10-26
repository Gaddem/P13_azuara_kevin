import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./screen/LoginScreen";
import ProfilScreen from "./screen/ProfilScreen";
import MainScreen from "./screen/MainScreen";
import { store } from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<MainScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/profil" element={<ProfilScreen />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
