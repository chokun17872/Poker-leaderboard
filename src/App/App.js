import React, { Component } from "react";
import Leaderboard from "../Components/Leaderboard/Leaderboard";
import LeaderboardName from "../Components/LeaderboardName/LeaderboardName";

class App extends Component {
  render() {
    return (
      <div>
        <LeaderboardName />
        <Leaderboard />
      </div>
    );
  }
}

export default App;
