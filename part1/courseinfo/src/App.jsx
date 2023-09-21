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
      {props.parts.map((prop) => (
        <Part key={prop.id} part={prop.name} excercise={prop.exercises} />
      ))}
    </div>
  );
};

const Total = (props) => {
  // console.log(props.parts);
  const total = props.parts.reduce((acc, { exercises }) => {
    // console.log(acc, exercises);
    return acc + exercises;
  }, 0);
  return <strong>Number of exercises {total}</strong>;
};

const Course = ({ courses }) => {
  console.log(courses);
  return (
    <>
      {courses.map((course) => (
        <div key={course.id}>
          <Header course={course} />
          <Content parts={course.parts} />
          <Total parts={course.parts} />
        </div>
      ))}
    </>
  );
};

const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
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
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return <Course courses={courses} />;
};

export default App;
