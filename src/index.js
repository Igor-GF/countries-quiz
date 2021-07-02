import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";
import quizAPI from "./quizAPI";

class CountriesQuiz extends Component {
  state = {
    questionSet: []
  };

  getQuestions = () => {
    quizAPI().then((question) => {
      this.setState({
        questionSet: question
      });
    });
  };

  componentDidMount() {
    this.getQuestions();
  };

  render() {
    return (
      <div className="container">
        <div className="title">Countries Quiz</div>
        {this.state.questionSet.length > 0 && this.state.questionSet.map(({question}) => 
          <h4>{question}</h4>
        )}
      </div>
    );
  }
}

ReactDOM.render(<CountriesQuiz />, document.getElementById("root"));