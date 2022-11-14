import { puzzle1 } from 'puzzles/puzzle1';
import { puzzle2 } from 'puzzles/puzzle2';
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

  const timeline = [
    {
      id: 1,
      puzzle: puzzle1(lastInput, gameState.username, gameState.password),
      puzzleIndex: 0,
    },
    {
      id: 2,
      puzzle: puzzle2(lastInput),
      puzzleIndex: 1,
    }
  ];

  // useEffect(() => {
  //   if (gameState.playerInput.toLowerCase() === currentExpectedInput) {
  //     setLastInput(currentExpectedInput);
  //     setGameState({
  //       ...gameState,
  //       gameStarted: true,
  //       playerInput: '',
  //     });
  //   }
  // }, [currentExpectedInput, gameState]);

  return (
    <GameContext.Provider
      value={{ gameState, setGameState, lastInput, setCurrentExpectedInput }}
    >
      {children}
    </GameContext.Provider>
  );
};
