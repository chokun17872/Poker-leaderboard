import React, { Component } from "react";
import profileImg from "./profile_img.jpg";
import "./Contributor.css";

class Contributor extends Component {
  render() {
    return (
      <tr>
        <th scope="row">{this.props.info.rank}</th>
        <td>
          <img src={profileImg} alt={this.props.info.name} />
        </td>
        <td>{this.props.info.name}</td>
        <td>{this.props.info.point}</td>
      </tr>
    );
  }
}

export default Contributor;
