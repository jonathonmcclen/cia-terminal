import React from 'react';
import { introData } from './introData';
import CIA from 'components/Banners/CIA';
import 'App.scss';
// import Puzzle1 from 'puzzles/puzzle1';

const Intro = () => {

  return (
    <>
      <CIA />
      {introData.map((data, index) => (
        <div key={index} className="text-line" aria-label={data.label}>
          {data.line}
        </div>
      ))}
    </>
  );
};

export default Intro;
