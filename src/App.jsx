import React, { useContext, useRef, useEffect } from 'react';
import 'App.scss';

import { GameContext } from 'contexts/GameContext';
import Input from 'components/MainForm';
import EndGame from 'views/EndGame/EndGame';
import LoadingAnimation from 'components/LoadingAnimation';

function App() {
  const { gameState, setGameState, glitching, game, gameHidden } =
    useContext(GameContext);

  const handleSubmit = (inputValue) => {
    setGameState({
      ...gameState,
      playerInput: inputValue,
      lastInput: inputValue,
    });
  };

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [game]);

  const rebootStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

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
            {game &&
              !gameState.gameEnded &&
              game.map((view, index) => <div key={index}>{view}</div>)}
            {gameState.gameEnded && <EndGame />}
            <div ref={messagesEndRef} />
          </div>
          {!gameState.gameEnded && <Input handleSubmit={handleSubmit} />}
          {gameHidden && (
            <div className="rebooting" style={rebootStyle}>
              <LoadingAnimation />
            </div>
          )}
        </>
      </div>
    </div>
  );
}

export default App;
