import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";

export const Register = () => {
  const userRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(account, password);
    try {
      const userData = {
        userRef,
        emailRef,
        passRef,
      };
      console.log(userData);
    } catch (error) {
      console.log(error);
    }
    // navigate("/");
  };
  return (
    <>
      <div className="back-button">
        <button onClick={() => navigate("/")}>Back</button>
      </div>
      <div className="app">
        <div className="login-form">
          <div className="title">Register</div>
          <div className="form">
            <form onSubmit={handleSubmit}>
              <div className="input-container">
                <label>Username </label>
                <input type="text" name="uname" ref={userRef} required />
              </div>
              <div className="input-container">
                <label>Email </label>
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
