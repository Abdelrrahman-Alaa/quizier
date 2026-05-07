function NextButton({ dispatch, answer, index, numQuestions }) {
  if (answer === null) {
    return null;
  }

  const isLastQuestion = index === numQuestions - 1;

  return (
    <button
      className="btn btn-ui"
      onClick={() => {
        isLastQuestion
          ? dispatch({ type: "finished" })
          : dispatch({ type: "nextQuestion" });
      }}
    >
      {isLastQuestion ? "Finish" : "Next"}
    </button>
  );
}

export default NextButton;
