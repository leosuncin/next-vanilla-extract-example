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
