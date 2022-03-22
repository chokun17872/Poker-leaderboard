import React, { Component } from "react";
import ContributorList from "../Components/ContributorList/ContributorList";
import TopContributorList from "../Components/TopContributorList/TopContributorList";

class App extends Component {
  render() {
    return (
      <div>
        <TopContributorList />
        <ContributorList />
      </div>
    );
  }
}

export default App;
