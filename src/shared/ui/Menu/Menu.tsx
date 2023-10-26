import React from 'react'
import MUIMenu, { MenuProps } from '@mui/material/Menu'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'

export default function BMenu(props: MenuProps) {
  return (
    <ThemeProvider theme={theme}>
      <MUIMenu {...props} />
    </ThemeProvider>
  )
}
