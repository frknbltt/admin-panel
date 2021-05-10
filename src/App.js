import { Layout, Menu, Breadcrumb } from "antd";
import "antd/dist/antd.css";
import "./global.css";
import React, { useContext, useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
} from "react-router-dom";
import PrivateRoute from "./component/Layout/PrivateRoute";
import { AuthContext } from "./contexts/AuthContext";
import { ThemeContext } from "./contexts/ThemeContext";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Users from "./pages/Users";
import CalendarPage from "./pages/Calendar";
import Todo from "./pages/Todo";
import ProfilePage from "./pages/ProfilePage";
import GoogleMapsPage from "./pages/GoogleMapsPage";
import LeafletMapsPage from "./pages/LeafletMapsPage";
import GoogleChartsPage from "./pages/GoogleChartsPage";
import PublicRoute from "./component/Layout/PublicRoute";
import Home from "./component/Layout/Home";
import SignIn from "./component/Layout/SignIn";



function App() {
  const { handleAuth } = useContext(AuthContext);
  const { color, setColor } = useContext(ThemeContext);

  const items = [
  
    { path: "/adminpanel/users", component: Users },
    { path: "/adminpanel/dashboard", component: Dashboard },
    { path: "/adminpanel/notes", component: Todo },
    { path: "/adminpanel/calendar", component: CalendarPage },
    { path: "/adminpanel/profile", component: ProfilePage },
    { path: "/adminpanel/googlemaps", component: GoogleMapsPage },
    { path: "/adminpanel/leafletmaps", component: LeafletMapsPage },
    { path: "/adminpanel/charts", component: GoogleChartsPage },

  ];

  return (
    <Router>
      <div>
    
        <Route exact path="/adminpanel/" component={Login}/>
        <PublicRoute restricted={false} component={Home} path="/adminpanel/" exact />
        <PublicRoute restricted={true} component={SignIn} path="/adminpanel/signin" exact />
        {items.map((route) => {
          return <PrivateRoute path={route.path} component={route.component} />;
        })}
      </div>
    </Router>
  );
}

export default App;
