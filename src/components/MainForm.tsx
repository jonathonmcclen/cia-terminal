import React, { useEffect, useState } from 'react';

interface Props {
  handleSubmit: (inputValue: string) => void;
}

const MainForm = ({ handleSubmit }: Props) => {
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
  }, [handleSubmit, inputValue]);

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
      />
    </form>
  );
};

export default MainForm;
