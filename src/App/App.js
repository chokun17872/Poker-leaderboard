import React, { Component } from "react";
import ContributorList from "../Components/ContributorList/ContributorList";
import TopContributor from "../Components/TopContributor/TopContributor";

class App extends Component {
  render() {
    return (
      <div>
        <TopContributor />
        <ContributorList />
      </div>
    );
  }
}

export default App;
