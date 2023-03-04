import React, { useState, useEffect, useRef, useContext } from 'react';
import { GameContext } from 'contexts/GameContext';
import LoadingAnimation from './LoadingAnimation';
import { outputPrefix } from 'utils';
import 'App.scss';

function Dialog({ response }) {
  const { gameHidden, setInputAllowed } = useContext(GameContext);
  const [dialog, setDialog] = useState([]);
  const [rendered, setRendered] = useState([]);

  useEffect(() => {
    setDialog(response);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  useEffect(() => {
    let lineCount = 0
    setInputAllowed(false);
    if (dialog.length > 0) {
      for (let i = 0; i < dialog.length; i++) {
        setTimeout(() => {
          if (dialog[i] === 'loading') {
            setRendered((prev) => [...prev, <LoadingAnimation key={i} />]);
          } else if (dialog[i].includes('https')) {
            setRendered((prev) => [
              ...prev,
              <span className="text-line" key={i}>
                {outputPrefix}{' '}
                <a href={dialog[i]} target="_blank" rel="noreferrer">
                  {dialog[i]}
                </a>
              </span>,
            ]);
          } else {
            setRendered((prev) => [
              ...prev,
              <div key={i} className="text-line">
                {dialog[i]}
              </div>,
            ]);
          }
        }, 1000 * i);
        lineCount = i * 1000
      }
    }
    if (dialog.length > 0) {
      setTimeout(() => {
        setInputAllowed(true);
      }, lineCount);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dialog]);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [rendered]);

  return (
    <>
      <div style={{ opacity: gameHidden ? '0' : '1' }}>{rendered}</div>
      <div ref={messagesEndRef} />
    </>
  );
}

export default Dialog;
