import React, { Component } from "react";
import profileImg from "../Contributor/profile_img.jpg";
import "./TopContributor.css";

const info = {
  rank: 1,
  name: "Chavalvit Keartnattakorn ชวัลวิทย์ เกียรติณัฐกร",
  point: 1000,
};

class TopContributor extends Component {
  render() {
    return (
      <div className="TopContributor">
        <img
          className="profile rounded-circle"
          src={profileImg}
          alt={info.name}
        />
        <p className="rank"># {info.rank}</p>
        <p className="name">{info.name}</p>
        <p className="point">{info.point} points</p>
      </div>
    );
  }
}

export default TopContributor;
