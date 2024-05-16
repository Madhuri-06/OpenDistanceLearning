import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
// import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import NotificationsActiveIcon from "@mui/icons-material/NotificationAdd";
import ChatIcon from "@mui/icons-material/Chat";
import SettingsIcon from "@mui/icons-material/Settings";
import { Avatar, Button, IconButton } from "@mui/material";
import "./Header.css";
import ClearIcon from "@mui/icons-material/Clear";
// import DragHandleIcon from "@material-ui/icons/DragHandle";
import NotesIcon from "@mui/icons-material/Notes";
import { useDispatch } from "react-redux";

const Header = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
  const user = localStorage.getItem("user")||{};
  const toggleClose=()=>{
    setToggle(false)
    
  }
  return (
    <div className="header">
      <div className="left__header">
        <Link to="/">
          <img
            src="https://lms.bup.edu.bd/pluginfile.php/1/theme_edumy/headerlogo2/1618037325/bup-icon.png"
            alt=""
          />
          <h4>LMS</h4>
        </Link>
      </div>
      <div
        className={`middle__header ${
          toggle ? `show__sidebar__nav` : `sidebar__nav`
        }`}
      >
        {user && (
          <ul>
            {
              user.role==="Teacher" && <> <li>
              <NavLink onClick={toggleClose} to="/teacher-dashboard">Dashboard</NavLink>
            </li>
            
           

            </>
            
            }
            {
              user.role==="Admin" && <> <li >
              <NavLink onClick={toggleClose} to="/admin-dashboard">Dashboard</NavLink>
            </li>
            <li className="admin__toggle__menu">
              <NavLink onClick={toggleClose} to="/admin/course-info">Course-Info</NavLink>
            </li>
            <li className="admin__toggle__menu">
              <NavLink onClick={toggleClose} to="/admin/student-info">Student-Info</NavLink>
            </li>
            <li className="admin__toggle__menu">
              <NavLink onClick={toggleClose} to="/admin/teacher-info">Teacher-Info</NavLink>
            </li>
            
            </>
            }
            {
              user.role==="Student" &&<><li>
              <NavLink onClick={toggleClose} to="/">Dashboard</NavLink>
            </li>
            <li>
              <NavLink onClick={toggleClose} to="/ucam">UCAM</NavLink>
            </li>

            <li>
              <NavLink onClick={toggleClose} to="/library">LIBRARY</NavLink>
            </li> </> 
            }
            
            <li>
              <Link onClick={toggleClose} to="/profile">Profile</Link>
            </li>
            <li>
              <NavLink onClick={toggleClose} to="/all-courses">All Courses</NavLink>
            </li>

            {
              user.role==="Teacher" ?   <li className="">
              <Button
                onClick={() => {
                  localStorage.clear("user");
                  localStorage.clear("auth_token");
                  dispatch({ type: "CLEAR__USER" });
                  history.push("/login");
                }}
              >
                Logout
              </Button>
            </li> :  <li className="logout__button">
              <Button
                onClick={() => {
                  localStorage.clear("user");
                  localStorage.clear("auth_token");
                  dispatch({ type: "CLEAR__USER" });
                  history("/login");
                }}
              >
                Logout
              </Button>
            </li>

            }
           
           

           
          </ul>
        )}
      </div>
      {user ? (
        <div className="right__header">
          <IconButton>
            <VisibilityOffIcon />
          </IconButton>
          <IconButton>
            <NotificationsActiveIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
          <Link to="/profile">
            <Avatar>R</Avatar>
          </Link>
        </div>
      ) : (
        <div className="d-flex list-unstyled">
          <li className="mr-3">
            <NavLink to="/Login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/Register">Register</NavLink>
          </li>
        </div>
      )}

      {user ? (
        <div className="menu__toggle__icon mr-auto">
          <IconButton onClick={() => setToggle(!toggle)}>
            {!toggle ? (
              <NotesIcon fontSize="large" />
            ) : (
              <ClearIcon fontSize="large" />
            )}
          </IconButton>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
