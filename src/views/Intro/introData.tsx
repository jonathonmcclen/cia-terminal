export interface IntroData {
  line: string;
  label: string;
  delay: number;
}

const thisYear = new Date().getFullYear();

export const introData: IntroData[] = [
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
    line: `(c) ${thisYear} Microsoft Corporation. All rights reserved.`,
    label: `(c) ${thisYear} Microsoft Corporation. All rights reserved.`,
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
