import React, { Component } from "react";
import profileImg from "../Contributor/profile_img.jpg";

const info = {
  rank: 1,
  name: "Chavalvit Keartnattakorn ชวัลวิทย์ เกียรติณัฐกร",
  point: 1000,
};

class TopContributor extends Component {
  render() {
    return (
      <div>
        <img src={profileImg} alt={info.name} />
        <p># {info.rank}</p>
        <p>{info.name}</p>
        <p>{info.point} points</p>
      </div>
    );
  }
}

export default TopContributor;
