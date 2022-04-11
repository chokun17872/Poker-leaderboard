import React, { Component } from "react";
import rewardImg from "./reward.png";

class Reward extends Component {
  render() {
    return (
      <div>
        <img src={rewardImg} alt="rewardImg" />
        <p>ของรางวัล</p>
      </div>
    );
  }
}

export default Reward;
