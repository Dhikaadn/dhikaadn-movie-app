import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/actions/auth";
import google_img from "../img/google.png";
import facebook_img from "../img/facebook.png";
import github_img from "../img/github.png";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import "../App.css"

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Login with google
  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };
  //Login with github
  const github = () => {
    window.open("http://localhost:5000/auth/github", "_self");
  };
  //Login with facebook
  const facebook = () => {
    window.open("http://localhost:5000/auth/facebook", "_self");
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = { email, password };

    dispatch(login(data, navigate));
  };

  return (
    <div className="Login">
      <div className="cart-login">
        {/* Login with JWT */}
        <form className="form-login" onSubmit={onSubmit}>
          <h2 className="login-text">Log in to your account</h2>
          <label className="login-text">Email</label>
          <div className="container-input">
            <input
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="input-field"
            />
            <AiOutlineMail className="me-2" style={{ fontSize: "25px" }} />
          </div>
          <label className="login-text">Password</label>
          <div className="container-input">
            <input
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="input-field"
            />
            <AiFillEyeInvisible className="me-2" style={{ fontSize: "25px" }} />
          </div>
          {/* {error && <div>{error}</div>} */}
          <button className="bt-login-submit">Login</button>
        </form>
        <div className="or">
          <p>Or</p>
          <p>Login with</p>
        </div>
        <div className="cart-social">
          {/* Button of google */}
          <div onClick={google}>
            <img src={google_img} />
          </div>
          {/* Button of facebook */}
          <div onClick={facebook}>
            <img src={facebook_img} />
          </div>
          {/* Button of github */}
          <div onClick={github}>
            <img src={github_img} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
