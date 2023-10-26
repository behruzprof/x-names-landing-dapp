import { CSSProperties } from 'react'
import { CssVariables, FontFamilies } from '@/app/styles/css-variables'
import { createTheme } from '@mui/material/styles'

export default createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: CssVariables.White
        }
      },
      defaultProps: {
        className: FontFamilies.INTER
      }
    }
  }
})
