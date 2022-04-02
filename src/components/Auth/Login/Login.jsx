import React, { useContext, useRef, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/Context/AuthContext";
import "./style.scss";
import axios from "../../../utils/axios";
export const Login = (props) => {
  const { stateShow, ClosePopup } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  /*
  tk : jit123,
  email : jit123@gmail.com,
  pass : 123
  */
  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const userData = {
        user_name: username,
        password,
      };
      // console.log(userData);
      const res = await axios.post("/user/signin", userData);
      console.log(res.data);
      dispatch({ type: "LOGIN_SUCCESS", payload: userData });
      navigate("/");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  const handleLoginShow = () => ClosePopup(true);
  return (
    <>
      <Modal show={stateShow} onHide={handleLoginShow}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>Username </label>
              <input
                type="text"
                name="uname"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="input-container">
              <label>Password </label>
              <input
                type="password"
                name="pass"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
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
