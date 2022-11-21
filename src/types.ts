import { ReactNode } from 'react';

export interface ContextStructure {
  currentExpectedInput: string;
  lastInput: string;
  playerInput: string;
  username: string;
  password: string;
  gameStarted: boolean;
  gameEnded: boolean;
  currentPuzzle: number;
  currentPuzzleIndex: number;
  musicPlaying: boolean;
  currentMusic: any;
}

export interface Context {
  gameState: ContextStructure;
  setGameState: React.Dispatch<React.SetStateAction<ContextStructure>>;
  glitching: boolean;
  setGlitching: React.Dispatch<React.SetStateAction<string>>;
  game: ReactNode[];
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
