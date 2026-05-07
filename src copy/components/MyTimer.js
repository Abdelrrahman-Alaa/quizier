import { useTimer } from "react-timer-hook";

function MyTimer({ expiryTimestamp, dispatch }) {
  const { seconds, minutes } = useTimer({
    expiryTimestamp,
    onExpire: () => dispatch({ type: "finished" }),
    interval: 20,
  });

  return (
    <div className="timer">
      <span>{minutes}</span>:<span>{seconds}</span>
    </div>
  );
}
export default MyTimer;
