import React, { useContext } from 'react';
import { GameContext } from 'contexts/GameContext';
import Intro from 'views/Intro/Intro';
import Input from 'components/MainForm';
import 'App.scss';

import type { Context } from 'types';

function App() {
  const { gameState, setGameState } = useContext(GameContext) as Context;

  const handleSubmit = (inputValue: string) => {
    setGameState({ ...gameState, playerInput: inputValue });
  };

  return (
    <div className="App">
      <Intro />
      <Input handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
