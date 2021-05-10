import React, { useContext, useState, useEffect } from "react";
import { Layout, Menu } from "antd";
import "./global.css";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";

const { SubMenu } = Menu;
const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setcollapsed] = useState(true);
  const { sideColor, setSideColor } = useContext(ThemeContext);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        setcollapsed(true);
      }
      if (window.innerWidth > 768) {
        setcollapsed(false);
      }
    });
  }, [window.innerWidth]);

  return (
    <Sider
      style={{ backgroundColor: sideColor }}
      collapsible
      collapsed={collapsed}
      onCollapse={() => setcollapsed((collapsed) => !collapsed)}
    >
      <div className="logo" style={{ marginTop: 21 }} />

      <Menu theme="dark" mode="inline">
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          <Link to="/adminpanel/dashboard">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          <Link to="/adminpanel/users">Users</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<UserOutlined />}>
          <Link to="/adminpanel/profile">Profile</Link>
        </Menu.Item>
        <SubMenu key="sub1" icon={<UserOutlined />} title="Maps">
          <Menu.Item key="4">
            <Link to="/adminpanel/googlemaps">Google Map</Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/adminpanel/leafletmaps">Leaflet Map</Link>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="6" icon={<FileOutlined />}>
          <Link to="/adminpanel/charts">Charts</Link>
        </Menu.Item>
        <Menu.Item key="7" icon={<FileOutlined />}>
          <Link to="/adminpanel/notes">Notes</Link>
        </Menu.Item>
        <Menu.Item key="8" icon={<CalendarOutlined />}>
          <Link to="/adminpanel/calendar">Calendar</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
