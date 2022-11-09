import React from 'react';
import { introData } from './introData';
import CIA from 'components/Banners/CIA';

const Intro = () => {
  return (
    <div>
      <CIA />
      {introData.map((data, index) => (
        <div className="banner" key={index}>
          <p aria-label={data.label}>{data.line}</p>
        </div>
      ))}
    </div>
  );
};

export default Intro;
