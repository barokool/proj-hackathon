import "./style.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import PersonIcon from "@mui/icons-material/Person";
import React, { useContext, useRef } from "react";
import { useDetectOutsideClick } from "../../hooks/useDetectOutsideClick";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/Context/AuthContext";
export const Navbar = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const handleClick = () => {
    alert("click");
  };
  const { user, dispatch } = useContext(AuthContext);
  const handleLogout = () => {
    window.location.reload();
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon className="icon" onClick={() => handleClick()} />
        </div>
        <div className="logo">
          <span>JIT TEAM</span>
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              //   onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <PersonIcon
              onClick={() => setIsActive(!isActive)}
              className="icon"
            />
            <nav
              ref={dropdownRef}
              className={`menu ${isActive ? "active" : "inactive"}`}
            >
              <ul>
                {user ? (
                  <>
                    <li className="info-user">Hello {user.user}</li>
                    <li className="info-user" onClick={() => handleLogout()}>
                      Log out
                    </li>
                  </>
                ) : (
                  <li>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                  </li>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
