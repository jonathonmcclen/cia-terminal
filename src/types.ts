export interface ContextStructure {
  username: string;
  gameStarted: boolean;
  gameEnded: boolean;
  gameWon: boolean;
  gameLost: boolean;
  currentPuzzle: number;
  currentPuzzleIndex: number;
  playerInput: string;
}

export interface Context {
  gameState: ContextStructure;
  setGameState: React.Dispatch<React.SetStateAction<ContextStructure>>;
}
