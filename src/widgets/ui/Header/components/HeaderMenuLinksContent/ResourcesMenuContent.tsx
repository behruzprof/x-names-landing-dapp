import React from 'react'
import Image from 'next/image'
import { ResourceLink } from './constants'
import { Wrapper } from '../../styles'
import { BTypography } from '@/shared/ui'

export default function ResourcesMenuContent() {
  return (
    <Wrapper columnGap='36px' padding='0 10px'>
      {ResourceLink.map((group, idx) => (
        <Wrapper
          key={idx}
          flexDirection='column'
          rowGap='10px'
          height='100%'
          sx={{ justifyContent: 'flex-start' }}
        >
          {group.map((link, idx) => (
            <Wrapper
              key={idx}
              width='100%'
              height='100%'
              columnGap='5px'
              sx={{ justifyContent: 'flex-start', cursor: 'pointer' }}
            >
              <Image
                src={link.Icon}
                alt={link.text}
                style={{ width: '23px', height: 'auto' }}
              />
              <BTypography
                children={link.text}
                fontSize='16px'
                lineHeight='30px'
                fontWeight={400}
                component='a'
                href={link.link}
                target='_blank'
                sx={{ textDecoration: 'none' }}
              />
            </Wrapper>
          ))}
        </Wrapper>
      ))}
    </Wrapper>
  )
}
