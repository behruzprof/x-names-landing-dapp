import React from 'react'
import Badge from '@mui/material/Badge'

import { Wrapper } from '../../styles'
import { BButton, BTypography } from '@/shared/ui'
import { CssVariables } from '@/app/styles/css-variables'
import { DomainLinks } from './constants'

export default function DomainsMenuContent() {
  return (
    <Wrapper flexDirection='column' padding='0 20px' rowGap='10px'>
      {DomainLinks.map((link) => (
        <Wrapper
          key={link.text}
          width='100%'
          columnGap='10px'
          sx={{ justifyContent: 'space-between' }}
        >
          <Wrapper>
            <Badge
              variant='dot'
              sx={{
                '& > span': {
                  background: link.isLive
                    ? CssVariables.Green1
                    : CssVariables.Orange1
                }
              }}
            />
            <BTypography fontSize='16px' lineHeight='30px' paddingLeft='10px'>
              {link.text}
            </BTypography>
          </Wrapper>
          <BButton
            variant='contained'
            size='small'
            color={link.isLive ? 'secondary' : 'primary'}
          >
            {link.isLive ? 'Live' : 'Coming Soon'}
          </BButton>
        </Wrapper>
      ))}
    </Wrapper>
  )
}
