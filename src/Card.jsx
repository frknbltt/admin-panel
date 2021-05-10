import React, { Component } from "react";
import "./global.css";
class Card extends Component {
  render() {
    return (
      <div className="notification">
        <div className="notification-header">
          <h3>
            <span>{this.props.title}</span>
          </h3>
        </div>
        <div className="notification-body">
          <a className="notification-body-item" href="# ">
            <h5>{this.props.itemtitle}</h5>
            <p>{this.props.itemtitlep}</p>
          </a>
          <a className="notification-body-item" href="# ">
            <h5>Navis Doe</h5>
            <p>
              A National Book Award Finalist An Edgar Award Finalist A
              California Book Award Gold Medal Winner
            </p>
          </a>
          <a className="notification-body-item" href="# ">
            <h5>Emanual Doe</h5>
            <p>
              A National Book Award Finalist An Edgar Award Finalist A
              California Book Award Gold Medal Winner
            </p>
          </a>
          <a className="notification-body-item" href="# ">
            <h5>Dowain Doe</h5>
            <p>
              A National Book Award Finalist An Edgar Award Finalist A
              California Book Award Gold Medal Winner
            </p>
          </a>
        </div>
        <a className="notification-footer" href="# ">
          <span>View All</span>
        </a>
      </div>
    );
  }
}
export default Card;
