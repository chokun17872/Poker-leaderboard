import React, { Component } from "react";
import Leaderboard from "../Components/Leaderboard/Leaderboard";
import LeaderboardTitle from "../Components/LeaderboardTitle/LeaderboardTitle";
import RewardModal from "../Components/RewardModal/RewardModal";
import RewardList from "../Components/RewardList/RewardList";

class App extends Component {
  render() {
    return (
      <div>
        <RewardList />
        <RewardModal />
        <LeaderboardTitle />
        <Leaderboard />
      </div>
    );
  }
}

export default App;
