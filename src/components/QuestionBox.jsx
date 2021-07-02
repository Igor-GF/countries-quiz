import React, { useState } from 'react';

const QuestionBox = ({ question, options, selected }) => {

  const [answer, setAnswer] = useState(options);

  return (
    <article className="question-container">
      <div className="question">
        {question}
      </div>
      <div className="options">
        {
          answer.map((textItem, index) => (
            <button key={index} className="answer-btn" onClick={() => {
              setAnswer([textItem]);
              selected(textItem);
            }}>{textItem}</button>
          ))
        }
      </div>      
    </article>
  )
}

export default QuestionBox;
