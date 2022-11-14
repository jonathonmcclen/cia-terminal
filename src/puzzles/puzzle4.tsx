import LoadingAnimation from 'components/LoadingAnimation';
import { userInputPrefix, outputPrefix, spacer } from 'utils';

export const puzzle3 = (
  lastInput: string,
) => {
  return [
    {
      id: 1,
      dialog: {
        expectedInput: 'https://54759-74729-89454-57570',
        responses: {
          successResponse: [
            `${userInputPrefix} '${lastInput}'`,
            `${outputPrefix} Decrypting...`,
            <LoadingAnimation />,
            // Make glitch animation
            `${outputPrefix} ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR`,
            `${outputPrefix} CRITICAL ERROR`,
            `${outputPrefix} ERROR 1/10`,
            `${outputPrefix} COMPLETE THE SEQUENCE:`,
            `${outputPrefix} 253 Yellow 40, 0253 Yellow 4, 40253 Yellow, _ _ _ _ _ _`,
            spacer,
            `${outputPrefix} ENTER SOLUTION:`,
            spacer,
          ],
          failureResponse: [
            `${userInputPrefix} ${lastInput}`,
            `${outputPrefix} FAIL`,
            `${outputPrefix} THIS IS NOT A VALID URL`,
            spacer,
            `${outputPrefix} ENTER URL TO HACK OR DECRYPT:`,
            spacer,
          ],
        },
      },
    },
  ];
};
