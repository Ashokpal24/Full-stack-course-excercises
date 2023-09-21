const Header = (props) => {
  // console.log(props);
  return <h1>{props.course.name}</h1>;
};

const Part = (props) => {
  // console.log(props);
  return (
    <p>
      {props.part} {props.excercise}
    </p>
  );
};

const Content = (props) => {
  // console.log(props);
  return (
    <div>
      <Part part={props.parts[0].name} excercise={props.parts[0].exercises} />
      <Part part={props.parts[1].name} excercise={props.parts[1].exercises} />
      <Part part={props.parts[2].name} excercise={props.parts[2].exercises} />
    </div>
  );
};

const Total = (props) => {
  // console.log(props);
  return (
    <strong>
      Number of exercises{" "}
      {props.parts[0].exercises +
        props.parts[1].exercises +
        props.parts[2].exercises}
    </strong>
  );
};

const Course = (props) => {
  return (
    <>
      <Header course={props.course} />
      <Content parts={props.course.parts} />
      <Total parts={props.course.parts} />
    </>
  );
};
const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
    ],
  };

  return <Course course={course} />;
};

export default App;
