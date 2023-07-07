import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Header from './Components/Header';



function App() {
  return (
    <div className="App">
      <Header/>
      <button className="btn btn-success">SAVE</button>
    </div>
  );
}

export default App;
