import React, { Component, useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import MainLayout from "./MainLayout";
import { isLogin } from "../../utils/index";

const PrivateRoute = (props) => {
  const { component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() ? (
          <MainLayout>
            {" "}
            <Component {...props} />{" "}
          </MainLayout>
        ) : (
          <Redirect to="/adminpanel/signin" />
        )
      }
    />
  );
};

export default PrivateRoute;
