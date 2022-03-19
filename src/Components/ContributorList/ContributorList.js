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
    return contributorList.map((contributor) => {
      return <Contributor info={contributor} />;
    });
  }
}

export default ContributorList;
