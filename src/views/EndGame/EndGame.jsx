import React, { useContext } from 'react';
import { GameContext } from 'contexts/GameContext';
// import { introData } from './introData';
import CIA from 'components/Banners/CIA';
// import Puzzle1 from 'puzzles/puzzle1';

const EndGame = () => {
  const { gameState } = useContext(GameContext);

  return (
    <div>
      <CIA />
      END!
      {/* {EndGameData.map((data, index) => (
        <div className="banner" key={index}>
          <p aria-label={data.label} className="text-line">
            {data.line}
          </p>
        </div>
      ))} */}
      {/* {gameState.gameStarted && <Puzzle1 />} */}
    </div>
  );
};

export default EndGame;
