import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

// import data from './data';
import List from "./List";
import NewBirth from "./NewBirth";

function App() {
  const [people, setPeople] = useState([]);
  const [refetchFlag, setRefetchFlag] = useState(false);
  // to add the data: useState(data + import component)

  //toggle reminder
  const toggleReminder = (id) => {
    setPeople(
      people.map((person) =>
        person.id === id ? { ...person, reminder: !person.reminder } : person
      )
    );
  };
  //{... person, reminder: ! person.reminder} = set up the reminder of the full person properties (...person) to the opposite of what it is normally (if it is false to true
  //and if it true to false). Normally is false so it will be true.

  // delete a birthday
  const deleteBirthday = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };

  const refetchBirthdays = () => {
    setRefetchFlag(!refetchFlag);
  };

  const url = "http://localhost:8000/birthday";

  useEffect(() => {
    const source = axios.CancelToken.source();
    axios
      .get(url, {
        cancelToken: source.token,
      })
      .then((res) => res.data)
      .then((data) => setPeople(data)) // Replace "setState" with the name of your setState function
      .catch((err) => {
        console.error(err);
      });
    return () => {
      source.cancel("Component got unmounted");
    };
  }, [refetchFlag]);

  return (
    <main>
      <section className="container">
        <NewBirth
          people={people}
          setPeople={setPeople}
          refetchFlag={refetchFlag}
          setRefetchFlag={setRefetchFlag}
        />
        <h3>{people.length} birthdays today</h3>
        <List
          refetchBirthdays={refetchBirthdays}
          people={people}
          onToggle={toggleReminder}
          onDelete={deleteBirthday}
        />
        <button onClick={() => setPeople([])}>Clear all</button>
      </section>
    </main>
  );
}

export default App;
