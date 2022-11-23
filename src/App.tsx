import React, { useContext, useRef, useEffect } from 'react';
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
    console.log(game);
  };

  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [game]);

  return (
    <div className="App">
      <div className={glitching ? 'game glitch' : 'game'}>
        <>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginBottom: '5rem',
              paddingLeft: '2rem',
            }}
          >
            {game && game.map((view, index) => <div key={index}>{view}</div>)}
            <div ref={messagesEndRef} />
          </div>
          <Input handleSubmit={handleSubmit} />
        </>
      </div>
    </div>
  );
}

export default App;
