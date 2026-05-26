import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Loading from "./pages/Loading";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";

function App() {

  const token = localStorage.getItem("token");

  return (

    <BrowserRouter>

      <Routes>

        {/* Loading Page */}
        <Route
          path="/"
          element={<Loading />}
        />

        {/* Landing */}
        <Route
          path="/landing"
          element={<Landing />}
        />

        {/* Register */}
        <Route
          path="/register"
          element={<Register />}
        />

        {/* Login */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* Protected Dashboard */}
        <Route
          path="/home"
          element={
            token
              ? <Home />
              : <Navigate to="/login" />
          }
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;