import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";
import quizAPI from "./quizAPI";
import QuestionBox from './components/QuestionBox';

class CountriesQuiz extends Component {
  state = {
    questionSet: [],
    score: 0,
    responses: 0
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
  
  checkAnswer = (answer, correctAnswer) => {
    if (answer === correctAnswer) {
      this.setState({
        score: this.state.score + 1
      });
    }

    this.setState({
      responses: this.state.responses < 3 ? this.state.responses + 1: 3
    })
  };

  render() {
    return (
      <div className="container">
        <div className="title">Countries Quiz</div>
        {this.state.questionSet.length > 0 &&
          this.state.responses < 3 && 
          this.state.questionSet.map(({question, answers, correct, questionId}) => 
          <QuestionBox 
            key={questionId}
            question={question}
            options={answers}
            selected={(textAnswer) => this.checkAnswer(textAnswer, correct)}
          />
        )}
      { this.state.responses === 3 ? (<h2>{this.state.score}</h2>): null }

      </div>
    );
  }
}

ReactDOM.render(<CountriesQuiz />, document.getElementById("root"));