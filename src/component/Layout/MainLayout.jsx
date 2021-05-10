import React, { Component } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Layout } from "antd";
import Footer from "./Footer";
import Content from "./Content";
import "./global.css";

export default class MainLayout extends Component {
  render() {
    const { children } = this.props;
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar />
        <Layout className="site-layout">
          <Navbar />
          <Content> {children} </Content>
          <Footer />
        </Layout>
      </Layout>
    );
  }
}
