import React from "react";
import { Navigate, Route } from "react-router";
import { Outlet } from "react-router-dom";
const AdminRoute = ({ children, ...rest }) => {
  const user=JSON.parse(localStorage.getItem("user"))
    if(user&&user.role==="Admin")
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

export default AdminRoute;
