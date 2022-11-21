import { ReactNode } from 'react';

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
  glitching: boolean;
  setGlitching: React.Dispatch<React.SetStateAction<string>>;
}

export interface Dialog {
  id: number;
  dialog: {
    expectedInput: string;
    hint: string;
    responses: {
      successResponse?: Success;
      failureResponse?: Fail;
    };
  };
}

type Success = (void | Element | ReactNode | (() => Promise<void>))[];
type Fail = (void | Element | ReactNode | (() => Promise<void>))[];
