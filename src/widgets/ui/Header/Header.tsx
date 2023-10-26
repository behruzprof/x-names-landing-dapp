'use client'
import React, { useState } from 'react'
// mui components
import Toolbar from '@mui/material/Toolbar'
import Hidden from '@mui/material/Hidden'
import IconButton from '@mui/material/IconButton'
// custom components
import { Wrapper } from './styles'
import { BButton } from '@/shared/ui'
// header components
import Logo from './components/Logo'
import HeaderLinkMenu from './components/HeaderMenuLink'
import DomainsMenuContent from './components/HeaderMenuLinksContent/DomainsMenuContent'
import ResourcesMenuContent from './components/HeaderMenuLinksContent/ResourcesMenuContent'
import Drawer from './components/Drawer'
// mui icons
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { styled } from '@mui/material'
import { useClassToggle } from './useClassToggle'
import { media } from '@/shared/styles/media'
import { CssVariables } from '@/app/styles/css-variables'
import { globalTheme } from '@/app/styles/global-theme'

export default function Header() {
  const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false)

  useClassToggle()

  const handleOpenDrawer = () => {
    setIsOpenDrawer((state) => !state)
  }
  return (
    <>
      <HeaderElement className='bictory-header-element'>
        <Toolbar
          variant='dense'
          disableGutters
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Wrapper
            sx={{
              width: { md: '68%', lg: '60%' },
              justifyContent: 'space-between'
            }}
          >
            <Logo />
            <Hidden mdDown>
              <Wrapper columnGap={'30px'}>
                <HeaderLinkMenu
                  buttonContent='Domains'
                  menuContent={<DomainsMenuContent />}
                />
                <HeaderLinkMenu
                  buttonContent='Resources'
                  menuContent={<ResourcesMenuContent />}
                />
              </Wrapper>
            </Hidden>
          </Wrapper>
          <Hidden mdUp>
            <IconButton
              size='large'
              onClick={handleOpenDrawer}
              sx={{ color: CssVariables.White }}
            >
              {isOpenDrawer ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Hidden>
        </Toolbar>
      </HeaderElement>
      <Drawer
        open={isOpenDrawer}
        anchor='right'
        PaperProps={{
          sx: {
            width: '100%',
            marginTop: '68px',
            background: 'rgba(22, 23, 23, 0.86)',
            backdropFilter: 'blur(2px)'
          }
        }}
        hideBackdrop
        sx={{ zIndex: '3' }}
      />
    </>
  )
}

const HeaderElement = styled('header')`
  overflow: hidden;
  position: sticky;
  z-index: 5;
  top: 0;
  padding: 10px;

  background-color: transparent;
  transition: background-color 250ms ease-in-out;

  & > * {
    width: min(100%, 1440px);
    margin: auto;
  }

  &.page-scrolled {
    z-index: 5;
    background-color: rgba(22, 23, 23, 0.86);
  }

  ${globalTheme.breakpoints.down('md')} {
    background-color: rgba(22, 23, 23, 0.86);
    backdrop-filter: blur(2px);
  }
`
