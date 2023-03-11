import React, { createContext, useState, useEffect, useMemo } from 'react';
import { spacer, outputPrefix } from 'utils';
import 'App.scss';

import {
  failSound,
  readyForInput,
  successSound,
  mainMusic,
} from 'sounds/sounds';

import { puzzle1 } from 'puzzles/puzzle1';
import { puzzle2 } from 'puzzles/puzzle2';
import { puzzle3 } from 'puzzles/puzzle3';
import Intro from 'views/Intro/Intro';
import Dialog from 'components/Dialog';

export const GameContext = createContext({});

export const GameProvider = ({ children }) => {
  const [inputAllowed, setInputAllowed] = useState(true); // used to determine if the user can input
  const [gameHidden, setGameHidden] = useState(false);
  const [inputValue, setInputValue] = useState(''); // player input
  const [game, setGame] = useState([<Intro />]); // game is an array of views
  const [firstLogin, setFirstLogin] = useState(true); // used to determine if the user has logged in for the first time
  const [firstJoke, setFirstJoke] = useState(true); // used to determine if the user has heard the first joke
  const [glitching, setGlitching] = useState(false); // used to determine if the screen is glitching
  const [startTime, setStartTime] = useState(0); // used to determine the start time of the game
  const [gameState, setGameState] = useState({
    // used to store the state of the game
    currentExpectedInput: '',
    lastInput: '',
    playerInput: '',
    gameStarted: false,
    gameEnded: false,
    currentPuzzle: 0,
    currentPuzzleIndex: 0,
    musicPlaying: false,
    currentMusic: mainMusic,
  });

  const decrypts = [
    'https://675849-01928-565650-57039',
    'https://57203-23423-76039-67239',
    'https://a123alibaster990.herokuapp.com/', //alabaster domain
    'https://12406-13796-93659-37402',
    'https://40353-36520-23634-27560',
    'https://66737-26553-26594-46592',
    'https://20693-10782-40621-12479',
    'https://twitter.com/Anonymo00841943',
    'https://17928-05613-01573-57099',
    'https://08958-08678-00000-67409',
    'https://30304-28387-90909-14241',
    'https://20239-68775-00989-83838',
    'https://87665-76501-10129-30483',
    'https://twitter.com/Ax787556086',
    'https://48597-30482-08223-96574',
    'https://40743-98076-44732-12864',
    'https://74646-40332-80653-56392',
    'https://10109-37583-28534-49452',
  ];

  const finalDecrypt = 'https://54759-74729-89454-57570';

  useEffect(() => {
    setStartTime(Date.now());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameState.gameStarted]);

  const timeline = useMemo(
    () => [
      {
        id: 1,
        puzzle: puzzle1(
          gameState.lastInput,
          failSound,
          successSound,
          readyForInput
        ),
      },
      {
        id: 2,
        puzzle: puzzle2(gameState.lastInput, setGlitching),
      },
      {
        id: 3,
        puzzle: puzzle3(
          gameState.lastInput,
          setGlitching,
          failSound,
          successSound,
          readyForInput,
          setGameState,
          gameState,
          setGameHidden
        ),
      },
    ],
    [gameState]
  );

  const incrementPuzzle = (puzzle, puzzleIndex) => {
    setGameState({
      ...gameState,
      currentPuzzle: puzzle,
      currentPuzzleIndex: puzzleIndex,
      currentExpectedInput:
        timeline[puzzle]?.puzzle[puzzleIndex].dialog.expectedInput,
    });
  };

  const nextPuzzle = () => {
    if (gameState.currentPuzzle === 1) {
      setGameState({
        ...gameState,
        currentPuzzle: 2,
        currentPuzzleIndex: 0,
        currentExpectedInput: timeline[2].puzzle[0].dialog.expectedInput,
      });
    } else {
      incrementPuzzle(gameState.currentPuzzle + 1, 0);
    }
  };

  useEffect(() => {
    if (gameState.currentExpectedInput === 'username') {
      const usernameLocal = () => {
        localStorage.setItem('CIAusername', gameState.playerInput);
      };
      usernameLocal();
      setGameState({
        ...gameState,
        playerInput: 'username',
      });
    }

    if (gameState.currentExpectedInput === 'password') {
      const passwordLocal = () => {
        localStorage.setItem('CIApassword', gameState.playerInput);
      };
      passwordLocal();
      setGameState({
        ...gameState,
        playerInput: 'password',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameState.playerInput]);

  useEffect(() => {
    const checkForDecrypt = () => {
      const puzzle = puzzle2().filter(
        (puzzle) => puzzle.dialog.expectedInput === gameState.playerInput
      );
      return puzzle;
    };

    const successResponse = () =>
      timeline[gameState.currentPuzzle].puzzle[
        gameState.currentPuzzleIndex
      ].dialog.responses.successResponse?.map((resp, i) => {
        if (typeof resp === 'string') return resp;
        setTimeout(() => {
          if (typeof resp === 'function') resp();
          if (typeof resp === 'object') return resp;
        }, 1000 * i);
        return null;
      });

    const failureResponse = () =>
      timeline[gameState.currentPuzzle].puzzle[
        gameState.currentPuzzleIndex
      ].dialog.responses.failureResponse?.map((resp, i) => {
        if (typeof resp === 'string') return resp;
        setTimeout(() => {
          if (typeof resp === 'function') resp();
          if (typeof resp === 'object') return resp;
        }, 1000 * i);
        return null;
      });

    const doIncrement = () => {
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
    };

    if (gameState.playerInput.toLowerCase() === 'login' && firstLogin) {
      setGameState({
        ...gameState,
        playerInput: '',
        gameStarted: true,
        musicPlaying: true,
      });
      gameState.musicPlaying
        ? gameState.currentMusic.pause()
        : (gameState.currentMusic.loop = true) && gameState.currentMusic.play();
      setFirstLogin(false);
    }

    if (decrypts.includes(gameState.playerInput)) {
      const thisPuzzle = checkForDecrypt();
      const success = () =>
        thisPuzzle[0].dialog.responses.successResponse.map((resp, i) => {
          if (typeof resp === 'string') return resp;
          setTimeout(() => {
            if (typeof resp === 'function') resp();
            if (typeof resp === 'object') return resp;
          }, 1000 * i);
          return null;
        });
      if (success) {
        setGame([...game, <Dialog response={success()} />]);
      }
    } else if (gameState.playerInput === finalDecrypt) {
      const thisPuzzle = checkForDecrypt();
      const success = () =>
        thisPuzzle[0].dialog.responses.successResponse.map((resp, i) => {
          if (typeof resp === 'string') return resp;
          setTimeout(() => {
            if (typeof resp === 'function') resp();
            if (typeof resp === 'object') return resp;
          }, 1000 * i);
          return null;
        });
      if (success) {
        setGame([...game, <Dialog response={success()} />]);
      }
      nextPuzzle();
    } else if (
      gameState.gameStarted &&
      gameState.playerInput === gameState.currentExpectedInput &&
      gameState.lastInput.toLowerCase() !== 'music' &&
      gameState.playerInput.toLowerCase() !== 'login' &&
      gameState.playerInput.toLowerCase() !== 'hint'
    ) {
      if (successResponse) {
        setGame([...game, <Dialog response={successResponse} />]);
      }
      doIncrement();
    }

    if (
      gameState.gameStarted &&
      gameState.playerInput !== gameState.currentExpectedInput &&
      !decrypts.includes(gameState.playerInput) &&
      gameState.playerInput !== finalDecrypt &&
      gameState.currentExpectedInput !== 'username' &&
      gameState.currentExpectedInput !== 'password' &&
      gameState.lastInput.toLowerCase() !== 'music' &&
      gameState.playerInput.toLowerCase() !== 'login' &&
      gameState.playerInput.toLowerCase() !== 'hint'
    ) {
      if (failureResponse) {
        setGame([...game, <Dialog response={failureResponse} />]);
      }
    }

    if (gameState.playerInput.toLowerCase() === 'hint') {
      setGame([
        ...game,
        <Dialog
          response={[
            `Your hint code is ${timeline[gameState.currentPuzzle].puzzle[
              gameState.currentPuzzleIndex
            ].dialog.hint
            }`,
          ]}
        />,
      ]);
    }

    if (
      gameState.playerInput === 'https://75896-29742-69504-22231' &&
      firstJoke
    ) {
      const joke = [
        `'${gameState.lastInput}'`,
        `${outputPrefix} Decrypting...`,
        'loading',
        `${outputPrefix} Wait...`,
        `${outputPrefix} This is the EXAMPLE`,
        `${outputPrefix} VERY FUNNY, Mr. Funny Guy`,
        spacer,
        `${outputPrefix} ENTER "A REAL" URL TO HACK OR DECRYPT`,
        spacer,
        () => readyForInput.play(),
      ];

      setGame([...game, <Dialog response={joke} />]);
      setFirstJoke(false);
    }

    if (gameState.playerInput === '860743') {
      setGame([<Dialog response={successResponse} />]);
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
        setGame,
        inputValue,
        setInputValue,
        gameHidden,
        startTime,
        inputAllowed,
        setInputAllowed,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
