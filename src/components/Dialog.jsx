import React, { useState, useEffect } from 'react';
import LoadingAnimation from './LoadingAnimation';
import 'App.scss';

function Dialog({ response }) {
  const [dialog, setDialog] = useState([]);
  const [rendered, setRendered] = useState([]);

  useEffect(() => {
    setDialog(response);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (dialog.length > 0) {
      for (let i = 0; i < dialog.length; i++) {
        // eslint-disable-next-line no-loop-func
        setTimeout(() => {
          console.log(dialog[i], typeof dialog[i]);
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

  return <div>{rendered}</div>;
}

export default Dialog;
