import './App.css';
import { useState } from 'react';
import Start from './components/Start';
import Game from './components/Game';
import Timer from './components/Timer'
import Score from './components/Score'

function App() {

  const [remainingTime, setRemainingTime] = useState(1200)


  return (
    <div className="App">
      <header className="App-header">
      <h1>Guac-A-Mole!</h1>
      </header>
      <main className="container-game">
        <Start />
        <div>
          <Timer />
          <Score />
        </div>
        <Game />
        

      </main>
    </div>
  );
}

export default App;
