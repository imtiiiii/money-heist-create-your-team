
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">
      {/* /* calling header from header component folder  */}
      < Header ></Header>
      <main>
        {/* calling shop from shop component */}
        <Shop></Shop>
      </main>
    </div >
  );
}

export default App;
