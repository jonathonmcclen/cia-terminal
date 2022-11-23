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
    setGameState({
      ...gameState,
      playerInput: inputValue,
      lastInput: inputValue,
    });
    console.log(game)
  };

  return (
    <div className="App">
      <div className={glitching ? 'game glitch' : 'game'}>
        <>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginBottom: '75px',
            }}
          >
            {game && game.map((view, index) => <div key={index}>{view}</div>)}
          </div>
          <Input handleSubmit={handleSubmit} />
        </>
      </div>
    </div>
  );
}

export default App;
