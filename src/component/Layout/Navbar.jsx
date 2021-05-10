import React, { Component, useContext } from "react";
import { Layout } from "antd";
import "./global.css";
import { Menu, Dropdown } from "antd";
import Modal from "../Modal/Modal";
import Card from "../../Card";
import userphoto from "../../userphoto.png";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Link } from "react-router-dom";

const { Header } = Layout;

const notification = (
  <Menu className="modal-menu">
    <Card
      title="Notification"
      itemtitle="David Doe"
      itemtitlep="New York No. 1 Lake Park"
    />
  </Menu>
);

const message = (
  <Menu>
    <Card
      title="Message"
      itemtitle="David Doe"
      itemtitlep="A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner"
    />
  </Menu>
);
const shoppingBag = (
  <Menu>
    <Card
      title="Shopping Bag"
      itemtitle="Oliver"
      itemtitlep="New York No. 1 Lake Park"
    />
  </Menu>
);
const profileImage = (
  <Menu className="profile-image-dropdown">
    <Menu.Item key="0">
      <Link to="profile">My Profile </Link>
    </Menu.Item>
    <Menu.Item key="1">
      <Link to="#">Settings</Link>
    </Menu.Item>
    <Menu.Item key="3">
      <Link to="#">Feedback</Link>
    </Menu.Item>
    <Menu.Item key="4">
      <Link to="#">Help</Link>
    </Menu.Item>
    <Menu.Item key="5">
      <Link to="/adminpanel/">Logout</Link>
    </Menu.Item>
  </Menu>
);

const Navbar = () => {
  const { color, setColor } = useContext(ThemeContext);
  return (
    <Header className="site-layout-background">
      <div className="navbar-left" style={{ backgroundColor: color }}>
        <div className="search-icon">
          <Modal className="modal" />
        </div>
        <div className="notification-icon">
          <Dropdown overlay={notification} trigger={["click"]}>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 1c-6.338 0-12 4.226-12 10.007 0 2.05.739 4.063 2.047 5.625.055 1.83-1.023 4.456-1.993 6.368 2.602-.47 6.301-1.508 7.978-2.536 9.236 2.247 15.968-3.405 15.968-9.457 0-5.812-5.701-10.007-12-10.007zm1 15h-2v-6h2v6zm-1-7.75c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" />
              </svg>
            </a>
          </Dropdown>
        </div>
        <div className="message-icon">
          <Dropdown overlay={message} trigger={["click"]}>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
              </svg>
            </a>
          </Dropdown>
        </div>
        <div className="shopping-bag-icon">
          <Dropdown overlay={shoppingBag} trigger={["click"]}>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M4.558 7l4.701-4.702c.199-.198.46-.298.721-.298.613 0 1.02.505 1.02 1.029 0 .25-.092.504-.299.711l-3.26 3.26h-2.883zm12.001 0h2.883l-4.701-4.702c-.199-.198-.46-.298-.721-.298-.613 0-1.02.505-1.02 1.029 0 .25.092.504.299.711l3.26 3.26zm-16.559 2v2h.643c.534 0 1.021.304 1.256.784l4.101 10.216h12l4.102-10.214c.233-.481.722-.786 1.256-.786h.642v-2h-24z" />
              </svg>
            </a>
          </Dropdown>
        </div>
        <div className="navbar-profile-img">
          <Dropdown overlay={profileImage} trigger={["click"]}>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              <img src={userphoto} alt="userphoto" />{" "}
            </a>
          </Dropdown>
        </div>
      </div>
    </Header>
  );
};

export default Navbar;
