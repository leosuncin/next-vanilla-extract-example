import { globalStyle, style } from '@vanilla-extract/css';

import { vars } from './vars.css';

export const container = style({
  minHeight: '100vh',
  padding: '0 0.5rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const main = style({
  padding: '5rem 0',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const footer = style({
  width: '100%',
  height: 100,
  borderTop: '1px solid #eaeaea',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
globalStyle(`${footer} img`, {
  marginLeft: '0.5rem',
});
globalStyle(`${footer} a`, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const centerText = style({
  textAlign: 'center',
});

export const title = style([
  {
    margin: 0,
    lineHeight: 1.15,
    fontSize: '4rem',
  },
  centerText,
]);
globalStyle(`${title} a`, {
  color: vars.colors.main,
  textDecoration: 'none',
});
globalStyle(`${title} a:hover, ${title} a:focus, ${title} a:active`, {
  textDecoration: 'underline',
});

export const description = style([
  {
    lineHeight: 1.5,
    fontSize: '1.5rem',
  },
  centerText,
]);

export const code = style({
  background: '#fafafa',
  borderRadius: '5px',
  padding: '0.75rem',
  fontSize: '1.1rem',
  fontFamily: vars.fonts.code,
});

export const grid = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  maxWidth: 800,
  marginTop: '3rem',

  '@media': {
    '(max-width: 600px)': {
      width: '100%',
      flexDirection: 'column',
    },
  },
});

export const card = style({
  margin: '1rem',
  flexBasis: '45%',
  padding: '1.5rem',
  textAlign: 'left',
  color: 'inherit',
  textDecoration: 'none',
  border: '1px solid #eaeaea',
  borderRadius: '10px',
  transition: 'color 0.15s ease, border-color 0.15s ease',

  selectors: {
    '&:hover, &:focus, &:active': {
      color: vars.colors.main,
      borderColor: vars.colors.main,
    },
  },
});
globalStyle(`${card} h3`, {
  margin: '0 0 1rem 0',
  fontSize: '1.5rem',
});
globalStyle(`${card} p`, {
  margin: 0,
  fontSize: '1.25rem',
  lineHeight: 1.5,
});

export const logo = style({
  height: '1em',
});
