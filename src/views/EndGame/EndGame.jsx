import React, { useState, useContext, useEffect, useRef } from 'react';
import { GameContext } from 'contexts/GameContext';
import { finalVoiceover } from 'sounds/sounds';
import { rollCredits } from './endGameData';
import Alabaster from 'components/Banners/Alabaster';
import LoadingAnimation from 'components/LoadingAnimation';
import { determineTime } from 'utils';
import 'App.scss';
const alabasterBG =
  'https://esc-room-games.s3.us-west-1.amazonaws.com/Daffodil362/Assets/Grid%202.jpg';

const EndGame = () => {
  const { gameState, setGameState, startTime, setGlitching } =
    useContext(GameContext);

  const [credits, setCredits] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setGlitching(false);
    }, 500);
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  useEffect(() => {
    if (credits.length === rollCredits.length) return;

    if (rollCredits[credits.length] === 'loading') {
      setCredits((credits) => [
        ...credits,
        <React.Fragment key={rollCredits[credits.length]}>
          <LoadingAnimation color={'blue'} />
        </React.Fragment>,
      ]);
    }
    if (rollCredits[credits.length] === 'GAMEPLAY TIME') {
      setCredits((credits) => [
        ...credits,
        <React.Fragment key={rollCredits[credits.length]}>
          <div className="blue-text-line" aria-label="play-time">
            Your time: {determineTime(startTime)} Minutes
          </div>
          <br />
        </React.Fragment>,
      ]);
    } else if (rollCredits[credits.length] === 'USERNAME') {
      setCredits((credits) => [
        ...credits,
        <React.Fragment key={rollCredits[credits.length]}>
          <div className="blue-text-line" aria-label="credits">
            {localStorage.getItem('CIAusername')}
          </div>
          <br />
        </React.Fragment>,
      ]);
    } else {
      const credit = setTimeout(() => {
        setCredits((credits) => [
          ...credits,
          <React.Fragment key={rollCredits[credits.length]}>
            <div
              className="blue-text-line"
              aria-label={rollCredits[credits.length]}
            >
              {rollCredits[credits.length]}
            </div>
            <br />
          </React.Fragment>,
        ]);
      }, 1800);
      return () => clearTimeout(credit);
    }
  }, [credits, startTime]);

  useEffect(() => {
    setGameState({
      ...gameState,
      musicPlaying: true,
      currentMusic: finalVoiceover,
    });
    finalVoiceover.play();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [credits]);

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
        textAlign: 'left',
      }}
    >
      <Alabaster />
      <br />

      <div style={{ overflow: 'auto', height: '100%' }}>
        {credits}
        <div ref={messagesEndRef} style={{height: '20rem'}} />
      </div>
    </div>
  );
};

export default EndGame;
