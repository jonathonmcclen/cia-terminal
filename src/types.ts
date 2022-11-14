export interface ContextStructure {
  playerInput: string;
  username: string;
  password: string;
  correctResponse: boolean;
  gameStarted: boolean;
  gameEnded: boolean;
  gameWon: boolean;
  gameLost: boolean;
  currentPuzzle: number;
  currentPuzzleIndex: number;
}

export interface Context {
  gameState: ContextStructure;
  setGameState: React.Dispatch<React.SetStateAction<ContextStructure>>;
  lastInput?: string;
  setCurrentExpectedInput: React.Dispatch<React.SetStateAction<string>>;
}

// export interface Dialog {
//   id: number;
//   dialog: {
//     expectedInput: string[] | string;
//     responses: Responses;
//   };
// }

// interface Responses {
//   successResponse?: string[];
//   failureResponse?: string[];
// }