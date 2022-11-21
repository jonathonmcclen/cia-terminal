import React, { createContext, useState, useEffect } from 'react';

import { mainMusic, intenseMusic } from 'sounds/sounds';

interface Props {
  children: React.ReactNode;
}

export const GameContext = createContext({});

export const GameProvider = ({ children }: Props) => {
  const [glitching, setGlitching] = useState(''); // change to 'glitch' to see glitch effect
  const [gameState, setGameState] = useState({
    playerInput: '',
    username: '',
    password: '',
    correctResponse: false,
    gameStarted: false,
    gameEnded: false,
    currentPuzzle: 0,
    currentPuzzleIndex: 0,
    musicPlaying: false,
    currentMusic: mainMusic,
  });

  useEffect(() => {
    console.log(gameState);
  }, [gameState]);

  useEffect(() => {
    if (gameState.playerInput.toLowerCase() === 'login') {
      setGameState({
        ...gameState,
        playerInput: '',
        gameStarted: true,
        musicPlaying: true,
      });
      (gameState.currentMusic.loop = true) && gameState.currentMusic.play();
    }

    if (gameState.playerInput.toLowerCase() === 'music') {
      setGameState({
        ...gameState,
        playerInput: '',
        musicPlaying: !gameState.musicPlaying,
      });
      gameState.musicPlaying
        ? gameState.currentMusic.pause()
        : (gameState.currentMusic.loop = true) && gameState.currentMusic.play();
    }

    if (gameState.currentPuzzle === 4) {
      setGameState({
        ...gameState,
        currentMusic: intenseMusic,
      });
    }
  }, [gameState]);

  return (
    <GameContext.Provider
      value={{
        gameState,
        setGameState,
        glitching,
        setGlitching,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
