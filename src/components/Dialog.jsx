import React, { useState, useEffect } from 'react';
import LoadingAnimation from './LoadingAnimation';

function Dialog({ response }) {
  const [dialog, setDialog] = useState([]);
  const [rendered, setRendered] = useState([]);

  useEffect(() => {
    setDialog(response);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (dialog.length > 0) {
      let i = 0;
      const interval = setInterval(() => {
        setRendered((prev) => [...prev, dialog[i]]);
        i++;
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [dialog]);

  return <div>{rendered}</div>;
}

export default Dialog;
