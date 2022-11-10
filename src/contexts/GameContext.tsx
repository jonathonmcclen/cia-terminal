import React, { createContext, useState, useEffect } from 'react';

interface Props {
  children: React.ReactNode;
}

export const GameContext = createContext({});

export const GameProvider = ({ children }: Props) => {
  const [lastInput, setLastInput] = useState('');
  const [currentExpectedInput, setCurrentExpectedInput] = useState('login');
  const [gameState, setGameState] = useState({
    playerInput: '',
    username: '',
    password: '',
    correctResponse: false,
    gameStarted: false,
    gameEnded: false,
    gameWon: false,
    gameLost: false,
    currentPuzzle: 0,
    currentPuzzleIndex: 0,
  });

  useEffect(() => {
    if (gameState.playerInput.toLowerCase() === currentExpectedInput) {
      setLastInput(currentExpectedInput);
      setGameState({
        ...gameState,
        gameStarted: true,
        playerInput: '',
      });
    }
  }, [currentExpectedInput, gameState]);

  return (
    <GameContext.Provider
      value={{ gameState, setGameState, lastInput, setCurrentExpectedInput }}
    >
      {children}
    </GameContext.Provider>
  );
};
