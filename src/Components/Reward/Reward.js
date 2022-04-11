import React, { Component } from "react";
import "./Reward.css";
import rewardImg from "./reward.png";

class Reward extends Component {
  render() {
    return (
      <div className="Reward">
        <img className="rewardImg" src={rewardImg} alt="rewardImg" />
        <p className="rewardDesc">ของรางวัล</p>
      </div>
    );
  }
}

export default Reward;
