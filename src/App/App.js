import React, { Component } from "react";
import Leaderboard from "../Components/Leaderboard/Leaderboard";
import LeaderboardTitle from "../Components/LeaderboardTitle/LeaderboardTitle";
import RewardModal from "../Components/RewardModal/RewardModal";
import Reward from "../Components/Reward/Reward";

class App extends Component {
  render() {
    return (
      <div>
        <Reward />
        <RewardModal />
        <LeaderboardTitle />
        <Leaderboard />
      </div>
    );
  }
}

export default App;
