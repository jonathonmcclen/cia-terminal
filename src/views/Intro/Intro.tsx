import React, { useContext, useEffect } from 'react';
import { GameContext } from 'contexts/GameContext';
import type { Context } from 'types';
import { introData } from './introData';
import CIA from 'components/Banners/CIA';
import InformationGathering from 'puzzles/InformationGathering';

const Intro = () => {
  const { gameState, setGameState } = useContext(GameContext) as Context;
  
  return (
    <div>
      <CIA />
      {introData.map((data, index) => (
        <div className="banner" key={index}>
          <p aria-label={data.label} className="text-line">{data.line}</p>
        </div>
      ))}
      {gameState.gameStarted && <InformationGathering />}
    </div>
  );
};

export default Intro;
