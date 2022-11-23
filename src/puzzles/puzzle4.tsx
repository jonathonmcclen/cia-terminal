import { userInputPrefix, outputPrefix, spacer } from 'utils';

export const puzzle4 = (
  lastInput: string,
  setGlitching: (glitching: boolean) => void,
  failSound: HTMLAudioElement,
  successSound: HTMLAudioElement,
  readyForInput: HTMLAudioElement
) => {
  return [
    {
      id: 1,
      dialog: {
        expectedInput: '840253',
        responses: {
          successResponse: [
            () => successSound.play(),
            `${userInputPrefix} '${lastInput}'`,
            `${outputPrefix} SUCCESS!`,
            spacer,
            `${outputPrefix} ERROR 2/10`,
            `${outputPrefix} ORDER: 254361`,
            `${outputPrefix} LogLine#5>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>____REFERENCE#_8___<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______`,
            `${outputPrefix} LogLine#6>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>____REFERENCE#_3___<<<<<<<<<<<<<<<<<<<______Too_Far_______`,
            `${outputPrefix} LogLine#2>>>>>>>>>>>>>>>>>>>___REFERENCE#_2___>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>___CODE_TOO_LONG__`,
            `${outputPrefix} LogLine#4>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>____REFERENCE#_2___`,
            `${outputPrefix} LogLine#1>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>____REFERENCE#_7___<<<<<<<<<<<<<<<<<<<______Too_Far_______`,
            `${outputPrefix} LogLine#3>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>____REFERENCE#_8___<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______`,
            spacer,
            `${outputPrefix} LOG LINES TOO LONG TYPE REFERENCE NUMBERS THEN PRESS ENTER`,
            spacer,
            () => readyForInput.play(),
          ],
          failureResponse: [
            () => failSound.play(),
            `${userInputPrefix} '${lastInput}'`,
            setGlitching(true),
            `${outputPrefix} FAILED`,
            setGlitching(false),
            spacer,
            `${outputPrefix} LOG LINES TOO LONG TYPE REFERENCE NUMBERS THEN PRESS ENTER`,
            spacer,
            () => readyForInput.play(),
          ],
        },
      },
    },
    {
      id: 2,
      dialog: {
        expectedInput: '282837',
        responses: {
          successResponse: [
            () => successSound.play(),
            `${userInputPrefix} '${lastInput}'`,
            `${outputPrefix} SUCCESS!`,
            spacer,
            `${outputPrefix} ERROR 3/10`,
            `${outputPrefix} ORDER: 46 snow 521, 146 snow 52, 2146 snow 5, _ _ _ _ _ _`,
            `${outputPrefix} LogLine#2>>>>>>>>>>>>>>>>>>>___REFERENCE#_7___>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>___CODE_TOO_LONG__`,
            `${outputPrefix} LogLine#1>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>____REFERENCE#_2___<<<<<<<<<<<<<<<<<<<______Too_Far_______`,
            `${outputPrefix} LogLine#4>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>____REFERENCE#_6___`,
            `${outputPrefix} LogLine#6>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>____REFERENCE#_7___<<<<<<<<<<<<<<<<<<<______Too_Far_______`,
            `${outputPrefix} LogLine#5>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>____REFERENCE#_3___<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______`,
            spacer,
            `${outputPrefix} LOG LINES OUT OF ORDER /& TOO LONG. TYPE REFERENCE NUMBERS THEN PRESS ENTER`,
            spacer,
            () => readyForInput.play(),
          ],
          failureResponse: [
            () => failSound.play(),
            `${userInputPrefix} '${lastInput}'`,
            setGlitching(true),
            `${outputPrefix} FAILED`,
            setGlitching(false),
            spacer,
            `${outputPrefix} LOG LINES OUT OF ORDER /& TOO LONG. TYPE REFERENCE NUMBERS THEN PRESS ENTER`,
            spacer,
            () => readyForInput.play(),
          ],
        },
      },
    },
    {
      id: 3,
      dialog: {
        expectedInput: '372672',
        responses: {
          successResponse: [
            () => successSound.play(),
            `${userInputPrefix} '${lastInput}'`,
            `${outputPrefix} SUCCESS!`,
            spacer,
            `${outputPrefix} ERROR 4/10`,
            `${outputPrefix} ORDER: White White Orange Red Brown Blue`,
            `${outputPrefix} LogLine#4>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>____REFERENCE#_0___`,
            `${outputPrefix} LogLine#2>>>>>>>>>>>>>>>>>>>___REFERENCE#_0___>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>___CODE_TOO_LONG__`,
            `${outputPrefix} LogLine#3>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>____REFERENCE#_7___<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______`,
            `${outputPrefix} LogLine#5>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>____REFERENCE#_4___<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______`,
            `${outputPrefix} LogLine#6>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>____REFERENEC#_9___<<<<<<<<<<<<<<<<<<<______Too_Far_______`,
            `${outputPrefix} LogLine#1>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>____REFERENCE#_3___<<<<<<<<<<<<<<<<<<<______Too_Far_______`,
            spacer,
            `${outputPrefix} LOG LINES TOO LONG TYPE REFERNCE NUMBERS THEN PRESS ENTER`,
            spacer,
            () => readyForInput.play(),
          ],
          failureResponse: [
            () => failSound.play(),
            `${userInputPrefix} '${lastInput}'`,
            setGlitching(true),
            `${outputPrefix} FAILED`,
            setGlitching(false),
            spacer,
            `${outputPrefix} LOG LINES OUT OF ORDER /& TOO LONG. TYPE REFERENCE NUMBERS THEN PRESS ENTER`,
            spacer,
            () => readyForInput.play(),
          ],
        },
      },
    },
    {
      id: 4,
      dialog: {
        expectedInput: '774093',
        responses: {
          successResponse: [
            () => successSound.play(),
            `${userInputPrefix} '${lastInput}'`,
            `${outputPrefix} SUCCESS!`,
            spacer,
            `${outputPrefix} ERROR 5/10`,
            `${outputPrefix} ORDER: ◧◉▲=●■`,
            `${outputPrefix} REFERENCE#1>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>______LogLine#■______<<<<<<<<<<<<<<<<<<<______Too_Far_______`,
            `${outputPrefix} REFERENCE#7>>>>>>>>>>>>>>>>>>>_____LogLine#◉______>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>___CODE_TOO_LONG__`,
            `${outputPrefix} REFERENCE#4>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>______LogLine#▲______<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______`,
            `${outputPrefix} REFERENCE#6>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>______LogLine#◧______`,
            `${outputPrefix} REFERENCE#3>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>______LogLine#●______<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______`,
            `${outputPrefix} REFERENCE#9>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>______LogLine#=______<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______`,
            spacer,
            `${outputPrefix} LOG LINES TOO LONG TYPE REFERNCE NUMBERS THEN PRESS ENTER`,
            spacer,
            () => readyForInput.play(),
          ],
          failureResponse: [
            () => failSound.play(),
            `${userInputPrefix} '${lastInput}'`,
            setGlitching(true),
            `${outputPrefix} FAILED`,
            setGlitching(false),
            spacer,
            `${outputPrefix} LOG LINES OUT OF ORDER /& TOO LONG. TYPE REFERENCE NUMBERS THEN PRESS ENTER`,
            spacer,
            () => readyForInput.play(),
          ],
        },
      },
    },
    {
      id: 5,
      dialog: {
        expectedInput: '674931',
        responses: {
          successResponse: [
            () => successSound.play(),
            `${userInputPrefix} '${lastInput}'`,
            `${outputPrefix} SUCCESS!`,
            spacer,
            `${outputPrefix} ERROR 6/10`,
            `${outputPrefix} ORDER: 364521`,
            `${outputPrefix} LogLine#4>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>___REFERENCE#_◉____<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______`,
            `${outputPrefix} LogLine#2>>>>>>>>>>>>>>>>>>>___REFERENCE#_◧___>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>___CODE_TOO_LONG__`,
            `${outputPrefix} LogLine#6>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>___REFERAENCE#_=____`,
            `${outputPrefix} LogLine#3>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>___REFERENCE#_◆____<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______`,
            `${outputPrefix} LogLine#1>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>___REFERENCE#_●____<<<<<<<<<<<<<<<<<<<______Too_Far_______`,
            `${outputPrefix} LogLine#5>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>___REFERENCE#_◆____<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______`,
            spacer,
            `${outputPrefix} LOG LINES TOO LONG TYPE REFERNCE NUMBERS THEN PRESS ENTER`,
            spacer,
            () => readyForInput.play(),
          ],
          failureResponse: [
            () => failSound.play(),
            `${userInputPrefix} '${lastInput}'`,
            setGlitching(true),
            `${outputPrefix} FAILED`,
            setGlitching(false),
            spacer,
            `${outputPrefix} LOG LINES OUT OF ORDER /& TOO LONG. TYPE REFERENCE NUMBERS THEN PRESS ENTER`,
            spacer,
            () => readyForInput.play(),
          ],
        },
      },
    },
    {
      id: 6,
      dialog: {
        expectedInput: '386307',
        responses: {
          successResponse: [
            () => successSound.play(),
            `${userInputPrefix} '${lastInput}'`,
            `${outputPrefix} SUCCESS!`,
            spacer,
            `${outputPrefix} ERROR 7/10`,
            `${outputPrefix} ORDER: ■◉▲+◆◭`,
            `${outputPrefix} LogLine#▲>>>>>>>>>>>>>>>>>>>___REFERENCE#_■___>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>___CODE_TOO_LONG__`,
            `${outputPrefix} LogLine#■>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>___REFERENCE#_◆____<<<<<<<<<<<<<<<<<<<______Too_Far_______`,
            `${outputPrefix} LogLine#+>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>___REFERENCE#_◆____<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______`,
            `${outputPrefix} LogLine#◭>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>___REFERENCE#_=____`,
            `${outputPrefix} LogLine#◉>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>___REFERENCE#_●____<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______`,
            `${outputPrefix} LogLine#◆>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>___REFERENCE#_◆____<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______`,
            spacer,
            `${outputPrefix} LOG LINES TOO LONG TYPE REFERNCE NUMBERS THEN PRESS ENTER`,
            spacer,
            () => readyForInput.play(),
          ],
          failureResponse: [
            () => failSound.play(),
            `${userInputPrefix} '${lastInput}'`,
            setGlitching(true),
            `${outputPrefix} FAILED`,
            setGlitching(false),
            spacer,
            `${outputPrefix} LOG LINES OUT OF ORDER /& TOO LONG. TYPE REFERENCE NUMBERS THEN PRESS ENTER`,
            spacer,
            () => readyForInput.play(),
          ],
        },
      },
    },
    {
      id: 7,
      dialog: {
        expectedInput: '371338',
        responses: {
          successResponse: [
            () => successSound.play(),
            `${userInputPrefix} '${lastInput}'`,
            `${outputPrefix} SUCCESS!`,
            spacer,
            `${outputPrefix} ERROR 8/10`,
            `${outputPrefix} ORDER: ◉▲◆◭■+`,
            `${outputPrefix} LogLine#4>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>___REFERENCE#_+____`,
            `${outputPrefix} LogLine#2>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>___REFERENCE#_▲____<<<<<<<<<<<<<<<<<<<______Too_Far_______`,
            `${outputPrefix} LogLine#1>>>>>>>>>>>>>>>>>>>___REFERENCE#_●___>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>___CODE_TOO_LONG__`,
            `${outputPrefix} LogLine#3>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>___REFERENCE#_-____<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______`,
            `${outputPrefix} LogLine#6>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>___REFERENCE#_◭____<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______`,
            `${outputPrefix} LogLine#5>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>___REFERENCE#_=____<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______`,
            spacer,
            `${outputPrefix} LOG LINES TOO LONG TYPE REFERNCE NUMBERS THEN PRESS ENTER`,
            spacer,
            () => readyForInput.play(),
          ],
          failureResponse: [
            () => failSound.play(),
            `${userInputPrefix} '${lastInput}'`,
            setGlitching(true),
            `${outputPrefix} FAILED`,
            setGlitching(false),
            spacer,
            `${outputPrefix} LOG LINES OUT OF ORDER & TOO LONG. TYPE REFERENCE NUMBERS THEN PRESS ENTER`,
            spacer,
            () => readyForInput.play(),
          ],
        },
      },
    },
    {
      id: 8,
      dialog: {
        expectedInput: '429578',
        responses: {
          successResponse: [
            () => successSound.play(),
            `${userInputPrefix} '${lastInput}'`,
            `${outputPrefix} SUCCESS!`,
            spacer,
            `${outputPrefix} ERROR 9/10`,
            `${outputPrefix} ORDER: ▲=-+◆◧`,
            `${outputPrefix} LogLine#White>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>___REFERENCE#_=____<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______`,
            `${outputPrefix} LogLine#Green>>>>>>>>>>>>>>>>>>>___REFERENCE#_●___>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>___CODE_TOO_LONG__`,
            `${outputPrefix} LogLine#purple>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>___REFERENCE#_+____`,
            `${outputPrefix} LogLine#Yellow>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>___REFERENCE#_▲____<<<<<<<<<<<<<<<<<<<______Too_Far_______`,
            `${outputPrefix} LogLine#Silver>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>___REFERENCE#_◭____<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______`,
            `${outputPrefix} LogLine#Orange>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>___REFERENCE#_-____<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______`,
            spacer,
            `${outputPrefix} LOG LINES TOO LONG TYPE REFERNCE NUMBERS THEN PRESS ENTER`,
            spacer,
            () => readyForInput.play(),
          ],
          failureResponse: [
            () => failSound.play(),
            `${userInputPrefix} '${lastInput}'`,
            setGlitching(true),
            `${outputPrefix} FAILED`,
            setGlitching(false),
            spacer,
            `${outputPrefix} LOG LINES OUT OF ORDER & TOO LONG. TYPE REFERENCE NUMBERS THEN PRESS ENTER`,
            spacer,
            () => readyForInput.play(),
          ],
        },
      },
    },
    {
      id: 9,
      dialog: {
        expectedInput: '724985',
        responses: {
          successResponse: [
            () => successSound.play(),
            `${userInputPrefix} '${lastInput}'`,
            `${outputPrefix} SUCCESS!`,
            spacer,
            `${outputPrefix} ERROR 10/10`,
            `${outputPrefix} ORDER: ■◉=◧+◆`,
            `${outputPrefix} REFERENCE#_◆_>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>______LogLine#White______<<<<<<<<<<<<<<<<<<<______Too_Far_______`,
            `${outputPrefix} REFERENCE#_◭_>>>>>>>>>>>>>>>>>>>_____LogLine#Orange______>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>___CODE_TOO_LONG__`,
            `${outputPrefix} REFERENCE#_=_>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>______LogLine#Blue______<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______`,
            `${outputPrefix} REFERENCE#_◧_>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>______LogLine#Yellow______`,
            `${outputPrefix} REFERENCE#_◉_>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>_____KEEP_GOING____>>>>>>>>>>>>>>>>>>>______LogLine#Brown______<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______`,
            `${outputPrefix} REFERENCE#_●_>>>>>>>>>>>>>>>>>>>__CODE_TOO_LONG__>>>>>>>>>>>>>>>>>>>______LogLine#purple______<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far_______<<<<<<<<<<<<<<<<<<<______Too_Far______`,
            spacer,
            `${outputPrefix} LOG LINES TOO LONG TYPE REFERNCE NUMBERS THEN PRESS ENTER`,
            spacer,
            () => readyForInput.play(),
          ],
          failureResponse: [
            () => failSound.play(),
            `${userInputPrefix} '${lastInput}'`,
            setGlitching(true),
            `${outputPrefix} FAILED`,
            setGlitching(false),
            spacer,
            `${outputPrefix} LOG LINES OUT OF ORDER & TOO LONG. TYPE REFERENCE NUMBERS THEN PRESS ENTER`,
            spacer,
            () => readyForInput.play(),
          ],
        },
      },
    },
    {
      id: 10,
      dialog: {
        expectedInput: '860743',
        responses: {
          successResponse: [],
          failureResponse: [],
        },
      },
    },
  ];
};