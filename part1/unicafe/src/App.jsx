import { useState } from "react";

const Statistics = ({ good, bad, neutral, total }) => {
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral:{neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Average: {(good * 1 + neutral * 0 + bad * -1) / total}</p>
      <p>Positive Percentage: {(good / total) * 100}%</p>
    </>
  );
};

const App = () => {
  const [good, SetGood] = useState(0);
  const [neutral, SetNeutral] = useState(0);
  const [bad, SetBad] = useState(0);
  const [total, setTotal] = useState(0);

  return (
    <div>
      <h1>Give Feedback</h1>
      <button
        onClick={() => {
          const newValue = good + 1;
          SetGood(newValue);
          setTotal(newValue + neutral + bad);
        }}
      >
        Good
      </button>
      <button
        onClick={() => {
          const newValue = neutral + 1;
          SetNeutral(newValue);
          setTotal(good + newValue + bad);
        }}
      >
        Neutral
      </button>
      <button
        onClick={() => {
          const newValue = bad + 1;
          SetBad(newValue);
          setTotal(good + neutral + newValue);
        }}
      >
        Bad
      </button>

      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
    </div>
  );
};

export default App;
