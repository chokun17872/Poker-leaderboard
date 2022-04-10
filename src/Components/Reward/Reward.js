import React, { Component } from "react";
import "./Reward.css";
import Modal from "../Modal/Modal";

class Reward extends Component {
  render() {
    return (
      <div className="Reward">
        <button
          type="button"
          className="btn btn-dark"
          data-toggle="modal"
          data-target="#reward"
        >
          ของรางวัล
        </button>

        <Modal />
      </div>
    );
  }
}

export default Reward;
