import MyTimer from "./MyTimer";

function Timer({ numQuestions, dispatch }) {
  const secondsPerQuestion = 30;
  const time = new Date();
  time.setSeconds(time.getSeconds() + secondsPerQuestion * numQuestions);

  return <MyTimer expiryTimestamp={time} dispatch={dispatch} />;
}

export default Timer;
