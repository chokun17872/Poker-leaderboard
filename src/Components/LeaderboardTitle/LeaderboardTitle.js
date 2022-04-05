import React, { Component } from "react";
import "./LeaderboardTitle.css";
import fbLogo from "./fbLogo.png";
// import fbLogo2 from "./fbLogo2.png";

class LeaderboardTitle extends Component {
  render() {
    return (
      <div className="LeaderboardTitle">
        <p className="title">Contributor Ranking</p>
        <div className="facebookGroup">
          <p className="groupName">Poker Thailand</p>
          <a
            className="groupLink"
            href="https://www.facebook.com/groups/223422232142743/"
          >
            <img className="logo" src={fbLogo} alt="fbLogo"></img>
          </a>
        </div>
      </div>
    );
  }
}

export default LeaderboardTitle;
