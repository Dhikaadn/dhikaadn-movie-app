//Import library and others
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProfile, logout } from "../redux/actions/auth";
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile} from "react-icons/cg";
import "../App.css";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn, token, user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isLoggedIn && token) {
      dispatch(getProfile());
    }
  }, [dispatch, isLoggedIn, token]);

  return (
    <nav className="navbar-top">
      <h1 className="text-title">Movielist</h1>
      {/* Field of search */}
      <div className="container-search">
        <input
          placeholder="Cari film"
          className="Movie-search"
        />
        <AiOutlineSearch className="mt-2 me-3" style={{ fontSize: "35px" }} />
      </div>
      {/* Conditional of button login, register, and logout */}
      {isLoggedIn ? (
        <div className="btn-container">
            <div className="profil-container">
              <CgProfile className="mt-3 me-2" style={{ fontSize: "30px" }}/>
              <h2 className="me-4 mt-2">{user?.name}</h2>
            </div>
            <button className="bt-login" onClick={() => dispatch(logout(navigate))}>
              Logout
            </button>
        </div>
        ) : (
        <div className="btn-container">
          <Link to="/login">
            <button className="bt-login">Login</button>
          </Link>
          <Link to="/register">
            <button className="bt-register">Register</button>
          </Link>
        </div>
        )}
    </nav>
  );
}

export default Header;
