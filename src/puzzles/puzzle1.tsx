import { userInputPrefix, outputPrefix, spacer } from 'utils';

export const puzzle1 = (
  lastInput: string,
  username: string,
  password: string
) => {
  return [
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
        expectedInput: username,
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
    {
      id: 3,
      dialog: {
        expectedInput: password,
        responses: {
          successResponse: [
            `${userInputPrefix} '${lastInput}'`,
            `${outputPrefix} Command Entry Recognized`,
            `${outputPrefix} FAILED`,
            spacer,
            `${outputPrefix} ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR`,
            `${outputPrefix} Could NOT verify identity`,
            `${outputPrefix} Please complete authenticate to gain access.`,
            spacer,
            `${outputPrefix} AUTHENTICATION 1/10`,
            `${outputPrefix} 287601, 876012, 760128, _ _ _ _ _ _`,
            `${outputPrefix} Complete The Sequence Then Press ENTER`,
            spacer,
          ],
        },
      },
    },
    {
      id: 4,
      dialog: {
        expectedInput: '601287',
        hint: "102",
        responses: {
          successResponse: [
            `${userInputPrefix} '${lastInput}'`,
            `${outputPrefix} SUCCESS`,
            `${outputPrefix} Command Submission '${lastInput}' recognized`,
            spacer,
            `${outputPrefix} AUTHENTICATION 2/10`,
            `${outputPrefix} 431842, 243184, 424318, _ _ _ _ _ _`,
            `${outputPrefix} Complete The Sequence Then Press ENTER`,
            spacer,
          ],
          failureResponse: [
            `${outputPrefix} Command Submission '${lastInput}' Not Recognized`,
            spacer,
          ],
        },
      },
    },
    {
      id: 5,
      dialog: {
        expectedInput: '842431',
        hint: "103",
        responses: {
          successResponse: [
            `${userInputPrefix} '${lastInput}'`,
            `${outputPrefix} SUCCESS`,
            `${outputPrefix} Command Submission '${lastInput}' recognized`,
            spacer,
            `${outputPrefix} AUTHENTICATION 3/10`,
            `${outputPrefix} CODE OUT OF ORDER`,
            `${outputPrefix} 5. InputFive(5)**REFERENCE#…4…END`,
            `${outputPrefix} 3. InputThree(3)**REFERENCE#…6…END`,
            `${outputPrefix} 1. InputOne(1)**REFERENCE#…9…END`,
            `${outputPrefix} 6. InputSix(6)**REFERENCE#…2…END`,
            `${outputPrefix} 2. InputTwo(2)**REFERENCE#…7…END`,
            `${outputPrefix} 4. InputFour(4)**REFERENCEE#…1…END`,
            `${outputPrefix} TYPE REFERENCE NUMBERS IN ORDER THEN PRESS ENTER`,
            spacer,
          ],
          failureResponse: [
            `${outputPrefix} Command Submission '${lastInput}' Not Recognized`,
            spacer,
          ],
        },
      },
    },
    {
      id: 6,
      dialog: {
        expectedInput: '976142',
        hint: "104",
        responses: {
          successResponse: [
            `${userInputPrefix} '${lastInput}'`,
            `${outputPrefix} SUCCESS`,
            `${outputPrefix} Command Submission '${lastInput}' recognized`,
            spacer,
            `${outputPrefix} AUTHENTICATION 4/10`,
            `${outputPrefix} 4. InputFour(4)**REFERENCE#…8…END`,
            `${outputPrefix} 1. InputOne(1)**REFERENCE#…4…END`,
            `${outputPrefix} 3. InputThree(3)**REFERENCE#…2…END`,
            `${outputPrefix} 6. InputSix(6)**REFERENCE#…3…END`,
            `${outputPrefix} 5. InputFive(5)**REFERENCE#…6…END`,
            `${outputPrefix} 2. InputTwo(2)**REFERENCE#…5…END`,
            `${outputPrefix} TYPE REFERENCE NUMBERS IN ORDER THEN PRESS ENTER`,
            spacer,
          ],
          failureResponse: [
            `${outputPrefix} Command Submission '${lastInput}' Not Recognized`,
            spacer,
          ],
        },
      },
    },
    {
      id: 7,
      dialog: {
        expectedInput: '452863',
        hint: "105",
        responses: {
          successResponse: [
            `${userInputPrefix} '${lastInput}'`,
            `${outputPrefix} SUCCESS`,
            `${outputPrefix} Command Submission '${lastInput}' recognized`,
            spacer,
            `${outputPrefix} AUTHENTICATION 5/10`,
            `${outputPrefix} LogLine#1>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>__REFERENCE#_2___`,
            `${outputPrefix} LogLine#2>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>__REFERENCE#_0___`,
            `${outputPrefix} LogLine#3>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>__REFERENEC#_3___`,
            `${outputPrefix} LogLine#4>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>__REFERENCE#_8___`,
            `${outputPrefix} LogLine#5>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>__REFERENCE#_9___`,
            `${outputPrefix} LogLine#6>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>__REFERENCE#_6___`,
            `${outputPrefix} LOG LINES TOO LONG TYPE REFRENCE NUMBERS THEN PRESS ENTER`,
            spacer,
          ],
          failureResponse: [
            `${outputPrefix} Command Submission '${lastInput}' Not Recognized`,
            spacer,
          ],
        },
      },
    },
    {
      id: 8,
      dialog: {
        expectedInput: '203896',
        hint: "106",
        responses: {
          successResponse: [
            `${userInputPrefix} '${lastInput}'`,
            `${outputPrefix} SUCCESS`,
            `${outputPrefix} Command Submission '${lastInput}' recognized`,
            spacer,
            `${outputPrefix} AUTHENTICATION 6/10`,
            `${outputPrefix} LogLine#6>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>__REFERENCE#_9___`,
            `${outputPrefix} LogLine#5>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>__REFERENCE#_4___`,
            `${outputPrefix} LogLine#4>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>__REFERENCE#_6___`,
            `${outputPrefix} LogLine#3>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>__REFERENCE#_8___`,
            `${outputPrefix} LogLine#2>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>__REFERENCE#_1___`,
            `${outputPrefix} LogLine#1>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>__REFERENCE#_0___`,
            `${outputPrefix} LOG LINES TOO LONG TYPE REFRENCE NUMBERS THEN PRESS ENTER`,
            spacer,
          ],
          failureResponse: [
            `${outputPrefix} Command Submission '${lastInput}' Not Recognized`,
            spacer,
          ],
        },
      },
    },
    {
      id: 9,
      dialog: {
        expectedInput: '018649',
        hint: "107",
        responses: {
          successResponse: [
            `${userInputPrefix} '${lastInput}'`,
            `${outputPrefix} SUCCESS`,
            `${outputPrefix} Command Submission '${lastInput}' recognized`,
            spacer,
            `${outputPrefix} AUTHENTICATION 7/10`,
            `${outputPrefix} LogLine#1>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>____REFERENCE#_5___<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______`,
            `${outputPrefix} LogLine#2>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>____REFERENCE#_0___<<<<<<<<<<<<<<<<<<<______Too_Far_______`,
            `${outputPrefix} LogLine#3>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>____REFERENCE#_2___<<<<<<<<<<<<<<<<<<<______Too_Far_______`,
            `${outputPrefix} LogLine#4>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>____REFERENECE#_8___<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______`,
            `${outputPrefix} LogLine#5>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>____REFERENCE#_3___`,
            `${outputPrefix} LogLine#6>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>____REFERENCE#_6___`,
            `${outputPrefix} LOG LINES TOO LONG TYPE REFERENCE NUMBERS THEN PRESS ENTER`,
            spacer,
          ],
          failureResponse: [
            `${outputPrefix} Command Submission '${lastInput}' Not Recognized`,
            spacer,
          ],
        },
      },
    },
    {
      id: 10,
      dialog: {
        expectedInput: '502836',
        hint: "108",
        responses: {
          successResponse: [
            `${userInputPrefix} '${lastInput}'`,
            `${outputPrefix} SUCCESS`,
            `${outputPrefix} Command Submission '${lastInput}' recognized`,
            spacer,
            `${outputPrefix} AUTHENTICATION 8/10`,
            `${outputPrefix} LogLine#1>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>____REFERENCE#_1___<<<<<<<<<<<<<<<<<<<______Too_Far_______`,
            `${outputPrefix} LogLine#4>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>____REFERENCE#_9___<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______`,
            `${outputPrefix} LogLine#5>>>>>>>>>>>>>>>>>>>___REFERENC#_5___>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>___CODE_TOO_LONG__`,
            `${outputPrefix} LogLine#3>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>____REFERENCE#_3___<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______`,
            `${outputPrefix} LogLine#2>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>____REFERENCE#_6___<<<<<<<<<<<<<<<<<<<______Too_Far_______`,
            `${outputPrefix} LogLine#6>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>____REFERENCE#_5___`,
            `${outputPrefix} LOG LINES TOO LONG TYPE REFERENCE NUMBERS THEN PRESS ENTER`,
            spacer,
          ],
          failureResponse: [
            `${outputPrefix} Command Submission '${lastInput}' Not Recognized`,
            spacer,
          ],
        },
      },
    },
    {
      id: 11,
      dialog: {
        expectedInput: '163955',
        hint: "109",
        responses: {
          successResponse: [
            `${userInputPrefix} '${lastInput}'`,
            `${outputPrefix} SUCCESS`,
            `${outputPrefix} Command Submission '${lastInput}' recognized`,
            spacer,
            `${outputPrefix} AUTHENTICATION 9/10`,
            `${outputPrefix} >>>>>>>>>>>>>>>>>>>___REFERENCE#_9___>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>___CODE_TOO_LONG__LogLine#2`,
            `${outputPrefix} >>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>____REFERENCE#_8___LogLine#4`,
            `${outputPrefix} >>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>____REFERENCE#_0___<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______LogLine#3`,
            `${outputPrefix} >>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>____REFERAENC#_4___<<<<<<<<<<<<<<<<<<<______Too_Far_______LogLine#6`,
            `${outputPrefix} >>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>____REFERENCE#_6___<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______LogLine#5`,
            `${outputPrefix} >>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>____REREFERENCE#_5___<<<<<<<<<<<<<<<<<<<______Too_Far_______LogLine#1`,
            `${outputPrefix} LOG LINES TOO LONG TYPE REFERENCE NUMBERS THEN PRESS ENTER`,
            spacer,
          ],
          failureResponse: [
            `${outputPrefix} Command Submission '${lastInput}' Not Recognized`,
            spacer,
          ],
        },
      },
    },
    {
      id: 12,
      dialog: {
        expectedInput: '590864',
        hint: "110",
        responses: {
          successResponse: [
            `${userInputPrefix} '${lastInput}'`,
            `${outputPrefix} SUCCESS`,
            `${outputPrefix} Command Submission '${lastInput}' recognized`,
            spacer,
            `${outputPrefix} AUTHENTICATION 10/10`,
            `${outputPrefix} Answer : 483 _ _ _`,
            `${outputPrefix} Beaming last three digits to your brain implant V1.0 TM`,
            `${outputPrefix} Retreival instructions:`,
            `${outputPrefix} Pick a number between 1-10`,
            `${outputPrefix} Add 30`,
            `${outputPrefix} Subtract 10`,
            `${outputPrefix} Add 60`,
            `${outputPrefix} Subtract the first number you thought of`,
            `${outputPrefix} Multiply 2`,
            `${outputPrefix} Multiply by 2 Again`,
            `${outputPrefix} Add 7`,
            spacer,
          ],
          failureResponse: [
            `${outputPrefix} Command Submission '${lastInput}' Not Recognized`,
            spacer,
          ],
        },
      },
    },
    {
      id: 13,
      dialog: {
        expectedInput: '483327',
        hint: "111",
        responses: {
          successResponse: [
            `${userInputPrefix} '${lastInput}'`,
            `${outputPrefix} SUCCESS`,
            `${outputPrefix} Command Submission '${lastInput}' recognized`,
            spacer,
            `${outputPrefix} Login Successful for user ${username}`,
            `${outputPrefix} Your C.I.A terminal is now capable of Hacking and Decrypting URLs`,
            `${outputPrefix} ENCRYPTED URLs look like this:`,
            `${outputPrefix} *** EXAMPLE ****`,
            `${outputPrefix} https://75896-29742-69504-22231`,
            `${outputPrefix} ENCRYPTED URL's MUST be DECRYPTED before pasting into browser address window.`,
            `${outputPrefix} All DECRYPTED URLs can be used in a browser to visit web pages.`,
            spacer,
            `${outputPrefix} ENTER URL TO HACK OR DECYRYPT:`,
            spacer,
          ],
          failureResponse: [
            `${outputPrefix} Command Submission '${lastInput}' Not Recognized`,
            spacer,
          ],
        },
      },
    },
  ];
};
