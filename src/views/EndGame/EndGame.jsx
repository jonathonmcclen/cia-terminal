import React, { useState, useContext, useEffect } from 'react';
import { GameContext } from 'contexts/GameContext';
import { alabasterMusic } from 'sounds/sounds';
import { endData } from './endGameData';
import Alabaster from 'components/Banners/Alabaster';
import 'App.scss';
const alabasterBG =
  'https://esc-room-games.s3.us-west-1.amazonaws.com/Daffodil362/Assets/Grid%202.jpg';

const EndGame = () => {
  const [alibaster, setAlabaster] = useState(false);
  const { gameState, setGameState } = useContext(GameContext);

  useEffect(() => {
    // setInputAllowed(true);
    setGameState({
      ...gameState,
      musicPlaying: true,
      currentMusic: alabasterMusic,
    });
    (alabasterMusic.loop = true) && alabasterMusic.play();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setAlabaster(true);
    }
  };

  if (alibaster)
    return (
      <div
        style={{
          position: 'fixed',
          top: '0',
          left: '0',
          background: `url(${alabasterBG})`,
          backgroundSize: 'cover',
          height: '100vh',
          width: '100vw',
          paddingLeft: '2rem',
        }}
      >
        <>
          <Alabaster className="blue-banner" />
          <br />
          {endData.map((data, index) => (
            <React.Fragment key={index}>
              <div className="blue-text-line" aria-label={data.label}>
                {data.line}
              </div>
              <br />
            </React.Fragment>
          ))}
        </>
      </div>
    );
  else
    return (
      <div
        style={{
          position: 'fixed',
          top: '0',
          left: '0',
          background: `url(${alabasterBG})`,
          backgroundSize: 'cover',
          height: '100vh',
          width: '100vw',
          paddingLeft: '2rem',
        }}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        className="blue-text-line"
      >
        Here is some instruction or whatever. Press ENTER to continue...
      </div>
    );
};

export default EndGame;
