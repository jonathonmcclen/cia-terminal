import React, { createContext, useState, useEffect, useMemo } from 'react';

import {
  failSound,
  readyForInput,
  successSound,
  mainMusic,
  intenseMusic,
} from 'sounds/sounds';

import { puzzle1 } from 'puzzles/puzzle1';
import { puzzle2 } from 'puzzles/puzzle2';
import { puzzle3 } from 'puzzles/puzzle3';
import { puzzle4 } from 'puzzles/puzzle4';
import Intro from 'views/Intro/Intro';
import EndGame from 'views/EndGame/EndGame';

interface Props {
  children: React.ReactNode;
}

interface GameStateObject {
  currentExpectedInput: string;
  lastInput: string;
  playerInput: string;
  username: string;
  password: string;
  gameStarted: boolean;
  gameEnded: boolean;
  currentPuzzle: number;
  currentPuzzleIndex: number;
  musicPlaying: boolean;
  currentMusic: HTMLAudioElement;
}

export const GameContext = createContext({});

export const GameProvider: React.FC<Props> = ({ children }) => {
  const [game, setGame] = useState([<Intro />]);
  const [glitching, setGlitching] = useState(false); // change to 'glitch' to see glitch effect
  const [gameState, setGameState] = useState<GameStateObject>({
    currentExpectedInput: 'login',
    lastInput: '',
    playerInput: '',
    username: '',
    password: '',
    gameStarted: false,
    gameEnded: false,
    currentPuzzle: 0,
    currentPuzzleIndex: 0,
    musicPlaying: false,
    currentMusic: mainMusic,
  });

  const timeline = useMemo(
    () => [
      {
        id: 1,
        puzzle: puzzle1(
          gameState.lastInput,
          gameState.username,
          gameState.password,
          failSound,
          successSound,
          readyForInput
        ),
      },
      {
        id: 2,
        puzzle: puzzle2(
          gameState.playerInput,
          failSound,
          successSound,
          readyForInput
        ),
      },
      {
        id: 3,
        puzzle: puzzle3(
          gameState.playerInput,
          setGlitching,
          failSound,
          successSound,
          readyForInput
        ),
      },
      {
        id: 4,
        puzzle: puzzle4(
          gameState.playerInput,
          setGlitching,
          failSound,
          successSound,
          readyForInput
        ),
      },
    ],
    [
      gameState.lastInput,
      gameState.username,
      gameState.password,
      gameState.playerInput,
      setGlitching,
    ]
  );

  useEffect(() => {
    console.log(gameState);

    const response = timeline[gameState.currentPuzzle].puzzle[
      gameState.currentPuzzleIndex
    ].dialog.responses.successResponse?.map((resp, index) => {
      if (typeof resp === 'string') {
        return <div key={index}>{resp}</div>;
      }

      if (typeof resp === 'function') {
        resp();
      }

      return null;
    });

    // if playerInput === currentExpectedInput, add timeline[currentPuzzle].puzzle[currentPuzzleIndex].dialog.response.successResponse to game
    // if playerInput !== currentExpectedInput, add timeline[currentPuzzle].puzzle[currentPuzzleIndex].dialog.response.failResponse to game and do not progress the game
    // then set currentPuzzleIndex to currentPuzzleIndex + 1
    // if currentPuzzleIndex === timeline[currentPuzzle].puzzle.length, set currentPuzzle to currentPuzzle + 1
    // if currentPuzzle === timeline.length, set gameEnded to true
    // if gameEnded, set game to [<EndGame />]

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameState.playerInput]);

  return (
    <GameContext.Provider
      value={{
        gameState,
        setGameState,
        glitching,
        setGlitching,
        game,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
