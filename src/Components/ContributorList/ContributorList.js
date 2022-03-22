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
      <div className="table-responsive">
        <table className="table table-light align-middle">
          <thead className="table-dark">
            <tr>
              <th className="col-1">#</th>
              <th className="col-1">Profile</th>
              <th className="col-8">Name</th>
              <th className="col-2">Points</th>
            </tr>
          </thead>
          <tbody>{contributorListBody}</tbody>
        </table>
      </div>
    );
  }
}

export default ContributorList;
