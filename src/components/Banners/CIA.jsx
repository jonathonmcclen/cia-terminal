import React from 'react';
import 'App.scss';

const bannerTxt = [
  //  ________      ___      ________
  // |\   ____\    |\  \    |\   __  \
  // \ \  \___|    \ \  \   \ \  \|\  \
  //  \ \  \        \ \  \   \ \   __  \
  //   \ \  \____  __\ \  \ __\ \  \ \  \
  //    \ \_______\\__\ \__\\__\ \__\ \__\
  //     \|_______\|__|\|__\|__|\|__|\|__|

  {
    line: '  ________      ___      ________ '.replace(/ /g, '\u00a0'),
    label: '',
    delay: 0,
  },
  {
    line: ' |\\   ____\\    |\\  \\    |\\   __  \\ '.replace(/ /g, '\u00a0'),
    label: '',
    delay: 0,
  },
  {
    line: ' \\ \\  \\___|    \\ \\  \\   \\ \\  \\|\\  \\ '.replace(
      / /g,
      '\u00a0'
    ),
    label: '',
    delay: 0,
  },
  {
    line: '  \\ \\  \\        \\ \\  \\   \\ \\   __  \\ '.replace(
      / /g,
      '\u00a0'
    ),
    label: '',
    delay: 0,
  },
  {
    line: '   \\ \\  \\____  __\\ \\  \\ __\\ \\  \\ \\  \\ '.replace(
      / /g,
      '\u00a0'
    ),
    label: '',
    delay: 0,
  },
  {
    line: '    \\ \\_______\\\\__\\ \\__\\\\__\\ \\__\\ \\__\\ '.replace(
      / /g,
      '\u00a0'
    ),
    label: '',
    delay: 0,
  },
  {
    line: '     \\|_______\\|__|\\|__\\|__|\\|__|\\|__| '.replace(
      / /g,
      '\u00a0'
    ),
    label: '',
    delay: 0,
  },
];

const CIA = () => {
  return (
    <div aria-label="CIA">
      {bannerTxt.map((data, index) => (
        <h1 key={index} aria-hidden="true">
          {data.line}
        </h1>
      ))}
    </div>
  );
};

export default CIA;
