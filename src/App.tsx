import React, { useContext } from 'react';
import 'App.scss';

import { GameContext } from 'contexts/GameContext';
import type { Context } from 'types';

import Input from 'components/MainForm';

function App() {
  const { gameState, setGameState, glitching, game } = useContext(
    GameContext
  ) as Context;

  const handleSubmit = (inputValue: string) => {
    setGameState({ ...gameState, playerInput: inputValue, lastInput: inputValue });
  };

  return (
    <div className="App">
      <div className={`game ${glitching}`}>
        <>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {game && game.map((view, index) => <div key={index}>{view}</div>)}
          </div>
          <Input handleSubmit={handleSubmit} />
        </>
      </div>
    </div>
  );
}

export default App;
