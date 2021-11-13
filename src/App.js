import logo from './logo.svg';
import './App.css';
import data from './data';
import List from './List';

function App() {
  return (
    <main>
    <section className="container">
     <h3>0 birthdays today</h3>
     <List />
     <button onClick={()=> console.log('you clicked me')}>Clear all</button>
    </section>
    </main>
  );
}

export default App;
