import React from 'react'
import MUIButton, { ButtonProps } from '@mui/material/Button'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'

export default function BButton(props: ButtonProps) {
  return (
    <ThemeProvider theme={theme}>
      <MUIButton {...props} />
    </ThemeProvider>
  )
}
