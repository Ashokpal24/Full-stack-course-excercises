import { useState } from "react";

const Input = ({ text, value, setValue }) => {
  const handleFieldChange = (event) => {
    console.log(event.target.value);
    setValue(event.target.value);
  };
  return (
    <>
      <div>
        {text}: <input value={value} onChange={handleFieldChange} />
      </div>
      <br />
    </>
  );
};

const Button = ({
  newName,
  setNewName,
  newNumber,
  setNewNumber,
  persons,
  setPersons,
}) => {
  const handleSubmit = (event) => {
    if (persons.filter((person) => person.name === newName).length > 0) {
      alert(`${newName} is already added to phonebook`);
    } else {
      event.preventDefault();
      const newObject = { name: newName, number: newNumber };
      setPersons(persons.concat(newObject));
      setNewName("");
      setNewNumber("");
    }
  };

  return (
    <div>
      <button type="submit" onClick={handleSubmit}>
        add
      </button>
    </div>
  );
};

const Display = ({ personToShow }) => {
  return (
    <>
      {personToShow.map((person) => (
        <div key={person.name}>
          {person.name} | {person.number}
        </div>
      ))}
    </>
  );
};

const Form = ({
  newName,
  setNewName,
  newNumber,
  setNewNumber,
  persons,
  setPersons,
}) => {
  return (
    <>
      <Input text={"Name"} value={newName} setValue={setNewName} />
      <Input text={"Number"} value={newNumber} setValue={setNewNumber} />
      <Button
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        persons={persons}
        setPersons={setPersons}
      />
    </>
  );
};
const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterName, setFilterName] = useState("");

  // filter on every reload
  const filteredArray = persons.filter((person) => {
    console.log(person.name.toLowerCase().includes(filterName));
    return person.name.toLowerCase().includes(filterName);
  });

  const personToShow = filteredArray.length > 0 ? filteredArray : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <Input text={"Filter"} value={filterName} setValue={setFilterName} />
      <Form
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        persons={persons}
        setPersons={setPersons}
      />
      <h3>Numbers</h3>
      <Display personToShow={personToShow} />
    </div>
  );
};

export default App;
