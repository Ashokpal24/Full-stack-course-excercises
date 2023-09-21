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
export default Course;
