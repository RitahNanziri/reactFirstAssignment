import logo from './CHANGE COLOR_2.png';
import './App.css';
import Essay from './components/essay';
import ShoppingList from './components/shoppingList';
import StudentTable from './components/table';
import Car from './components/carComponents';
import Gallery from './components/gallery';
import Form from './components/events/foam';
import FootballTeam from './components/events/football';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Ritah's  <code>Easter</code> Shopping List.
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <ShoppingList name="Easter"/>
      <Essay name="Profile"/>
      <StudentTable name= "Students"/>
      <Car name= "Carcomponents"/>
      <Gallery name="myGallery"/>
      <Form name="signupfoam"/>
      <FootballTeam name="team"/>
    </div>
  );
}

export default App;
