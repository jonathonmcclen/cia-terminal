import LoadingAnimation from 'components/LoadingAnimation';
import { userInputPrefix, outputPrefix, spacer } from 'utils';

export const puzzle2 = (
  lastInput: string,
  failSound: HTMLAudioElement,
  successSound: HTMLAudioElement,
  readyForInput: HTMLAudioElement
) => {
  return [
    {
      id: 1,
      dialog: {
        expectedInput: 'https://675849-01928-565650-57039',
        hint: '112',
        responses: {
          successResponse: [
            `${userInputPrefix} '${lastInput}'`,
            `${outputPrefix} Decrypting...`,
            <LoadingAnimation />,
            () => successSound.play(),
            <a
              href="https://cia-9d562a98.s3.us-west-1.amazonaws.com/Destruction_At_The_Hands_Of_Your_Government"
              target="_blank"
              rel="noreferrer"
            >
              https://cia-9d562a98.s3.us-west-1.amazonaws.com/Destruction_At_The_Hands_Of_Your_Government
            </a>,
            () => readyForInput.play(),
          ],
          failureResponse: [
            () => failSound.play(),
            `${userInputPrefix} ${lastInput}`,
            `${outputPrefix} FAIL`,
            `${outputPrefix} THIS IS NOT A VALID URL`,
            spacer,
            `${outputPrefix} ENTER URL TO HACK OR DECYRYPT:`,
            spacer,
            () => readyForInput.play(),
          ],
          jokeResponse: [
            `${userInputPrefix} '${lastInput}'`,
            `${outputPrefix} Decrypting...`,
            <LoadingAnimation />,
            `${outputPrefix} Wait...`,
            `${outputPrefix} This is the EXAMPLE`,
            `${outputPrefix} VERY FUNNY, Mr. Funny Guy`,
            spacer,
            `${outputPrefix} ENTER "A REAL" URL TO HACK OR DECRYPT`,
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
        hint: '113',
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
              href="https://cia-9d562a98.s3.us-west-1.amazonaws.com/Destruction_At_The_Hands_Of_Your_Government"
              target="_blank"
              rel="noreferrer"
            >
              https://cia-9d562a98.s3.us-west-1.amazonaws.com/Destruction_At_The_Hands_Of_Your_Government
            </a>,
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
        expectedInput:
          'https://s3.us-west-1.amazonaws.com/15.908.75-f8065564/AlabasterTerminal/gamev2.0.html',
        hint: '114',
        responses: {
          successResponse: [
            `${userInputPrefix} '${lastInput}'`,
            `${outputPrefix} Hacking...`,
            <LoadingAnimation />,
            () => successSound.play(),
            `${outputPrefix} COMPLETE`,
            spacer,
            `${outputPrefix} Authentication Code: 3512076170`,
            spacer,
            `${outputPrefix} ENTER URL TO HACK OR DECYRYPT:`,
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
        expectedInput: 'https://12406-13796-93659-37402',
        hint: '115',
        responses: {
          successResponse: [
            `${userInputPrefix} '${lastInput}'`,
            `${outputPrefix} Decrypting...`,
            <LoadingAnimation />,
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
        expectedInput: 'https://40353-36520-23634-27560',
        hint: '116',
        responses: {
          successResponse: [
            `${userInputPrefix} '${lastInput}'`,
            `${outputPrefix} Decrypting...`,
            <LoadingAnimation />,
            () => successSound.play(),
            `${outputPrefix} COMPLETE`,
            spacer,
            `${outputPrefix} SERVER IP: 82.607.459`,
            `${outputPrefix} Authentication Code: That would be too easy :)`,
            `${outputPrefix} DECRYPTED URL:`,
            <a
              href="https://escroomgames.com/Games/Daffodil362/Puzzles/ScreenSizetoobig"
              target="_blank"
              rel="noreferrer"
            >
              https://escroomgames.com/Games/Daffodil362/Puzzles/ScreenSizetoobig
            </a>,
            `${outputPrefix} Decrypted URLs can be pasted into your browser.`,
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
        expectedInput: 'https://66737-26553-26594-46592',
        hint: '117',
        responses: {
          successResponse: [
            `${userInputPrefix} '${lastInput}'`,
            `${outputPrefix} Decrypting...`,
            <LoadingAnimation />,
            () => successSound.play(),
            `${outputPrefix} COMPLETE`,
            spacer,
            `${outputPrefix} SERVER IP: 62.746.271`,
            `${outputPrefix} Authentication Code: 651697597`,
            `${outputPrefix} DECRYPTED URL:`,
            <a
              href="https://escroomgames.com/Games/Daffodil362/Puzzles/ScreenSizetoosmall"
              target="_blank"
              rel="noreferrer"
            >
              https://escroomgames.com/Games/Daffodil362/Puzzles/ScreenSizetoosmall
            </a>,
            `${outputPrefix} Decrypted URLs can be pasted into your browser.`,
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
        expectedInput: 'https://20693-10782-40621-12479',
        hint: '118',
        responses: {
          successResponse: [
            `${userInputPrefix} '${lastInput}'`,
            `${outputPrefix} Decrypting...`,
            <LoadingAnimation />,
            () => successSound.play(),
            `${outputPrefix} COMPLETE`,
            spacer,
            `${outputPrefix} DECRYPTED URL:`,
            <a
              href="https://twitter.com/Anonymo00841943"
              target="_blank"
              rel="noreferrer"
            >
              https://twitter.com/Anonymo00841943
            </a>,
            `${outputPrefix} This URL is hackable,`,
            `${outputPrefix} DECRYPTED URL's can be pasted into your browser`,
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
        expectedInput: 'https://twitter.com/Anonymo00841943',
        hint: '119',
        responses: {
          successResponse: [
            `${userInputPrefix} '${lastInput}'`,
            `${outputPrefix} Hacking...`,
            <LoadingAnimation />,
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
            `${outputPrefix} Message10> Nine peices of silver.`,
            `${outputPrefix} CHECK YOUR EMAIL.`,
            `${outputPrefix} IF YOU DIDNT RECIEVE AN EMAIL, VISIT:`,
            <a
              href="https://escroomgames.com/Games/Daffodil362/Email-2"
              target="_blank"
              rel="noreferrer"
            >
              https://escroomgames.com/Games/Daffodil362/Email-2
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
  ];
};
