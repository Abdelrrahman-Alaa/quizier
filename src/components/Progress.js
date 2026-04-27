function Progress({ index, numQuestions, points, maxPoints, answer }) {
  return (
    <header className="progress">
      <progress value={index + Number(answer !== null)} max={numQuestions}></progress>
      <p>
        Question{" "}
        <strong>
          {index + 1} / {numQuestions}
        </strong>
      </p>
      <p>
        <strong>
          {points} / {maxPoints}
        </strong>
      </p>
    </header>
  );
}

export default Progress;
