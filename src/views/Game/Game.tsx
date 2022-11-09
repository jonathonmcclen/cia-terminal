import React, { useContext } from 'react';
import { GameContext } from 'contexts/GameContext';

import type { Context } from 'types';

const Game = () => {
  const { gameState, setGameState } = useContext(GameContext) as Context;

  return (
    <div>
      <h1>Game</h1>
    </div>
  );
};

export default Game;
