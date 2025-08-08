import './App.css';
import HelloWorld from './components/HelloWorld';
import Frase from './components/Frase';
import DigaMeuNome from './components/DigaMeuNome';


function App() {
  return (
    <div className="App">
      <h1> Meu app React</h1>
      
      <HelloWorld />
      <Frase />
      <DigaMeuNome nome ="Zaia"/>
      <p>Outro paragrafo</p>
    </div>
  );
}

export default App;
