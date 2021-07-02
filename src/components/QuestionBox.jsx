import React from 'react';

const QuestionBox = ({question, answers}) => {
  return (
    <article className="question-container">
      <div className="question">
        {question}
      </div>
    </article>
  )
}

export default QuestionBox;
