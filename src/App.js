import {useState} from 'react';
import './App.css';
// import data from './data';
import List from './List';
import NewBirth from './NewBirth';

function App() {
  const[people, setPeople] = useState([])
  // to add the data: useState(data + import component)


        //toggle reminder
    const toggleReminder = (id) => {
        setPeople(people.map((person)=> person.id === id ? {... person, reminder: ! person.reminder} : person))
    }
    //{... person, reminder: ! person.reminder} = set up the reminder of the full person properties (...person) to the opposite of what it is normally (if it is false to true 
    //and if it true to false). Normally is false so it will be true.


    // delete a birthday
    const deleteBirthday = (id) => {
      setPeople(people.filter((person) => person.id !== id))
    }

  return (
    <main>
    <section className="container">
       <NewBirth people={people} setPeople={setPeople}/>
     <h3>{people.length} birthdays today</h3>
     <List people={people} onToggle={toggleReminder} onDelete={deleteBirthday}/>
     <button onClick={()=> setPeople([])}>Clear all</button>
    </section>
    </main>
  );
}

export default App;
