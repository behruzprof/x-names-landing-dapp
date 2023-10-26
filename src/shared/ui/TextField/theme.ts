import { CssVariables, FontFamilies } from '@/app/styles/css-variables'
import { createTheme } from '@mui/material/styles'

export default createTheme({
  components: {
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: CssVariables.White
        }
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        input: {
          padding: '5px 20px',
          background: CssVariables.Black2,
          borderRadius: '24px'
        }
      },
      defaultProps: {
        disableUnderline: true
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: '24px'
        }
      },
      defaultProps: {
        className: FontFamilies.INTER
      },
    }
  }
})
