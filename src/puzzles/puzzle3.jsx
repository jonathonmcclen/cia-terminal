import LoadingAnimation from 'components/LoadingAnimation';
import { userInputPrefix, outputPrefix, spacer } from 'utils';

export const puzzle3 = (
  lastInput,
  setGlitching,
  failSound,
  successSound,
  readyForInput
) => {
  return [
    {
      id: 1,
      dialog: {
        expectedInput: 'https://17928-05613-01573-57099',
        hint: '120',
        responses: {
          successResponse: [
            `${userInputPrefix} '${lastInput}'`,
            `${outputPrefix} Decrypting...`,
            <LoadingAnimation />,
            () => successSound.play(),
            `${outputPrefix} COMPLETE`,
            spacer,
            `${outputPrefix} Decrypted URL:`,
            <a
              href="https://escroomgames.com/Games/Daffodil362/Puzzles/FileLokV2/FileLokPuzzle1"
              target="_blank"
              rel="noreferrer"
            >
              https://escroomgames.com/Games/Daffodil362/Puzzles/FileLokV2/FileLokPuzzle1
            </a>,
            spacer,
            `${outputPrefix} ENTER URL TO HACK OR DECRYPT:`,
            spacer,
            () => readyForInput.play(),
          ],
          failureResponse: [
            () => failSound.play(),
            `${userInputPrefix} ${lastInput}`,
            `${outputPrefix} FAIL`,
            `${outputPrefix} THIS IS NOT A VALID URL`,
            spacer,
            `${outputPrefix} ENTER URL TO HACK OR DECRYPT:`,
            spacer,
            () => readyForInput.play(),
          ],
        },
      },
    },
    {
      id: 2,
      dialog: {
        expectedInput: 'https://08958-08678-00000-67409',
        hint: '121',
        responses: {
          successResponse: [
            `${userInputPrefix} '${lastInput}'`,
            `${outputPrefix} Decrypting...`,
            <LoadingAnimation />,
            () => successSound.play(),
            `${outputPrefix} COMPLETE`,
            spacer,
            `${outputPrefix} Decrypted URL:`,
            <a
              href="https://escroomgames.com/Games/Daffodil362/Puzzles/FileLokV2/FileLokPuzzle2"
              target="_blank"
              rel="noreferrer"
            >
              https://escroomgames.com/Games/Daffodil362/Puzzles/FileLokV2/FileLokPuzzle2
            </a>,
            spacer,
            `${outputPrefix} ENTER URL TO HACK OR DECRYPT:`,
            spacer,
            () => readyForInput.play(),
          ],
          failureResponse: [
            () => failSound.play(),
            `${userInputPrefix} ${lastInput}`,
            `${outputPrefix} FAIL`,
            `${outputPrefix} THIS IS NOT A VALID URL`,
            spacer,
            `${outputPrefix} ENTER URL TO HACK OR DECRYPT:`,
            spacer,
            () => readyForInput.play(),
          ],
        },
      },
    },
    {
      id: 3,
      dialog: {
        expectedInput: 'https://30304-28387-90909-14241',
        hint: '122',
        responses: {
          successResponse: [
            `${userInputPrefix} '${lastInput}'`,
            `${outputPrefix} Decrypting...`,
            <LoadingAnimation />,
            () => successSound.play(),
            `${outputPrefix} COMPLETE`,
            spacer,
            `${outputPrefix} Decrypted URL:`,
            <a
              href="https://escroomgames.com/Games/Daffodil362/Puzzles/FileLokV3/FileLokPuzzle3"
              target="_blank"
              rel="noreferrer"
            >
              https://escroomgames.com/Games/Daffodil362/Puzzles/FileLokV3/FileLokPuzzle3
            </a>,
            spacer,
            `${outputPrefix} ENTER URL TO HACK OR DECRYPT:`,
            spacer,
            () => readyForInput.play(),
          ],
          failureResponse: [
            () => failSound.play(),
            `${userInputPrefix} ${lastInput}`,
            `${outputPrefix} FAIL`,
            `${outputPrefix} THIS IS NOT A VALID URL`,
            spacer,
            `${outputPrefix} ENTER URL TO HACK OR DECRYPT:`,
            spacer,
            () => readyForInput.play(),
          ],
        },
      },
    },
    {
      id: 4,
      dialog: {
        expectedInput: 'https://20239-68775-00989-83838',
        hint: '123',
        responses: {
          successResponse: [
            `${userInputPrefix} '${lastInput}'`,
            `${outputPrefix} Decrypting...`,
            <LoadingAnimation />,
            () => successSound.play(),
            `${outputPrefix} COMPLETE`,
            spacer,
            `${outputPrefix} Decrypted URL:`,
            <a
              href="https://escroomgames.com/Games/Daffodil362/Puzzles/FileLokV4/FileLokPuzzle4"
              target="_blank"
              rel="noreferrer"
            >
              https://escroomgames.com/Games/Daffodil362/Puzzles/FileLokV4/FileLokPuzzle4
            </a>,
            spacer,
            `${outputPrefix} ENTER URL TO HACK OR DECRYPT:`,
            spacer,
            () => readyForInput.play(),
          ],
          failureResponse: [
            () => failSound.play(),
            `${userInputPrefix} ${lastInput}`,
            `${outputPrefix} FAIL`,
            `${outputPrefix} THIS IS NOT A VALID URL`,
            spacer,
            `${outputPrefix} ENTER URL TO HACK OR DECRYPT:`,
            spacer,
            () => readyForInput.play(),
          ],
        },
      },
    },
    {
      id: 5,
      dialog: {
        expectedInput: 'https://87665-76501-10129-30483',
        hint: '124',
        responses: {
          successResponse: [
            `${userInputPrefix} '${lastInput}'`,
            `${outputPrefix} Decrypting...`,
            <LoadingAnimation />,
            () => successSound.play(),
            `${outputPrefix} COMPLETE`,
            spacer,
            `${outputPrefix} Decrypted URL:`,
            <a
              href="https://escroomgames.com/Games/Daffodil362/Puzzles/FileLokV5/FileLokPuzzle5"
              target="_blank"
              rel="noreferrer"
            >
              https://escroomgames.com/Games/Daffodil362/Puzzles/FileLokV5/FileLokPuzzle5
            </a>,
            spacer,
            `${outputPrefix} ENTER URL TO HACK OR DECRYPT:`,
            spacer,
            () => readyForInput.play(),
          ],
          failureResponse: [
            () => failSound.play(),
            `${userInputPrefix} ${lastInput}`,
            `${outputPrefix} FAIL`,
            `${outputPrefix} THIS IS NOT A VALID URL`,
            spacer,
            `${outputPrefix} ENTER URL TO HACK OR DECRYPT:`,
            spacer,
            () => readyForInput.play(),
          ],
        },
      },
    },
    {
      id: 6,
      dialog: {
        expectedInput: 'https://twitter.com/Ax787556086',
        hint: '125',
        responses: {
          successResponse: [
            `${userInputPrefix} '${lastInput}'`,
            `${outputPrefix} Hacking...`,
            <LoadingAnimation />,
            () => successSound.play(),
            `${outputPrefix} COMPLETE`,
            spacer,
            `${outputPrefix} FileLok Code: 6597`,
            `${outputPrefix} @Ax7> I forgot my username again!`,
            `${outputPrefix} @Anonymous5> Seriously? Here, I reset it...`,
            `${outputPrefix} @Anonymous5> Username: DontForgetAgain`,
            spacer,
            `${outputPrefix} ENTER URL TO HACK OR DECRYPT:`,
            spacer,
            () => readyForInput.play(),
          ],
          failureResponse: [
            () => failSound.play(),
            `${userInputPrefix} ${lastInput}`,
            `${outputPrefix} FAIL`,
            `${outputPrefix} THIS IS NOT A VALID URL`,
            spacer,
            `${outputPrefix} ENTER URL TO HACK OR DECRYPT:`,
            spacer,
            () => readyForInput.play(),
          ],
        },
      },
    },
    {
      id: 7,
      dialog: {
        expectedInput: 'https://48597-30482-08223-96574',
        hint: '126',
        responses: {
          successResponse: [
            `${userInputPrefix} '${lastInput}'`,
            `${outputPrefix} Decrypting...`,
            <LoadingAnimation />,
            () => successSound.play(),
            `${outputPrefix} COMPLETE`,
            spacer,
            `${outputPrefix} Decrypted URL:`,
            <a
              href="https://escroomgames.com/Games/Daffodil362/Puzzles/FileLokV6/FileLokPuzzle6"
              target="_blank"
              rel="noreferrer"
            >
              https://escroomgames.com/Games/Daffodil362/Puzzles/FileLokV6/FileLokPuzzle6
            </a>,
            spacer,
            `${outputPrefix} ENTER URL TO HACK OR DECRYPT:`,
            spacer,
            () => readyForInput.play(),
          ],
          failureResponse: [
            () => failSound.play(),
            `${userInputPrefix} ${lastInput}`,
            `${outputPrefix} FAIL`,
            `${outputPrefix} THIS IS NOT A VALID URL`,
            spacer,
            `${outputPrefix} ENTER URL TO HACK OR DECRYPT:`,
            spacer,
            () => readyForInput.play(),
          ],
        },
      },
    },
    {
      id: 8,
      dialog: {
        expectedInput: 'https://40743-98076-44732-12864',
        hint: '127',
        responses: {
          successResponse: [
            `${userInputPrefix} '${lastInput}'`,
            `${outputPrefix} Decrypting...`,
            <LoadingAnimation />,
            () => successSound.play(),
            `${outputPrefix} COMPLETE`,
            spacer,
            `${outputPrefix} Decrypted URL:`,
            <a
              href="https://escroomgames.com/Games/Daffodil362/Puzzles/FileLokV7/FileLokPuzzle7"
              target="_blank"
              rel="noreferrer"
            >
              https://escroomgames.com/Games/Daffodil362/Puzzles/FileLokV7/FileLokPuzzle7
            </a>,
            spacer,
            `${outputPrefix} ENTER URL TO HACK OR DECRYPT:`,
            spacer,
            () => readyForInput.play(),
          ],
          failureResponse: [
            () => failSound.play(),
            `${userInputPrefix} ${lastInput}`,
            `${outputPrefix} FAIL`,
            `${outputPrefix} THIS IS NOT A VALID URL`,
            spacer,
            `${outputPrefix} ENTER URL TO HACK OR DECRYPT:`,
            spacer,
            () => readyForInput.play(),
          ],
        },
      },
    },
    {
      id: 9,
      dialog: {
        expectedInput: 'https://74646-40332-80653-56392',
        hint: '128',
        responses: {
          successResponse: [
            `${userInputPrefix} '${lastInput}'`,
            `${outputPrefix} Decrypting...`,
            <LoadingAnimation />,
            () => successSound.play(),
            `${outputPrefix} COMPLETE`,
            spacer,
            `${outputPrefix} Decrypted URL:`,
            <a
              href="https://escroomgames.com/Games/Daffodil362/Puzzles/FileLokV8/FileLokPuzzle8"
              target="_blank"
              rel="noreferrer"
            >
              https://escroomgames.com/Games/Daffodil362/Puzzles/FileLokV8/FileLokPuzzle8
            </a>,
            spacer,
            `${outputPrefix} ENTER URL TO HACK OR DECRYPT:`,
            spacer,
            () => readyForInput.play(),
          ],
          failureResponse: [
            () => failSound.play(),
            `${userInputPrefix} ${lastInput}`,
            `${outputPrefix} FAIL`,
            `${outputPrefix} THIS IS NOT A VALID URL`,
            spacer,
            `${outputPrefix} ENTER URL TO HACK OR DECRYPT:`,
            spacer,
            () => readyForInput.play(),
          ],
        },
      },
    },
    {
      id: 10,
      dialog: {
        expectedInput: 'https://10109-37583-28534-49452',
        hint: '129',
        responses: {
          successResponse: [
            `${userInputPrefix} '${lastInput}'`,
            `${outputPrefix} Decrypting...`,
            <LoadingAnimation />,
            () => successSound.play(),
            `${outputPrefix} COMPLETE`,
            spacer,
            `${outputPrefix} Decrypted URL:`,
            <a
              href="https://www.google.com/maps/@33.7751473,-118.0572065,3a,75y,353.4h,77.36t/data=!3m6!1e1!3m4!1sX1ApixJvHniChL9lnJyiuw!2e0!7i16384!8i8192"
              target="_blank"
              rel="noreferrer"
            >
              https://www.google.com/maps/@33.7751473,-118.0572065,3a,75y,353.4h,77.36t/data=!3m6!1e1!3m4!1sX1ApixJvHniChL9lnJyiuw!2e0!7i16384!8i8192
            </a>,
            spacer,
            `${outputPrefix} ENTER URL TO HACK OR DECRYPT:`,
            spacer,
            () => readyForInput.play(),
          ],
          failureResponse: [
            () => failSound.play(),
            `${userInputPrefix} ${lastInput}`,
            `${outputPrefix} FAIL`,
            `${outputPrefix} THIS IS NOT A VALID URL`,
            spacer,
            `${outputPrefix} ENTER URL TO HACK OR DECRYPT:`,
            spacer,
            () => readyForInput.play(),
          ],
        },
      },
    },
    {
      id: 11,
      dialog: {
        expectedInput: 'https://54759-74729-89454-57570',
        responses: {
          successResponse: [
            `${userInputPrefix} '${lastInput}'`,
            `${outputPrefix} Decrypting...`,
            <LoadingAnimation />,
            () => {
              failSound.play();
              setGlitching(true);
            },

            `${outputPrefix} ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR`,
            `${outputPrefix} CRITICAL ERROR`,
            setGlitching(false),
            `${outputPrefix} ERROR 1/10`,
            `${outputPrefix} COMPLETE THE SEQUENCE:`,
            `${outputPrefix} 253 Yellow 40, 0253 Yellow 4, 40253 Yellow, _ _ _ _ _ _`,
            spacer,
            `${outputPrefix} ENTER SOLUTION:`,
            spacer,
            () => readyForInput.play(),
          ],
          failureResponse: [
            () => failSound.play(),
            `${userInputPrefix} ${lastInput}`,
            `${outputPrefix} FAIL`,
            `${outputPrefix} THIS IS NOT A VALID URL`,
            spacer,
            `${outputPrefix} ENTER URL TO HACK OR DECRYPT:`,
            spacer,
            () => readyForInput.play(),
          ],
        },
      },
    },
  ];
};
