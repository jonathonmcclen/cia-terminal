import { outputPrefix, spacer } from 'utils';
import { failSound, successSound, readyForInput } from 'sounds/sounds';

export const puzzle2 = (
  lastInput,
  setGlitching,
) => {
  return [
    {
      id: 1,
      dialog: {
        expectedInput: 'https://675849-01928-565650-57039',
        hint: '201',
        responses: {
          successResponse: [
            `${outputPrefix} Decrypting...`,
            'loading',
            () => successSound.play(),
            'https://cia-9d562a98.s3.us-west-1.amazonaws.com/Destruction_At_The_Hands_Of_Your_Government',
            spacer,
            () => readyForInput.play(),
          ],
          failureResponse: [
            `${lastInput}`,
            () => failSound.play(),
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
        expectedInput: 'https://57203-23423-76039-67239',
        hint: '202',
        responses: {
          successResponse: [
            `${outputPrefix} Decrypting...`,
            'loading',
            () => successSound.play(),
            `${outputPrefix} COMPLETE`,
            spacer,
            `${outputPrefix} Decrypted URL:`,
            'https://cia-9d562a98.s3.us-west-1.amazonaws.com/Destruction_At_The_Hands_Of_Your_Government',
            `${outputPrefix} Decrypted URLs can be pasted into your browser.`,
            `${outputPrefix} You can also click on the link above to open the decrypted URL.`,
            `${outputPrefix} Some Decrypted URLs can be Hacked.
            `,
            `${outputPrefix} This URL IS hackable`,
            spacer,
            `${outputPrefix} ENTER URL TO HACK OR DECRYPT:`,
            spacer,
            () => readyForInput.play(),
          ],
          failureResponse: [
            `${lastInput}`,
            () => failSound.play(),
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
        expectedInput:
          'https://s3.us-west-1.amazonaws.com/15.908.75-f8065564/AlabasterTerminal/gamev2.0.html',
        hint: '203',
        responses: {
          successResponse: [
            `${outputPrefix} Hacking...`,
            'loading',
            () => successSound.play(),
            `${outputPrefix} COMPLETE`,
            spacer,
            `${outputPrefix} Authentication Code: 3512076170`,
            spacer,
            `${outputPrefix} ENTER URL TO HACK OR DECRYPT:`,
            spacer,
            () => readyForInput.play(),
          ],
          failureResponse: [
            `${lastInput}`,
            () => failSound.play(),
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
        expectedInput: 'https://12406-13796-93659-37402',
        hint: '204',
        responses: {
          successResponse: [
            `${outputPrefix} Decrypting...`,
            'loading',
            () => successSound.play(),
            `${outputPrefix} COMPLETE`,
            spacer,
            `${outputPrefix} SERVER IP: 19.087.125`,
            `${outputPrefix} Authentication Code: 3259241426`,
            spacer,
            `${outputPrefix} ENTER URL TO HACK OR DECRYPT:`,
            spacer,
            () => readyForInput.play(),
          ],
          failureResponse: [
            `${lastInput}`,
            () => failSound.play(),
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
        expectedInput: 'https://40353-36520-23634-27560',
        hint: '205',
        responses: {
          successResponse: [
            `${outputPrefix} Decrypting...`,
            'loading',
            () => successSound.play(),
            `${outputPrefix} COMPLETE`,
            spacer,
            `${outputPrefix} SERVER IP: 82.607.459`,
            `${outputPrefix} Authentication Code: That would be too easy :)`,
            `${outputPrefix} DECRYPTED URL:`,
            'https://escroomgames.com/Games/Daffodil362/Puzzles/ScreenSizetoobig',
            `${outputPrefix} Decrypted URLs can be pasted into your browser.`,
            spacer,
            `${outputPrefix} ENTER URL TO HACK OR DECRYPT:`,
            spacer,
            () => readyForInput.play(),
          ],
          failureResponse: [
            `${lastInput}`,
            () => failSound.play(),
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
        expectedInput: 'https://66737-26553-26594-46592',
        hint: '206',
        responses: {
          successResponse: [
            `${outputPrefix} Decrypting...`,
            'loading',
            () => successSound.play(),
            `${outputPrefix} COMPLETE`,
            spacer,
            `${outputPrefix} SERVER IP: 62.746.271`,
            `${outputPrefix} Authentication Code: 651697597`,
            `${outputPrefix} DECRYPTED URL:`,
            'https://escroomgames.com/Games/Daffodil362/Puzzles/ScreenSizetoosmall',
            `${outputPrefix} Decrypted URLs can be pasted into your browser.`,
            spacer,
            `${outputPrefix} ENTER URL TO HACK OR DECRYPT:`,
            spacer,
            () => readyForInput.play(),
          ],
          failureResponse: [
            `${lastInput}`,
            () => failSound.play(),
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
        expectedInput: 'https://20693-10782-40621-12479',
        hint: '207',
        responses: {
          successResponse: [
            `${outputPrefix} Decrypting...`,
            'loading',
            () => successSound.play(),
            `${outputPrefix} COMPLETE`,
            spacer,
            `${outputPrefix} DECRYPTED URL:`,
            'https://twitter.com/Anonymo00841943',
            `${outputPrefix} This URL is hackable,`,
            `${outputPrefix} DECRYPTED URL's can be pasted into your browser`,
            spacer,
            `${outputPrefix} ENTER URL TO HACK OR DECRYPT:`,
            spacer,
            () => readyForInput.play(),
          ],
          failureResponse: [
            `${lastInput}`,
            () => failSound.play(),
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
        expectedInput: 'https://twitter.com/Anonymo00841943',
        hint: '208',
        responses: {
          successResponse: [
            `${outputPrefix} Hacking...`,
            'loading',
            () => successSound.play(),
            `${outputPrefix} COMPLETE`,
            spacer,

            `${outputPrefix} Message1> One blue ball bounces.`,
            `${outputPrefix} Message2> The red desk has four legs.`,
            `${outputPrefix} Message3> I have nothing that is purple.`,
            `${outputPrefix} Message4> A girl has green eyes.`,
            `${outputPrefix} Message5> A yellow spider crawls.`,
            `${outputPrefix} Message6> Three hard boiled eggs.`,
            `${outputPrefix} Message7> Five oranges in a fruit bowl.`,
            `${outputPrefix} Message8> Six grains of sand remain in the hour glass.`,
            `${outputPrefix} Message9> Seven burnt matches.`,
            `${outputPrefix} Message10> Nine pieces of silver.`,
            `${outputPrefix} CHECK YOUR EMAIL.`,
            `${outputPrefix} IF YOU DIDN'T RECEIVE AN EMAIL, VISIT:`,
            'https://escroomgames.com/Games/Daffodil362/Email-2',
            spacer,
            `${outputPrefix} ENTER URL TO HACK OR DECRYPT:`,
            spacer,
            () => readyForInput.play(),
          ],
          failureResponse: [
            `${lastInput}`,
            () => failSound.play(),
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
        expectedInput: 'https://17928-05613-01573-57099',
        hint: '209',
        responses: {
          successResponse: [
            `${outputPrefix} Decrypting...`,
            'loading',
            () => successSound.play(),
            `${outputPrefix} COMPLETE`,
            spacer,
            `${outputPrefix} Decrypted URL:`,
            'https://escroomgames.com/Games/Daffodil362/Puzzles/FileLokV2/FileLokPuzzle1',
            spacer,
            `${outputPrefix} ENTER URL TO HACK OR DECRYPT:`,
            spacer,
            () => readyForInput.play(),
          ],
          failureResponse: [
            `${lastInput}`,
            () => failSound.play(),
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
        expectedInput: 'https://08958-08678-00000-67409',
        hint: '210',
        responses: {
          successResponse: [
            `${outputPrefix} Decrypting...`,
            'loading',
            () => successSound.play(),
            `${outputPrefix} COMPLETE`,
            spacer,
            `${outputPrefix} Decrypted URL:`,
            'https://escroomgames.com/Games/Daffodil362/Puzzles/FileLokV2/FileLokPuzzle2',
            spacer,
            `${outputPrefix} ENTER URL TO HACK OR DECRYPT:`,
            spacer,
            () => readyForInput.play(),
          ],
          failureResponse: [
            `${lastInput}`,
            () => failSound.play(),
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
        expectedInput: 'https://30304-28387-90909-14241',
        hint: '211',
        responses: {
          successResponse: [
            `${outputPrefix} Decrypting...`,
            'loading',
            () => successSound.play(),
            `${outputPrefix} COMPLETE`,
            spacer,
            `${outputPrefix} Decrypted URL:`,
            'https://escroomgames.com/Games/Daffodil362/Puzzles/FileLokV2/FileLokPuzzle3',
            spacer,
            `${outputPrefix} ENTER URL TO HACK OR DECRYPT:`,
            spacer,
            () => readyForInput.play(),
          ],
          failureResponse: [
            `${lastInput}`,
            () => failSound.play(),
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
      id: 12,
      dialog: {
        expectedInput: 'https://20239-68775-00989-83838',
        hint: '212',
        responses: {
          successResponse: [
            `${outputPrefix} Decrypting...`,
            'loading',
            () => successSound.play(),
            `${outputPrefix} COMPLETE`,
            spacer,
            `${outputPrefix} Decrypted URL:`,
            'https://escroomgames.com/Games/Daffodil362/Puzzles/FileLokV2/FileLokPuzzle4',
            spacer,
            `${outputPrefix} ENTER URL TO HACK OR DECRYPT:`,
            spacer,
            () => readyForInput.play(),
          ],
          failureResponse: [
            `${lastInput}`,
            () => failSound.play(),
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
      id: 13,
      dialog: {
        expectedInput: 'https://87665-76501-10129-30483',
        hint: '213',
        responses: {
          successResponse: [
            `${outputPrefix} Decrypting...`,
            'loading',
            () => successSound.play(),
            `${outputPrefix} COMPLETE`,
            spacer,
            `${outputPrefix} Decrypted URL:`,
            'https://escroomgames.com/Games/Daffodil362/Puzzles/FileLokV2/FileLokPuzzle5',
            spacer,
            `${outputPrefix} ENTER URL TO HACK OR DECRYPT:`,
            spacer,
            () => readyForInput.play(),
          ],
          failureResponse: [
            `${lastInput}`,
            () => failSound.play(),
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
      id: 14,
      dialog: {
        expectedInput: 'https://twitter.com/Ax787556086',
        hint: '214',
        responses: {
          successResponse: [
            `${outputPrefix} Hacking...`,
            'loading',
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
            `${lastInput}`,
            () => failSound.play(),
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
      id: 15,
      dialog: {
        expectedInput: 'https://48597-30482-08223-96574',
        hint: '126',
        responses: {
          successResponse: [
            `${outputPrefix} Decrypting...`,
            'loading',
            () => successSound.play(),
            `${outputPrefix} COMPLETE`,
            spacer,
            `${outputPrefix} Decrypted URL:`,
            'https://escroomgames.com/Games/Daffodil362/Puzzles/FileLokV2/FileLokPuzzle6',
            spacer,
            `${outputPrefix} ENTER URL TO HACK OR DECRYPT:`,
            spacer,
            () => readyForInput.play(),
          ],
          failureResponse: [
            `${lastInput}`,
            () => failSound.play(),
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
      id: 16,
      dialog: {
        expectedInput: 'https://40743-98076-44732-12864',
        hint: '127',
        responses: {
          successResponse: [
            `${outputPrefix} Decrypting...`,
            'loading',
            () => successSound.play(),
            `${outputPrefix} COMPLETE`,
            spacer,
            `${outputPrefix} Decrypted URL:`,
            'https://escroomgames.com/Games/Daffodil362/Puzzles/FileLokV2/FileLokPuzzle7',
            spacer,
            `${outputPrefix} ENTER URL TO HACK OR DECRYPT:`,
            spacer,
            () => readyForInput.play(),
          ],
          failureResponse: [
            `${lastInput}`,
            () => failSound.play(),
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
      id: 17,
      dialog: {
        expectedInput: 'https://74646-40332-80653-56392',
        hint: '128',
        responses: {
          successResponse: [
            `${outputPrefix} Decrypting...`,
            'loading',
            () => successSound.play(),
            `${outputPrefix} COMPLETE`,
            spacer,
            `${outputPrefix} Decrypted URL:`,
            'https://escroomgames.com/Games/Daffodil362/Puzzles/FileLokV2/FileLokPuzzle8',
            spacer,
            `${outputPrefix} ENTER URL TO HACK OR DECRYPT:`,
            spacer,
            () => readyForInput.play(),
          ],
          failureResponse: [
            `${lastInput}`,
            () => failSound.play(),
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
      id: 18,
      dialog: {
        expectedInput: 'https://10109-37583-28534-49452',
        hint: '129',
        responses: {
          successResponse: [
            `${outputPrefix} Decrypting...`,
            'loading',
            () => successSound.play(),
            `${outputPrefix} COMPLETE`,
            spacer,
            `${outputPrefix} Decrypted URL:`,
            'https://www.google.com/maps/@33.7751473,-118.0572065,3a,75y,353.4h,77.36t/data=!3m6!1e1!3m4!1sX1ApixJvHniChL9lnJyiuw!2e0!7i16384!8i8192',
            spacer,
            `${outputPrefix} ENTER URL TO HACK OR DECRYPT:`,
            spacer,
            () => readyForInput.play(),
          ],
          failureResponse: [
            `${lastInput}`,
            () => failSound.play(),
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
      id: 19,
      dialog: {
        expectedInput: 'https://54759-74729-89454-57570',
        hint: '130',
        responses: {
          successResponse: [
            `${outputPrefix} Decrypting...`,
            'loading',
            () => failSound.play(),
            () => setGlitching(true),
            `${outputPrefix} ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR`,
            `${outputPrefix} CRITICAL ERROR`,
            () => setGlitching(false),
            `${outputPrefix} ERROR 1/10`,
            `${outputPrefix} COMPLETE THE SEQUENCE:`,
            `${outputPrefix} 253 Yellow 40, 0253 Yellow 4, 40253 Yellow, _ _ _ _ _ _`,
            spacer,
            `${outputPrefix} ENTER SOLUTION:`,
            spacer,
            () => readyForInput.play(),
          ],
          failureResponse: [
            `${lastInput}`,
            () => failSound.play(),
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
