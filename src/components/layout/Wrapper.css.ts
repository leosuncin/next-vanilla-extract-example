import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { getBreakpoint, vars } from '@/styles/vars.css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'row-reverse',
  transition: `opacity ${vars.duration.menu} ease`,
  margin: '0 auto',
  maxWidth: '100%',
  opacity: 1,
  padding: calc.multiply(vars.size.sectionSpacing, 1.5),
  width: '90em',

  selectors: {
    'body.is-menu-visible &': {
      opacity: 0.15,
    },
    'body.single &': {
      display: 'block',
    },
  },

  '@media': {
    [getBreakpoint('<= xlarge')]: {
      padding: vars.size.sectionSpacing,
    },
    [getBreakpoint('<= large')]: {
      display: 'block',
    },
    [getBreakpoint('<= small')]: {
      padding: vars.size.sectionSpacingSmall,
    },
  },
});
