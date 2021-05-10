import React, { useState, useContext } from "react";
import { Layout, Breadcrumb } from "antd";
import { Drawer, Button } from "antd";
import "../../global.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import colorbox from "../../colorbox.png";
const { Content } = Layout;

const Cont = (props) => {
  const { color, setColor } = useContext(ThemeContext);
  const { sideColor, setSideColor } = useContext(ThemeContext);
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <Content style={{ margin: "0 26px" }} className="content-class">
      <Breadcrumb style={{ margin: "40px 0" }}></Breadcrumb>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360 }}
      >
        {props.children}
      </div>
      <div className="content-theme-div">
        <Button
          style={{
            width: 50,
            height: 60,
            backgroundColor: "black",
            border: "none",
          }}
          type="primary"
          onClick={showDrawer}
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="palette"
            class="svg-inline--fa fa-palette fa-w-16"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"
            ></path>
          </svg>
        </Button>
        <Drawer
          placement="right"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <div className="theme-drawer">
            <div className="navbar-theme">
              <h3>NAVBAR</h3>
              <div className="navbar-theme-colors">
                <button
                  style={{ backgroundColor: "#34568B ", width: 25, height: 25 }}
                  onClick={() =>
                    setColor(color === "white" ? "#34568B" : "#34568B ")
                  }
                ></button>
                <button
                  style={{ backgroundColor: "#FF6F61 ", width: 25, height: 25 }}
                  onClick={() =>
                    setColor(color === "white" ? "#FF6F61" : "#FF6F61")
                  }
                ></button>
                <button
                  style={{ backgroundColor: "#6B5B95", width: 25, height: 25 }}
                  onClick={() =>
                    setColor(color === "white" ? "#6B5B95" : "#6B5B95")
                  }
                ></button>
                <button
                  style={{ backgroundColor: "#88B04B", width: 25, height: 25 }}
                  onClick={() =>
                    setColor(color === "white" ? "#88B04B" : "#88B04B")
                  }
                ></button>
                <button
                  style={{ backgroundColor: "#F7CAC9", width: 25, height: 25 }}
                  onClick={() =>
                    setColor(color === "white" ? "#F7CAC9" : "#F7CAC9")
                  }
                ></button>
                <button
                  style={{ backgroundColor: "#92A8D1", width: 25, height: 25 }}
                  onClick={() =>
                    setColor(color === "white" ? "#92A8D1" : "#92A8D1")
                  }
                ></button>
                <button
                  style={{ backgroundColor: "#955251", width: 25, height: 25 }}
                  onClick={() =>
                    setColor(color === "white" ? "#955251" : "#955251")
                  }
                ></button>
                <button
                  style={{ backgroundColor: "#B565A7", width: 25, height: 25 }}
                  onClick={() =>
                    setColor(color === "white" ? "#B565A7" : "#B565A7")
                  }
                ></button>
                <button
                  style={{ backgroundColor: "#009B77", width: 25, height: 25 }}
                  onClick={() =>
                    setColor(color === "white" ? "#009B77" : "#009B77")
                  }
                ></button>
                <button
                  style={{ backgroundColor: "#DD4124", width: 25, height: 25 }}
                  onClick={() =>
                    setColor(color === "white" ? "#DD4124" : "#DD4124")
                  }
                ></button>
                <button
                  style={{ backgroundColor: "#D65076", width: 25, height: 25 }}
                  onClick={() =>
                    setColor(color === "white" ? "#D65076" : "#D65076")
                  }
                ></button>
                <button
                  style={{ backgroundColor: "#45B8AC", width: 25, height: 25 }}
                  onClick={() =>
                    setColor(color === "white" ? "#45B8AC" : "#45B8AC")
                  }
                ></button>
                <button
                  style={{ backgroundColor: "#EFC050", width: 25, height: 25 }}
                  onClick={() =>
                    setColor(color === "white" ? "#EFC050" : "#EFC050")
                  }
                ></button>
                <button
                  style={{ backgroundColor: "#264E36", width: 25, height: 25 }}
                  onClick={() =>
                    setColor(color === "white" ? "#264E36" : "#264E36")
                  }
                ></button>
                <button
                  style={{ backgroundColor: "#EFE1CE", width: 25, height: 25 }}
                  onClick={() =>
                    setColor(color === "white" ? "#EFE1CE" : "#EFE1CE")
                  }
                ></button>
              </div>
            </div>
            <div className="sidebar-theme">
              <h3>SIDEBAR</h3>
              <div className="sidebar-theme-colors">
                <button
                  style={{
                    backgroundColor: "#34568B ",
                    width: 25,
                    height: 25,
                  }}
                  onClick={() =>
                    setSideColor(sideColor === "white" ? "#34568B" : "#34568B ")
                  }
                ></button>
                <button
                  style={{ backgroundColor: "#FF6F61 ", width: 25, height: 25 }}
                  onClick={() =>
                    setSideColor(sideColor === "white" ? "#FF6F61" : "#FF6F61")
                  }
                ></button>
                <button
                  style={{ backgroundColor: "#6B5B95", width: 25, height: 25 }}
                  onClick={() =>
                    setSideColor(sideColor === "white" ? "#6B5B95" : "#6B5B95")
                  }
                ></button>
                <button
                  style={{ backgroundColor: "#88B04B", width: 25, height: 25 }}
                  onClick={() =>
                    setSideColor(sideColor === "white" ? "#88B04B" : "#88B04B")
                  }
                ></button>
                <button
                  style={{ backgroundColor: "#F7CAC9", width: 25, height: 25 }}
                  onClick={() =>
                    setSideColor(sideColor === "white" ? "#F7CAC9" : "#F7CAC9")
                  }
                ></button>
                <button
                  style={{ backgroundColor: "#92A8D1", width: 25, height: 25 }}
                  onClick={() =>
                    setSideColor(sideColor === "white" ? "#92A8D1" : "#92A8D1")
                  }
                ></button>
                <button
                  style={{ backgroundColor: "#955251", width: 25, height: 25 }}
                  onClick={() =>
                    setSideColor(sideColor === "white" ? "#955251" : "#955251")
                  }
                ></button>
                <button
                  style={{ backgroundColor: "#B565A7", width: 25, height: 25 }}
                  onClick={() =>
                    setSideColor(sideColor === "white" ? "#B565A7" : "#B565A7")
                  }
                ></button>
                <button
                  style={{ backgroundColor: "#009B77", width: 25, height: 25 }}
                  onClick={() =>
                    setSideColor(sideColor === "white" ? "#009B77" : "#009B77")
                  }
                ></button>
                <button
                  style={{ backgroundColor: "#DD4124", width: 25, height: 25 }}
                  onClick={() =>
                    setSideColor(sideColor === "white" ? "#DD4124" : "#DD4124")
                  }
                ></button>
                <button
                  style={{ backgroundColor: "#D65076", width: 25, height: 25 }}
                  onClick={() =>
                    setSideColor(sideColor === "white" ? "#D65076" : "#D65076")
                  }
                ></button>
                <button
                  style={{ backgroundColor: "#45B8AC", width: 25, height: 25 }}
                  onClick={() =>
                    setSideColor(sideColor === "white" ? "#45B8AC" : "#45B8AC")
                  }
                ></button>
                <button
                  style={{ backgroundColor: "#EFC050", width: 25, height: 25 }}
                  onClick={() =>
                    setSideColor(sideColor === "white" ? "#EFC050" : "#EFC050")
                  }
                ></button>
                <button
                  style={{ backgroundColor: "#264E36", width: 25, height: 25 }}
                  onClick={() =>
                    setSideColor(sideColor === "white" ? "#264E36" : "#264E36")
                  }
                ></button>
                <button
                  style={{ backgroundColor: "#EFE1CE", width: 25, height: 25 }}
                  onClick={() =>
                    setSideColor(sideColor === "white" ? "#EFE1CE" : "#EFE1CE")
                  }
                ></button>
              </div>
            </div>
          </div>
        </Drawer>
      </div>
    </Content>
  );
};

export default Cont;
