import React from "react";

function QuizResult(props) {
  return (
    <>
      <div className="show-score">
        Your score:{props.score} <br />
        totalscore:{props.totalscore}
      </div>
      <button id="next-button" onClick={props.tryagain}>
        try again
      </button>
    </>
  );
}

export default QuizResult;
