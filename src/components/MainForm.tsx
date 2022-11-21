import React, { useEffect, useState, useContext } from 'react';
import { GameContext } from 'contexts/GameContext';
import type { Context } from 'types';

interface Props {
  handleSubmit: (inputValue: string) => void;
}

const MainForm = ({ handleSubmit }: Props) => {
  const { gameState, setGameState } = useContext(GameContext) as Context;
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleSubmit(inputValue);
        setInputValue('');
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [gameState, handleSubmit, inputValue, setGameState]);

  useEffect(() => {
    const audio = new Audio(
      'https://cia-9d562a98.s3.us-west-1.amazonaws.com/GameAssets/SoundFX/Daffodil362KeyPress.wav'
    );
    audio.volume = 0.6;
    audio.play();
  }, [inputValue]);

  return (
    <form>
      <input
        className="main-input"
        type="text"
        placeholder=" > Type Here"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        aria-label="response-input"
      />
    </form>
  );
};

export default MainForm;
