import React, { Component } from "react";
import profileImg from "./profile_img.jpg";
import "./Contributor.css";

class Contributor extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-1">{this.props.info.rank}</div>
          <div class="col-2">
            <img src={profileImg} alt={this.props.info.name} />
          </div>
          <div class="col-6">{this.props.info.name}</div>
          <div class="col-3">{this.props.info.point}</div>
        </div>
      </div>
    );
  }
}

export default Contributor;
