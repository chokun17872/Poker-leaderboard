import React, { Component } from "react";
import RewardModal from "../RewardModal/RewardModal";
import RewardTitle from "../RewardTitle/RewardTitle";
import RewardList from "../RewardList/RewardList";

class RewardSection extends Component {
  render() {
    return <RewardModal title={RewardTitle} content={RewardList} />;
  }
}

export default RewardSection;
