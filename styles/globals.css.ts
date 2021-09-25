import { globalStyle } from '@vanilla-extract/css'

import { vars } from './vars.css'

globalStyle('html, body', {
  padding: 0,
  margin: 0,
  fontFamily: vars.fonts.main,
})

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
})

globalStyle('*', {
  boxSizing: 'border-box',
})
