import React, { Component } from "react";
import Leaderboard from "../Components/Leaderboard/Leaderboard";
import LeaderboardTitle from "../Components/LeaderboardTitle/LeaderboardTitle";
import RewardTitle from "../Components/RewardTitle/RewardTitle";

class App extends Component {
  render() {
    return (
      <div>
        <RewardTitle />
        <LeaderboardTitle />
        <Leaderboard />
      </div>
    );
  }
}

export default App;
