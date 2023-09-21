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

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "123456789" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

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
      <h2>Phonebook</h2>
      <form>
        <div>
          <Input text={"Name"} value={newName} setValue={setNewName} />
          <Input text={"Number"} value={newNumber} setValue={setNewNumber} />
        </div>
        <div>
          <button type="submit" onClick={handleSubmit}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <div key={person.name}>
          {person.name} | {person.number}
        </div>
      ))}
    </div>
  );
};

export default App;
