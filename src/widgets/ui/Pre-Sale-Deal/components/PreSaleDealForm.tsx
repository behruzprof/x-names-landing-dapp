import React from 'react'
// custom
import { BButton, BTextField } from '@/shared/ui'
import { Wrapper } from '../styles'
import { CssVariables } from '@/app/styles/css-variables'
// mui components
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'

export default function PreSaleDealForm() {
  return (
    <Wrapper
      mt={{ md: '60px', xs: '20px' }}
      maxWidth='750px'
      padding={{ md: 0, xs: '0 10px' }}
      flexDirection='column'
      rowGap='40px'
    >
      <Wrapper width='100%' flexWrap='wrap' rowGap='45px' columnGap='20px'>
        <FormControl>
          <InputLabel
            htmlFor='PreSaleDealFormEmail'
            sx={{ top: '-45px', left: '-10px', color: CssVariables.White }}
          >
            Email
          </InputLabel>
          <BTextField
            inputProps={{
              sx: {
                background: CssVariables.White,
                color: CssVariables.Black1,
                borderRadius: '6px',
                width: { sm: '330px', xs: '100%' },
                fontSize: '20px'
              }
            }}
            type='email'
            id='PreSaleDealFormEmail'
          />
        </FormControl>
        <FormControl>
          <InputLabel
            htmlFor='PreSaleDealFormCompanyName'
            sx={{ top: '-45px', left: '-10px', color: CssVariables.White }}
          >
            Company name
          </InputLabel>
          <BTextField
            inputProps={{
              sx: {
                background: CssVariables.White,
                color: CssVariables.Black1,
                borderRadius: '6px',
                width: { sm: '330px', xs: '100%' },
                fontSize: '20px'
              }
            }}
            type='text'
            id='PreSaleDealFormCompanyName'
          />
        </FormControl>
        <FormControl>
          <InputLabel
            htmlFor='PreSaleDealFormFirstName'
            sx={{ top: '-45px', left: '-10px', color: CssVariables.White }}
          >
            First name
          </InputLabel>
          <BTextField
            inputProps={{
              sx: {
                background: CssVariables.White,
                color: CssVariables.Black1,
                borderRadius: '6px',
                width: { sm: '330px', xs: '100%' },
                fontSize: '20px'
              }
            }}
            type='text'
            id='PreSaleDealFormFirstName'
          />
        </FormControl>
        <FormControl>
          <InputLabel
            htmlFor='PreSaleDealFormLastName'
            sx={{ top: '-45px', left: '-10px', color: CssVariables.White }}
          >
            Last Name
          </InputLabel>
          <BTextField
            inputProps={{
              sx: {
                background: CssVariables.White,
                color: CssVariables.Black1,
                borderRadius: '6px',
                width: { sm: '330px', xs: '100%' },
                fontSize: '20px'
              }
            }}
            type='text'
            id='PreSaleDealFormLastName'
          />
        </FormControl>
      </Wrapper>
      <BButton
        variant='contained'
        color='primary'
        sx={{
          width: '100%',
          padding: '15px 0',
          fontSize: '16px',
          fontWeight: '700'
        }}
      >
        Submit
      </BButton>
    </Wrapper>
  )
}
