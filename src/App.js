import { Routes, BrowserRouter, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Posts from "./pages/Posts";
import PostDetails from "./pages/PostDetails";
import Header from "./components/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Protected from "./components/Protected";
import Dashboard from "./pages/Dashboard";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function App() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Posts />} />
        <Route
          path="/posts/:id"
          element={isLoggedIn ? <PostDetails /> : <Navigate to="/login" />}
        />
        <Route
          path="/user/dashboard"
          element={
            <Protected>
              <Dashboard />
            </Protected>
          }
        />
      </Routes>
      <ToastContainer theme="colored" />
    </BrowserRouter>
  );
}

export default App;
