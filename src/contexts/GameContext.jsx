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
import LoadingAnimation from 'components/LoadingAnimation';
console.log('animation type', typeof LoadingAnimation);

export const GameContext = createContext({});

export const GameProvider = ({ children }) => {
  const [game, setGame] = useState([<Intro />]);
  const [firstLogin, setFirstLogin] = useState(true);
  const [glitching, setGlitching] = useState(false); // change to 'glitch' to see glitch effect
  const [gameState, setGameState] = useState({
    currentExpectedInput: '',
    lastInput: '',
    playerInput: '',
    username: '',
    password: '',
    gameStarted: false,
    gameEnded: false,
    currentPuzzle: 0,
    currentPuzzleIndex: 12,
    musicPlaying: false,
    currentMusic: mainMusic,
  });

  const doLoadingAnimation = () => {
    console.log('doLoadingAnimation');
    return <LoadingAnimation />
  };

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
          readyForInput,
          setGlitching
        ),
      },
      {
        id: 2,
        puzzle: puzzle2(
          gameState.playerInput,
          failSound,
          successSound,
          readyForInput,
          doLoadingAnimation
        ),
      },
      {
        id: 3,
        puzzle: puzzle3(
          gameState.playerInput,
          setGlitching,
          failSound,
          successSound,
          readyForInput,
          doLoadingAnimation
        ),
      },
      {
        id: 4,
        puzzle: puzzle4(
          gameState.playerInput,
          setGlitching,
          failSound,
          successSound,
          readyForInput,
          doLoadingAnimation
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

  const incrementPuzzle = (puzzle, puzzleIndex) => {
    // console.log(gameState.currentPuzzle, gameState.currentPuzzleIndex, gameState.currentExpectedInput);
    setGameState({
      ...gameState,
      currentPuzzle: puzzle,
      currentPuzzleIndex: puzzleIndex,
      currentExpectedInput:
        timeline[puzzle].puzzle[puzzleIndex].dialog.expectedInput,
    });
  };

  useEffect(() => {
    const successResponse = timeline[gameState.currentPuzzle].puzzle[
      gameState.currentPuzzleIndex
    ].dialog.responses.successResponse?.map((resp, i) => {
      if (typeof resp === 'string')
        return (
          <div key={i} style={{ fontSize: '1.5rem' }}>
            {resp}
          </div>
        );
      if (typeof resp === 'function') resp();
      return null;
    });

    const failureResponse = timeline[gameState.currentPuzzle].puzzle[
      gameState.currentPuzzleIndex
    ].dialog.responses.failureResponse?.map((resp, i) => {
      if (typeof resp === 'string')
        return (
          <div key={i} style={{ fontSize: '1.5rem' }}>
            {resp}
          </div>
        );
      if (typeof resp === 'function') resp();
      // if (resp === 'loadingAnimation') {
      //   console.log('boop')
      //   return (
      //     <div key={i} style={{ fontSize: '1.5rem' }}>
      //       <LoadingAnimation />
      //     </div>
      //   );
      // }
      return null;
    });

    if (gameState.playerInput.toLowerCase() === 'login' && firstLogin) {
      setGameState({
        ...gameState,
        playerInput: '',
        gameStarted: true,
        // musicPlaying: true,
      });
      // gameState.musicPlaying
      //   ? gameState.currentMusic.pause()
      //   : (gameState.currentMusic.loop = true) && gameState.currentMusic.play();
      // setFirstLogin(false);
    }

    if (
      gameState.gameStarted &&
      gameState.playerInput === gameState.currentExpectedInput &&
      gameState.playerInput !== 'music' &&
      gameState.playerInput !== 'login' &&
      gameState.playerInput !== 'hint'
    ) {
      if (successResponse) {
        setGame([...game, successResponse]);
      }
      if (
        gameState.currentPuzzleIndex ===
        timeline[gameState.currentPuzzle].puzzle.length - 1
      ) {
        incrementPuzzle(gameState.currentPuzzle + 1, 0);
      } else {
        setGameState((prev) => ({
          ...prev,
          currentPuzzleIndex: prev.currentPuzzleIndex + 1,
          currentExpectedInput:
            timeline[prev.currentPuzzle].puzzle[prev.currentPuzzleIndex + 1]
              .dialog.expectedInput,
        }));
      }
    }

    if (
      gameState.playerInput !== gameState.currentExpectedInput &&
      gameState.playerInput !== 'music' &&
      gameState.playerInput !== 'login' &&
      gameState.playerInput !== 'hint'
    ) {
      if (failureResponse) {
        setGame([...game, failureResponse]);
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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameState.playerInput]);
  console.log(gameState);

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

// if playerInput === currentExpectedInput, add timeline[currentPuzzle].puzzle[currentPuzzleIndex].dialog.response.successResponse to game
// if playerInput !== currentExpectedInput, add timeline[currentPuzzle].puzzle[currentPuzzleIndex].dialog.response.failResponse to game and do not progress the game
// then set currentPuzzleIndex to currentPuzzleIndex + 1
// if currentPuzzleIndex === timeline[currentPuzzle].puzzle.length, set currentPuzzle to currentPuzzle + 1
// if currentPuzzle === timeline.length, set gameEnded to true
// if gameEnded, set game to [<EndGame />]
