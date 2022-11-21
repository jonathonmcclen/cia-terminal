import React, { useContext, useState, useEffect, useMemo } from 'react';
import 'App.scss';

import { GameContext } from 'contexts/GameContext';
import type { Context } from 'types';

import Intro from 'views/Intro/Intro';
import Input from 'components/MainForm';
import { failSound, readyForInput, successSound } from 'sounds/sounds';
import { puzzle1 } from 'puzzles/puzzle1';
import { puzzle2 } from 'puzzles/puzzle2';
import { puzzle3 } from 'puzzles/puzzle3';
import { puzzle4 } from 'puzzles/puzzle4';

function App() {
  const [game, setGame] = useState([<Intro />]);
  const { gameState, setGameState, glitching, setGlitching } = useContext(
    GameContext
  ) as Context;

  const [lastInput, setLastInput] = useState('');

  const handleSubmit = (inputValue: string) => {
    setGameState({ ...gameState, playerInput: inputValue });
    setLastInput(inputValue);
  };

  const timeline = useMemo(
    () => [
      {
        id: 1,
        puzzle: puzzle1(
          lastInput,
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
    [lastInput, gameState.username, gameState.password, gameState.playerInput, setGlitching]
  );

  const [currentExpectedInput, setCurrentExpectedInput] = useState('login');
  console.log(currentExpectedInput);

  useEffect(() => {
    if (
      gameState.playerInput.toLowerCase() === currentExpectedInput
    ) {
      setLastInput(currentExpectedInput);
      setGameState({
        ...gameState,
        currentPuzzleIndex: gameState.currentPuzzleIndex + 1,
        playerInput: '',
      });
      setCurrentExpectedInput(
        timeline[gameState.currentPuzzle].puzzle[gameState.currentPuzzleIndex + 1]
          .dialog.expectedInput
          );
      // setGame([...game, );
    }
  }, [currentExpectedInput, gameState, setGameState, timeline]);

  return (
    <div className="App">
      <div className={`game ${glitching}`}>
        <>
          {game && game}
          <Input handleSubmit={handleSubmit} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {/* {gameState.gameStarted &&
              timeline[gameState.currentPuzzle].puzzle[
                gameState.currentPuzzleIndex
              ]?.dialog?.responses?.successResponse?.map((response, i) => {
                return <div key={i}>{response}</div>;
              })} */}
          </div>
        </>
      </div>
    </div>
  );
}

export default App;
