import React, { Component } from "react";
import "./Reward.css";

class Reward extends Component {
  render() {
    return (
      <button
        type="button"
        className="reward btn btn-dark"
        data-toggle="modal"
        data-target="#reward"
      >
        ของรางวัล
      </button>
    );
  }
}

export default Reward;
