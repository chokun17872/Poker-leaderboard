import React, { Component } from "react";
import Reward from "../Reward/Reward";
import rewardImg from "./reward.png";

class RewardList extends Component {
  render() {
    return (
      <div>
        <Reward rewardImg={rewardImg} rewardDesc="ของรางวัล 1" />
        <Reward rewardImg={rewardImg} rewardDesc="ของรางวัล 2" />
        <Reward rewardImg={rewardImg} rewardDesc="ของรางวัล 3" />
      </div>
    );
  }
}

export default RewardList;
