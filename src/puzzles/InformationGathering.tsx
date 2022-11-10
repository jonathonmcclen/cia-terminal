import React, { useContext, useEffect } from 'react';
import { GameContext } from 'contexts/GameContext';
import type { Context, Dialog } from 'types';

const userInputPrefix = 'C:\\user\\input';
const outputPrefix = 'C:\\output';
const spacer = '..........................................................';

const InformationGathering = () => {
  const { gameState, lastInput, setCurrentExpectedInput } =
    useContext(GameContext) as Context;

  const informationGatheringDialog: Dialog[] = [
    {
      id: 1,
      dialog: {
        expectedInput: 'login',
        responses: {
          successResponse: [
            `${userInputPrefix} '${lastInput}'`,
            `${outputPrefix} Command Submission '${lastInput}' recognized`,
            `${outputPrefix} Please enter your username.`,
            spacer,
          ],
          failureResponse: [
            `${userInputPrefix} '${lastInput}'`,
            `${outputPrefix} Command Submission '${lastInput}' not recognized`,
            spacer,
          ],
        },
      },
    },
    {
      id: 2,
      dialog: {
        expectedInput: gameState.username,
        responses: {
          successResponse: [
            `${userInputPrefix} '${lastInput}'`,
            `${outputPrefix} Username '${lastInput}' recognized`,
            `${outputPrefix} Please enter your password.`,
            spacer,
          ],
          failureResponse: [
            `${userInputPrefix} '${lastInput}'`,
            `${outputPrefix} Username '${lastInput}' not recognized`,
            `${outputPrefix} Please enter a valid username.`,
            spacer,
          ],
        },
      },
    },
  ];

  useEffect(() => {
    setCurrentExpectedInput(
      informationGatheringDialog[gameState.currentPuzzleIndex].dialog.expectedInput
    );
  }, [gameState.currentPuzzleIndex, informationGatheringDialog, setCurrentExpectedInput]);

  return (
    <div className="information-gathering">
      {informationGatheringDialog[
       gameState.currentPuzzleIndex
      ].dialog.responses.successResponse?.map((response) => (
        <p className="text-line">{response}</p>
      ))}
    </div>
  );
};

export default InformationGathering;
