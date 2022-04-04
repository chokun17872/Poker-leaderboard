import React, { Component } from "react";
import TopContributor from "../TopContributor/TopContributor";
import "./TopContributorList.css";

class TopContributorList extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <TopContributor place="second" />
          </div>
          <div className="col">
            <TopContributor place="first" />
          </div>
          <div className="col">
            <TopContributor place="third" />
          </div>
        </div>
      </div>
    );
  }
}

export default TopContributorList;
