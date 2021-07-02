import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";
import quizAPI from "./quizAPI";
import QuestionBox from './components/QuestionBox';

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
        {this.state.questionSet.length > 0 && this.state.questionSet.map(({question, answers, correct,questionId}) => 
          <QuestionBox 
            key={questionId}
            question={question}
            options={answers}
          />
        )}
      </div>
    );
  }
}

ReactDOM.render(<CountriesQuiz />, document.getElementById("root"));