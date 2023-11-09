import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginScreen from "./screen/LoginScreen";
import ProfilScreen from "./screen/ProfilScreen";
import MainScreen from "./screen/MainScreen";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { AuthProtected } from "./api/AuthProtectedConnect";
import { useProfile } from "./hooks/useProfile";

function App() {
  const { token } = useProfile();

  return (
    <Provider store={store}>
      <ToastContainer limit={1} />
      <BrowserRouter>
        <Routes>
          {/*Routes si l'utilisateur n'est pas connecté*/}
          {!token && (
            <>
              {/* Route pour la page principale (MainScreen)*/}
              <Route path="/" element={<MainScreen />} />
              {/* Route pour la page login (MainScreen)  */}
              <Route path="/login" element={<LoginScreen />} />
              {/* Redirection vers le MainScreen pour toutes les autres URL */}
              <Route path="/*" element={<Navigate to="/" />} />
            </>
          )}

          <>
            {/* Route pour la page de profil accessible seulement si l'utilisateur est connecté */}
            <Route
              path="/profil"
              element={
                <AuthProtected>
                  <ProfilScreen />
                </AuthProtected>
              }
            />
            {/* Redirection vers le ProfilScreen pour toutes les autres URL si l'utilisateur est connecté */}
            <Route
              path="/*"
              element={
                <AuthProtected>
                  <Navigate to="/profil" />
                </AuthProtected>
              }
            />
          </>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
