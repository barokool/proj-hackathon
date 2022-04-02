import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/Context/AuthContext";
import "./style.scss";

export const Login = () => {
  const userRef = useRef();
  const passRef = useRef();
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const userData = {
        user: userRef.current.value,
        pass: passRef.current.value,
      };
      console.log(userData);
      dispatch({ type: "LOGIN_SUCCESS", payload: userData });
      navigate("/");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
  return (
    <>
      <div className="back-button">
        <button onClick={() => navigate("/")}>Back</button>
      </div>
      <div className="app">
        <div className="login-form">
          <div className="title">Login</div>
          <div className="form">
            <form onSubmit={handleSubmit}>
              <div className="input-container">
                <label>Username </label>
                <input type="text" name="uname" ref={userRef} required />
              </div>
              <div className="input-container">
                <label>Password </label>
                <input type="password" name="pass" required ref={passRef} />
              </div>
              <div className="button-container">
                <input type="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
