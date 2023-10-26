import React from 'react'
import MUITextField, { TextFieldProps } from '@mui/material/TextField'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'

export default function BTextField(props: TextFieldProps) {
  return (
    <ThemeProvider theme={theme}>
      <MUITextField {...props} />
    </ThemeProvider>
  )
}
