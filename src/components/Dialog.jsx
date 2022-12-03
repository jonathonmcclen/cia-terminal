import React, { useState, useEffect, useRef, useContext } from 'react';
import { GameContext } from 'contexts/GameContext';
import LoadingAnimation from './LoadingAnimation';
import 'App.scss';

function Dialog({ response }) {
  const { gameHidden } = useContext(GameContext);
  const [dialog, setDialog] = useState([]);
  const [rendered, setRendered] = useState([]);

  useEffect(() => {
    setDialog(response);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (dialog.length > 0) {
      for (let i = 0; i < dialog.length; i++) {
        setTimeout(() => {
          if (dialog[i] === 'loading') {
            setRendered((prev) => [...prev, <LoadingAnimation key={i} />]);
          } else if (dialog[i].includes('https')) {
            setRendered((prev) => [
              ...prev,
              <a href={dialog[i]} target="_blank" rel="noreferrer" key={i}>
                {dialog[i]}
              </a>,
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
      }
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
