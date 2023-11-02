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

  const NOT_AUTH_ROUTES = [
    { path: "/", component: <MainScreen /> },
    { path: "/login", component: <LoginScreen /> },
    { path: "/*", component: <Navigate to="/" /> },
  ];

  const AUTH_ROUTES = [
    { path: "/profil", component: <ProfilScreen /> },
    { path: "/*", component: <Navigate to="/profil" /> },
  ];

  return (
    <Provider store={store}>
      <ToastContainer limit={1} />
      <BrowserRouter>
        <Routes>
          {/*Routes si l'utilisateur n'est pas connecté*/}
          {!token &&
            NOT_AUTH_ROUTES.map((route, idx) => (
              <Route path={route.path} element={route.component} key={idx} />
            ))}
          {/*Routes si l'utilisateur est connecté*/}
          {token &&
            AUTH_ROUTES.map((route, idx) => (
              <Route
                path={route.path}
                element={<AuthProtected>{route.component}</AuthProtected>}
                key={idx}
              />
            ))}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
