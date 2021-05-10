import React from "react";
import Backgroundphoto from "../Backgroundphoto.jpg";
import userphoto from "../userphoto.png";
import "../global.css";
import png1 from "../profil/1.png";
import png2 from "../profil/2.png";
import png3 from "../profil/3.png";
import png4 from "../profil/4.png";
import png5 from "../profil/5.png";
import png6 from "../profil/6.png";
import { Radio } from "antd";
const ProfilePage = () => {
  return (
    <div>
      <div className="profilepage">
        <div className="profilepage-container">
          <div className="profilepage-wrapper">
            <img
              className="profile-background-image"
              src={Backgroundphoto}
              alt="backgroundphoto"
            />
            <div className="profilepage-avatar-card">
              <img src={userphoto} alt="userphoto" />
              <div>
                <h4 className="name">Samwell Martina</h4>
                <p className="username">@samwell_martina</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="profilpage-menu">
        <div class="menu">
          <Radio.Group defaultValue="a" size="large">
            <Radio.Button value="a">
              <strong>9</strong> Posts
            </Radio.Button>
            <Radio.Button value="b">
              <strong>8</strong> Followers
            </Radio.Button>
            <Radio.Button value="c">
              <strong>14</strong> Following
            </Radio.Button>
          </Radio.Group>
        </div>
      </div>
      <div className="profilpage-img">
        <img src={png1} alt="" />
        <img src={png2} alt="" />
        <img src={png3} alt="" />
        <img src={png4} alt="" />
        <img src={png5} alt="" />
        <img src={png6} alt="" />
      </div>
    </div>
  );
};
export default ProfilePage;
