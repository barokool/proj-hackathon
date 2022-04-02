import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import { Button, Modal } from "react-bootstrap";
import axios from "../../../utils/axios";

export const Register = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [selectedOpt, setSelectedOpt] = useState(0);
  const { stateShow, ClosePopup } = props;
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post("/user/signup", {
        user_name: username,
        password,
        email,
        role: selectedOpt,
      });
      console.log(res.data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const handleLoginShow = () => ClosePopup(true);

  return (
    <>
      {/*  */}
      {/* <div className="app">
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
      </div> */}
      <Modal show={stateShow} onHide={handleLoginShow}>
        <Modal.Header closeButton>
          <Modal.Title>Register </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>Username </label>
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="input-container">
              <label>Email </label>
              <input
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-container">
              <label>Password </label>
              <input
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-container">
              <label>Chọn chức năng người dùng</label>
              <select onChange={(e) => setSelectedOpt(e.target.value)}>
                <option value="0">Người cho thuê trọ</option>
                <option value="1">Người thuê trọ</option>
              </select>
            </div>
            <div className="button-container">
              <input type="submit" />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={() => ClosePopup(false)}>
            Close
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
};
