import React, { Component } from "react";
import rewardImg from "./reward.png";

class RewardInfo extends Component {
  render() {
    return (
      <div>
        <img src={rewardImg} alt="rewardImg" />
        <p>ของรางวัล</p>
      </div>
    );
  }
}

export default RewardInfo;
