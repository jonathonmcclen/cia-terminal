const rollDice = () => {
  let dice = Math.floor(Math.random() * 6) + 1;
  return checkDice(dice);
};

const checkDice = (dice) => {
  if (dice === 6) {
    console.log('Well done, move 6 spaces');
  } else {
    console.log('Try again');
  }
};

rollDice();
