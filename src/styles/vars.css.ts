import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  misc: {
    zIndexBase: '10000',
  },
  duration: {
    menu: '0.5s',
    transition: '0.2s',
  },
  size: {
    elementHeight: '2.75em',
    elementMargin: '2em',
    sectionSpacing: '3em',
    sectionSpacingSmall: '1.5em',
    menu: '25em',
  },
  font: {
    family: '"Source Sans Pro", Helvetica, sans-serif',
    familyFixed: '"Courier New", monospace',
    familyHeading: '"Raleway", Helvetica, sans-serif',
    weight: '400',
    weightBold: '700',
    weightHeading: '400',
    weightHeadingBold: '800',
    weightHeadingExtrabold: '900',
    kerningHeading: '0.25em',
  },
  palette: {
    bg: '#ffffff',
    bgAlt: '#f4f4f4',
    fg: '#646464',
    fgBold: '#3c3b3b',
    fgLight: '#aaaaaa',
    border: 'rgba(160,160,160,0.3)',
    borderBg: 'rgba(160,160,160,0.075)',
    borderAlt: 'rgba(160,160,160,0.65)',
    accent: '#2ebaae',
  },
});

const resolution: Record<string, [number | null, number]> = {
  xlarge: [1281, 1680],
  large: [981, 1280],
  medium: [737, 980],
  small: [481, 736],
  xsmall: [null, 480],
};

type Operator = '>=' | '<=' | '>' | '<' | '!';

type Resolution = keyof typeof resolution;

export function getBreakpoint(
  query: `${Operator} ${Resolution}` | Resolution,
): string {
  let [operator, size] = query.split(' ') as [Operator | undefined, Resolution];

  if (!size) {
    size = operator as Resolution;
    operator = undefined;
  }
  const [min, max] = resolution[size];

  // Max only
  if (min == null) {
    if (operator === '>=') {
      return 'screen';
    }

    if (operator === '>' || operator === '!') {
      return `screen and (min-width: ${max + 1}px)`;
    }

    if (operator === '<') {
      throw new Error('Invalid');
    }

    return `screen and (max-width: ${max}px)`;
  }

  // Min only
  if (max == null) {
    if (operator === '>') {
      throw new Error('Invalid');
    }

    if (operator === '<' || operator === '!') {
      return `screen and (max-width: ${min - 1}px)`;
    }

    if (operator === '<=') {
      return 'screen';
    }

    return `screen and (min-width: ${min}px)`;
  }

  // Min and max
  if (operator === '>=') {
    return `screen and (min-width: ${min}px)`;
  }

  if (operator === '<=') {
    return `screen and (max-width: ${max}px)`;
  }

  if (operator === '>') {
    return `screen and (min-width: ${max + 1})`;
  }

  if (operator === '<') {
    return `screen and (max-width: ${min - 1})`;
  }

  if (operator === '!') {
    return `screen and (max-width: ${min - 1}), screen and (min-width: ${
      max + 1
    })`;
  }

  return `screen and (min-width: ${min}px) and (max-width: ${max}px)`;
}
