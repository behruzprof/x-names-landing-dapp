import { CSSProperties } from 'react'
import { CssVariables, FontFamilies } from '@/app/styles/css-variables'
import { createTheme } from '@mui/material/styles'

export default createTheme({
  components: {
    MuiMenu: {
      styleOverrides: {
        paper: {
          paddingTop: '24px',
          paddingBottom: '24px',
          borderRadius: '12px',
          background: 'rgba(22, 23, 23, 0.86)',
          backdropFilter: 'blur(2px)'
        },
        list: {
          padding: 0
        }
      }
    },
    MuiMenuItem: {
      defaultProps: {
        className: FontFamilies.INTER,
        disableGutters: true
      }
    }
  }
})
