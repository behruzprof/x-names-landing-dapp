import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import MUITypography, { TypographyProps } from '@mui/material/Typography'
import theme from './theme'

export default function Typography<C extends React.ElementType>(
  props: TypographyProps<C, { component?: C }>
) {
  return (
    <ThemeProvider theme={theme}>
      <MUITypography {...props} />
    </ThemeProvider>
  )
}
