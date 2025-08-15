import './App.css';
import NavBar from './_components/NavBar';
import Profile from './_components/Profile';
import Card from './_components/Card';
import Skills from './_components/Skills';


const img = './my-portfolio/src/img/background.png'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Card/><br></br>
      <Skills/>
    </div>
  );
}

export default App;
