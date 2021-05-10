import React from "react";
import { Statistic, Card, Row, Col, Button } from "antd";
import {
  LikeOutlined,
  MailOutlined,
  CameraOutlined,
  CommentOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import "../global.css";

const Dashboard = () => {
  const { Countdown } = Statistic;
  const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK

  function onFinish() {
    console.log("finished!");
  }
  return (
    <div className="row-dashboard">
      <div className="row-dashboard-top">
        <Row className="row-dashboard-top-1" gutter={16}>
          <Col span={12}>
            <Statistic title="Active Users" value={112893} />
          </Col>
          <Col span={12}>
            <Statistic
              title="Account Balance (CNY)"
              value={112893}
              precision={2}
            />
            <Button style={{ marginTop: 16 }} type="primary">
              Recharge
            </Button>
          </Col>
          <Col span={12}>
            <Statistic title="Active Users" value={112893} loading />
          </Col>
        </Row>
        <Row className="row-dashboard-top-2" gutter={16}>
          <Col span={12}>
            <Countdown title="Countdown" value={deadline} onFinish={onFinish} />
          </Col>
          <Col span={12}>
            <Countdown
              title="Million Seconds"
              value={deadline}
              format="HH:mm:ss:SSS"
            />
          </Col>
          <Col span={24} style={{ marginTop: 32 }}>
            <Countdown
              title="Day Level"
              value={deadline}
              format="D - H - m - s "
            />
          </Col>
        </Row>
      </div>
      <div className="row-dashboard-bottom">
        <div className="row-dashboard-bottom-1">
          <div className="site-statistic-demo-card">
            <Row gutter={16}>
              <Col span={12}>
                <Card>
                  <Statistic
                    title="Active"
                    value={11.28}
                    precision={2}
                    valueStyle={{ color: "#3f8600" }}
                    prefix={<ArrowUpOutlined />}
                    suffix="%"
                  />
                </Card>
              </Col>
              <Col span={12}>
                <Card>
                  <Statistic
                    title="Idle"
                    value={9.3}
                    precision={2}
                    valueStyle={{ color: "#cf1322" }}
                    prefix={<ArrowDownOutlined />}
                    suffix="%"
                  />
                </Card>
              </Col>
            </Row>
          </div>
        </div>
        <div className="row-dashboard-bottom-2">
          <Row gutter={16}>
            <Col span={12}>
              <Statistic
                title="Feedback"
                value={1128}
                prefix={<LikeOutlined />}
              />
            </Col>
            <Col span={12}>
              <Statistic title="Unmerged" value={93} suffix="/ 100" />
            </Col>
          </Row>
        </div>
      </div>
      <div className="antcol">
        <div className="antcol-main">
          <div className="antcol-one">
            <div className="antcol-content">
              <h4>210</h4>
              <p>Unread Email</p>
            </div>
          </div>
          <div className="antcol-card-one">
            <h4>INCOME</h4>
            <h2>$15000</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit vitae ut iure.
            </p>
          </div>
        </div>
        <div className="antcol-main">
          <div className="antcol-one">
            <div className="antcol-content">
              <h4>150</h4>
              <p>Image Upload</p>
            </div>
          </div>
          <div className="antcol-card-one">
            <h4>INCOME</h4>
            <h2>$15000</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit vitae ut iure.
            </p>
          </div>
        </div>
        <div className="antcol-main">
          <div className="antcol-one">
            <div className="antcol-content">
              <h4>200</h4>
              <p>Total Message</p>
            </div>
          </div>
          <div className="antcol-card-one">
            <h4>INCOME</h4>
            <h2>$15000</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit vitae ut iure.
            </p>
          </div>
        </div>
        <div className="antcol-main">
          <div className="antcol-one">
            <div className="antcol-content">
              <h4>170</h4>
              <p>Orders Post</p>
            </div>
          </div>
          <div className="antcol-card-one">
            <h4>INCOME</h4>
            <h2>$15000</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit vitae ut iure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
