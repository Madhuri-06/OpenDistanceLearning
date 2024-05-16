import React from 'react';
import { Navigate, Route } from 'react-router';
import { Outlet } from 'react-router-dom';
const TeacherRoute = ({ children, ...rest }) => {
    const user=JSON.parse(localStorage.getItem("user"))
    console.log(user)
    if(user&&user.role==="Student")
      {
        return(
          <Outlet/>
        )
      }
    else{
      return(
        <Route element={
        <Navigate
        to={{
          pathname: "/login",
          state: { from: location }
        }}/>
        }
     /> )
    }
};

export default TeacherRoute;