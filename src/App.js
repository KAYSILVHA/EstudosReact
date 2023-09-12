import './App.css';
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'

function App() {

  const nome = "João"
  return (
    <div className="App">
      <HelloWorld/>
      <SayMyName nome = "Kayra"/>
      <SayMyName nome = "Maria"/>
      <SayMyName nome = {nome}/>
    </div>
  );
}

export default App;
