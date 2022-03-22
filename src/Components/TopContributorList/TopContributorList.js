import React, { Component } from "react";
import TopContributor from "../TopContributor/TopContributor";

class TopContributorList extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <TopContributor />
          </div>
          <div className="col">
            <TopContributor />
          </div>
          <div className="col">
            <TopContributor />
          </div>
        </div>
      </div>
    );
  }
}

export default TopContributorList;
