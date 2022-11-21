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

export const GameContext = createContext({});

export const GameProvider = ({ children }: Props) => {
  const [game, setGame] = useState([<Intro />]);
  const [glitching, setGlitching] = useState(''); // change to 'glitch' to see glitch effect
  const [gameState, setGameState] = useState({
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
  }, [gameState]);

  useEffect(() => {
    const nextPuzzleCheck = () => {
      if (
        gameState.currentPuzzleIndex ===
        timeline[gameState.currentPuzzle].puzzle.length
      ) {
        setGameState({
          ...gameState,
          currentPuzzle: gameState.currentPuzzle + 1,
        });
      }
      if (gameState.currentPuzzle === timeline.length) {
        setGameState({ ...gameState, gameEnded: true });
      }
      if (gameState.gameEnded) {
        setGame([<EndGame />]);
      }
    };

    console.log('from beginning of useEffect');
    // if playerInput === currentExpectedInput, add timeline[currentPuzzle].puzzle[currentPuzzleIndex].dialog.response.successResponse to game
    // if playerInput !== currentExpectedInput, add timeline[currentPuzzle].puzzle[currentPuzzleIndex].dialog.response.failResponse to game and do not progress the game
    // then set currentPuzzleIndex to currentPuzzleIndex + 1
    // if currentPuzzleIndex === timeline[currentPuzzle].puzzle.length, set currentPuzzle to currentPuzzle + 1
    // if currentPuzzle === timeline.length, set gameEnded to true
    // if gameEnded, set game to [<EndGame />]

    if (gameState.playerInput.toLowerCase() === 'login') {
      console.log('from login');
      setGameState({
        ...gameState,
        gameStarted: true,
        // playerInput: '',
      });
    }

    if (gameState.gameStarted) {
      console.log('from gameStarted');
      if (!gameState.musicPlaying) {
        (gameState.currentMusic.loop = true) && gameState.currentMusic.play();
        setGameState({ ...gameState, musicPlaying: true });
      }

      // * NOTE: We are never passing this check for some reason
      console.log('from gameStarted, before input check');
      if (
        gameState.playerInput.toLowerCase() ===
        gameState.currentExpectedInput.toLowerCase()
      ) {
        console.log('from input check');
        setGame([
          ...game,
          <div>
            {timeline[gameState.currentPuzzle].puzzle[
              gameState.currentPuzzleIndex
            ].dialog.responses.successResponse?.map((response, index) => (
              <div key={index}>{response}</div>
            ))}
          </div>,
        ]);

        nextPuzzleCheck();

        setGameState({
          ...gameState,
          currentPuzzleIndex: gameState.currentPuzzleIndex + 1,
          currentExpectedInput:
            timeline[gameState.currentPuzzle].puzzle[
              gameState.currentPuzzleIndex
            ].dialog.expectedInput,
        });
      } else {
        setGame([
          ...game,
          <div>
            {timeline[gameState.currentPuzzle].puzzle[
              gameState.currentPuzzleIndex
            ].dialog.responses.failureResponse?.map((response, index) => (
              <div key={index}>{response}</div>
            ))}
          </div>,
        ]);
      }
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
    // console.log(
    //   'puzzle',
    //   gameState.currentPuzzle,
    //   'index',
    //   gameState.currentPuzzleIndex,
    //   'last input',
    //   gameState.lastInput,
    //   'current input',
    //   gameState.playerInput,
    //   'correct response',
    //   gameState.currentExpectedInput
    // );
  }, [gameState, timeline]);

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
