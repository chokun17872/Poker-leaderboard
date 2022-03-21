import React, { Component } from "react";
import Contributor from "../Contributor/Contributor.js";

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
      <table class="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Profile</th>
            <th>Name</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>{contributorListBody}</tbody>
      </table>
    );
  }
}

export default ContributorList;
