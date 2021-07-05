import React from 'react';

const Result = ({ score, playAgain }) => {
  return (
    <div className="score-container">
      <div className="score">You scored {score} / 3 answers</div>
      <button className="play-btn" onClick={playAgain}>Play again!</button>
    </div>
  )
}

export default Result;