import React, { Component } from "react";
import ContributorList from "../ContributorList/ContributorList";
import TopContributorList from "../TopContributorList/TopContributorList";

class Leaderboard extends Component {
  render() {
    return (
      <div>
        <TopContributorList />
        <ContributorList />
      </div>
    );
  }
}

export default Leaderboard;
