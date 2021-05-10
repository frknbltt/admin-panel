import React, { useState, useEffect } from "react";

export const AuthContext = React.createContext({});

const AuthProvider = (props) => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState({ name: "", surname: "" });

  const handleAuth = (value) => {
    setAuthenticated(value);
    localStorage.setItem("token", value);
  };

  return (
    <AuthContext.Provider
      value={{
        handleAuth,
        isAuthenticated,
        setAuthenticated,
        user,
        setUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
