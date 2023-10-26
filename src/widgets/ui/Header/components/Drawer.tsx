import React from 'react'
import MUIDrawer, { DrawerProps } from '@mui/material/Drawer'
import { Wrapper } from '../styles'
import { BTypography } from '@/shared/ui'

export default function Drawer(props: DrawerProps) {
  return (
    <MUIDrawer {...props}>
      <Wrapper padding='20px'>
        <BTypography fontSize='64px' fontWeight='600'>
          Sidebar
        </BTypography>
      </Wrapper>
    </MUIDrawer>
  )
}
