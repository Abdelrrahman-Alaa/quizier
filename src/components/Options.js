function Options({ question, answer, dispatch }) {
  return (
    <div className="options">
      {question.options.map((option) => (
        <button
          className="btn btn-option"
          key={option}
          onClick={() => dispatch({ type: "newAnswer", payload: answer })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
