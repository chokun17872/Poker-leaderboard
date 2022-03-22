import React, { Component } from "react";
import Contributor from "../Contributor/Contributor.js";
// import "./ContributorList.css";

const info = {
  rank: 1,
  name: "Chavalvit Keartnattakorn ชวัลวิทย์ เกียรติณัฐกร",
  point: 1000,
};

const contributorList = [info, info, info, info, info, info, info];

class ContributorList extends Component {
  render() {
    const contributorListBody = contributorList.map((contributor) => {
      return <Contributor info={contributor} />;
    });
    return (
      <div class="table-responsive">
        <table class="table table-light align-middle">
          <thead class="table-dark">
            <tr>
              <th class="col-1">#</th>
              <th class="col-1">Profile</th>
              <th class="col-8">Name</th>
              <th class="col-2">Points</th>
            </tr>
          </thead>
          <tbody>{contributorListBody}</tbody>
        </table>
      </div>
    );
  }
}

export default ContributorList;
