import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";
import LoginScreen from "./screen/LoginScreen";
import ProfilScreen from "./screen/ProfilScreen";
import MainScreen from "./screen/MainScreen";
import { store } from "./redux/store";
import { Provider } from "react-redux";
function App() {
  const userToken = sessionStorage?.getItem("user")?.token
    ? sessionStorage?.getItem("user")?.token
    : false;
    console.log("userToken",sessionStorage?.getItem("user"))
  const PrivateRoute = ({ element: Element, ...rest }) => {
    return userToken ? <Element {...rest} /> : <Navigate to="/login" />;
  };

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route
            path="/profil"
            element={<PrivateRoute element={ProfilScreen} />}
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
