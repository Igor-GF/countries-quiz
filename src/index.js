import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";

class CountriesQuiz extends Component {
  render() {
    return (
      <div className="container">
        <div className="title">Countries Quiz</div>
      </div>
    );
  }
}

ReactDOM.render(<CountriesQuiz />, document.getElementById("root"));