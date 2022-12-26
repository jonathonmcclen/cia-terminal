export const userInputPrefix = 'C:\\User\\input';
export const outputPrefix = 'C:\\Output';
export const spacer =
  '..........................................................';

export const determineTime = (time) => {
  const now = new Date();
  const then = new Date(time);
  const diff = now - then;
  const minutes = Math.floor(diff / 1000 / 60);
  return minutes;
}
