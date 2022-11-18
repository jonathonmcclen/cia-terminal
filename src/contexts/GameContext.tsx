import { puzzle1 } from 'puzzles/puzzle1';
import { puzzle2 } from 'puzzles/puzzle2';
import { puzzle3 } from 'puzzles/puzzle3';
import { puzzle4 } from 'puzzles/puzzle4';
// import { puzzle4 } from 'puzzles/puzzle4';
import React, { createContext, useState, useEffect } from 'react';

interface Props {
  children: React.ReactNode;
}

export const GameContext = createContext({});

export const GameProvider = ({ children }: Props) => {
  const [lastInput, setLastInput] = useState('');
  const [currentExpectedInput, setCurrentExpectedInput] = useState('login');
  const [glitching, setGlitching] = useState(''); // change to 'glitch' to see glitch effect
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
    },
    {
      id: 3,
      puzzle: puzzle3(lastInput),
    },
    {
      id: 4,
      puzzle: puzzle4(lastInput, setGlitching),
    },
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
      value={{
        gameState,
        setGameState,
        lastInput,
        setCurrentExpectedInput,
        glitching,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
