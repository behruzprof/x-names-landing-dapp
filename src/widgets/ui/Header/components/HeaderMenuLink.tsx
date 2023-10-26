import { ReactNode, useState, MouseEvent } from 'react'
// mui components
import Fade from '@mui/material/Fade'
// icons
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp'
// custom components
import { BButton, BMenu } from '@/shared/ui'
interface HeaderLinkMenuProps {
  buttonContent: string
  menuContent: ReactNode
}

export default function HeaderLinkMenu({
  buttonContent,
  menuContent
}: HeaderLinkMenuProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleHover = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
    if (timerId) stopTimer()
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  let timerId: unknown
  const startTimer = () => {
    timerId = setTimeout(handleClose, 100)
  }
  const stopTimer = () => {
    clearTimeout(timerId as number)
  }
  return (
    <>
      <BButton
        id={`fade-button-${buttonContent}`}
        endIcon={
          open ? (
            <KeyboardArrowUp sx={{ fontSize: '24px' }} />
          ) : (
            <KeyboardArrowDown sx={{ fontSize: '24px' }} />
          )
        }
        sx={{
          fontSize: '16px',
          fontWeight: '600',
          lineHeight: '30px'
        }}
        onClick={handleHover}
        onMouseEnter={handleHover}
        onMouseLeave={startTimer}
      >
        {buttonContent}
      </BButton>
      <BMenu
        id={`fade-menu-${buttonContent}`}
        sx={{ width: 'max-content' }}
        anchorEl={anchorEl}
        open={open}
        TransitionComponent={Fade}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        PaperProps={{
          onMouseEnter: stopTimer,
          onMouseLeave: handleClose,
          sx: {
            minWidth: '320px'
          }
        }}
        hideBackdrop
      >
        {menuContent}
      </BMenu>
    </>
  )
}
