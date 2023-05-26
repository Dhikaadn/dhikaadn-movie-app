import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../redux/actions/auth";
import { toast } from "react-toastify";
import google_img from "../img/google.png";
import facebook_img from "../img/facebook.png";
import github_img from "../img/github.png";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import "../App.css"

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };
  //Register with github
  const github = () => {
    window.open("http://localhost:5000/auth/github", "_self");
  };
  //Register with facebook
  const facebook = () => {
    window.open("http://localhost:5000/auth/facebook", "_self");
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = { email, password, name };

    if (password !== confirmPassword) {
      toast.error("Confirm password must be same with password");
      return;
    }

    dispatch(register(data, navigate));
  };

  return (
    <div className="Register">
      <div className="cart-register">
        <form className="form-register" onSubmit={onSubmit}>
          <h2 className="register-text">Create Account</h2>
          <label className="register-text">Name</label>
          <div className="container-input">
            <input
              name="name"
              placeholder="Name"
              className="input-field"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <AiOutlineUser className="me-2" style={{ fontSize: "25px" }} />
          </div>
          <label className="register-text">Email Address</label>
          <div className="container-input">
            <input
              name="email"
              type="email"
              placeholder="Email address"
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <AiOutlineMail className="me-2" style={{ fontSize: "25px" }} />
          </div>
          <label className="register-text">Password</label>
          <div className="container-input">
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <AiFillEyeInvisible className="me-2" style={{ fontSize: "25px" }} />
          </div>
          <label className="register-text">Confirm Password</label>
          <div className="container-input">
            <input
              name="confirmPassword"
              type="confirmPassword"
              placeholder="confirmPassword"
              className="input-field"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <AiFillEyeInvisible className="me-2" style={{ fontSize: "25px" }} />
          </div>
          {/* {error && <div>{error}</div>} */}
          <button className="bt-register-submit">Register now</button>
        </form>
        <div className="or">
          <p>Or</p>
          <p>Register with</p>
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

export default Register;
