import './App.css';
import HelloWorld from './components/HelloWorld'

function App() {
const name = "Kayra"
const url = 'https://via.placeholder.com/150'
  return (
    <div className="App">
      <h1>Alterando o JSX</h1>
      <p>Olá, {name}</p>
      <img src={url} alt="Imagem" />
      <HelloWorld/>
    </div>
  );
}

export default App;
