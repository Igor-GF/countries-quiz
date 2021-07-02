import React, { useState } from 'react';

const QuestionBox = ({question, options }) => {

  const [answer, setAnswer] = useState(options);

   
  return (
    <article className="question-container">
      <div className="question">
        {question}
      </div>
      <div className="options">
        {
          options.map((textItem, index) => (
            <button key={index} className="answer-btn">{textItem}</button>
          ))
        }
      </div>
    </article>
  )
}

export default QuestionBox;
