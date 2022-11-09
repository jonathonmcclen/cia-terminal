import React, { createContext, useState, useEffect } from 'react';

interface Props {
  children: React.ReactNode;
}

export const GameContext = createContext({});

export const GameProvider = ({ children }: Props) => {
  const [gameState, setGameState] = useState({
    playerInput: '',
    username: '',
    gameStarted: false,
    gameEnded: false,
    gameWon: false,
    gameLost: false,
    currentPuzzle: 0,
    currentPuzzleIndex: 0,
  });

  useEffect(() => {
    console.log(gameState);
  }, [gameState]);

  return (
    <GameContext.Provider value={{ gameState, setGameState }}>
      {children}
    </GameContext.Provider>
  );
};
