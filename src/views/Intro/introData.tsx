export interface IntroData {
  line: string;
  label: string;
  delay: number;
}

export const introData: IntroData[] = [
  //   ..........................................................
  // Microsoft Windows [Version 10.0.18363.720]
  // (c) 2019 Microsoft Corporation. All rights reserved.
  // ..........................................................
  // C: Output > TYPE A COMMAND AND PRESS ENTER
  // C: Output > **EXAMPLE** Login
  // ..........................................................
  {
    line: '.........................................................',
    label: '',
    delay: 0,
  },
  {
    line: 'Microsoft Windows [Version 10.0.18363.720]',
    label: 'Microsoft Windows [Version 10.0.18363.720]',
    delay: 0,
  },
  {
    line: '(c) 2019 Microsoft Corporation. All rights reserved.',
    label: '(c) 2019 Microsoft Corporation. All rights reserved.',
    delay: 0,
  },
  {
    line: '.........................................................',
    label: '',
    delay: 0,
  },
  {
    line: 'C: Output > TYPE A COMMAND AND PRESS ENTER',
    label: 'C: Output > TYPE A COMMAND AND PRESS ENTER',
    delay: 0,
  },
  {
    line: 'C: Output > **EXAMPLE** Login',
    label: 'C: Output > **EXAMPLE** Login',
    delay: 0,
  },
  {
    line: '.........................................................',
    label: '',
    delay: 0,
  },
];
