import { CSSProperties } from 'react'
import { CssVariables, FontFamilies } from '@/app/styles/css-variables'
import { createTheme } from '@mui/material/styles'

export default createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          textTransform: 'capitalize',
          borderRadius: '33px',
          color: CssVariables.White
        }
      },
      defaultProps: {
        className: FontFamilies.INTER
      },
      variants: [
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            background: CssVariables.Orange1,
            color: CssVariables.Black1,
            '&:hover': {
              background: CssVariables.Orange1
            } as CSSProperties,
            '& > span > svg': {
              fill: CssVariables.Black1
            } as CSSProperties
          }
        },
        {
          props: { variant: 'contained', color: 'secondary' },
          style: {
            background: CssVariables.Green1,
            color: CssVariables.Black1,
            '&:hover': {
              background: CssVariables.Green1
            } as CSSProperties,
            '& > span > svg': {
              fill: CssVariables.Black1
            } as CSSProperties
          }
        }
      ]
    }
  }
})
