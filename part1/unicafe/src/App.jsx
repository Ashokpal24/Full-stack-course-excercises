import { useState } from "react";

const Statistics = ({ good, bad, neutral, total }) => {
  if (total) {
    return (
      <table>
        <tr>
          <th style={{ backgroundColor: "#cccccc", border: "1px solid" }}>
            Statistics
          </th>
          <th style={{ backgroundColor: "#cccccc", border: "1px solid" }}>
            Value
          </th>
        </tr>
        <StatisticsLine text={"Good"} value={good} />
        <StatisticsLine text={"Neutral"} value={neutral} />
        <StatisticsLine text={"Bad"} value={bad} />
        <StatisticsLine text={"Total"} value={total} />
        <StatisticsLine
          text={"Average"}
          value={(good * 1 + neutral * 0 + bad * -1) / total}
        />
        <StatisticsLine
          text={"Positive Percentage"}
          value={`${(good / total) * 100} %`}
        />
      </table>
    );
  }
  return <p>No feedback given</p>;
};

const StatisticsLine = ({ text, value }) => {
  return (
    <tr>
      <td style={{ backgroundColor: "#e8e8e8", border: "1px solid" }}>
        {text}
      </td>
      <td style={{ backgroundColor: "#e8e8e8", border: "1px solid" }}>
        {value}
      </td>
    </tr>
  );
};

const Button = ({ text, setValue, newValue }) => {
  return (
    <button
      onClick={() => {
        setValue(newValue);
      }}
    >
      {text}
    </button>
  );
};
const App = () => {
  const [good, SetGood] = useState(0);
  const [neutral, SetNeutral] = useState(0);
  const [bad, SetBad] = useState(0);
  const [total, setTotal] = useState(0);

  const updateGood = (newValue) => {
    SetGood(newValue);
    setTotal(newValue + neutral + bad);
  };

  const updateNeutral = (newValue) => {
    SetNeutral(newValue);
    setTotal(good + newValue + bad);
  };

  const updateBad = (newValue) => {
    SetBad(newValue);
    setTotal(good + neutral + newValue);
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text={"Good"} setValue={updateGood} newValue={good + 1} />
      <Button
        text={"Neutral"}
        setValue={updateNeutral}
        newValue={neutral + 1}
      />
      <Button text={"Bad"} setValue={updateBad} newValue={bad + 1} />
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
    </div>
  );
};

export default App;
