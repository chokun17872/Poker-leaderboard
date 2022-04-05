import React, { Component } from "react";
import "./LeaderboardTitle.css";

class LeaderboardTitle extends Component {
  render() {
    return (
      <div className="LeaderboardTitle">
        <p className="title">Contributor Ranking</p>
        <p className="facebookGroup">Poker Thailand</p>
      </div>
    );
  }
}

export default LeaderboardTitle;