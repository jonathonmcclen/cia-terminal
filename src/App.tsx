import React, { useContext } from 'react';
import { GameContext } from 'contexts/GameContext';
import type { Context } from 'types';
import Intro from 'views/Intro/Intro';
import Input from 'components/MainForm';
import 'App.scss';

function App() {
  const { gameState, setGameState, glitching } = useContext(GameContext) as Context;

  const handleSubmit = (inputValue: string) => {
    setGameState({ ...gameState, playerInput: inputValue });
  };

  return (
    <div className="App">
      <div className={`game ${glitching}`}>
        {gameState.currentPuzzle === 0 && <Intro />}
        <Input handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default App;
