import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import { Anchor, DrawerProps, ListItemLinkProps } from './drawer.type'
import styles from './drawer.module.scss'
import RightArrowIcon from 'assets/icons/right-arrow'
import { Collapse, useMediaQuery } from '@mui/material'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ListItem, ListItemText } from '@mui/material'
import ArrowUpIcon from 'assets/icons/arrow-up'
import ArrowDownIcon from 'assets/icons/arrow-down'
import useToggle from 'hooks/use-toggle'
import Divider from 'elements/divider'
import CloseIcon from 'assets/icons/close'

const dataRightMenu = {
  '/portfolio': '포트폴리오',
  '/interior-partner': '인테리어파트너',
  '/affiliate': '제휴사',
  '/interior-information': '인테리어정보',
  '/customer-center': '고객센터',
  '/q&a': '문의하기'
} as any

const TemporaryDrawer = ({ children, anchor }: DrawerProps) => {
  const matches = useMediaQuery('(max-width: 576px)')
  const location = useLocation()
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  })
  const [openConstruction, toggleConstruction] = useToggle(false)
  const [openCustomerCenter, toggleCustomerCenter] = useToggle(false)

  const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const ListItemLink = ({ to = '', text = '', open, onClick }: ListItemLinkProps) => {
    if (to) {
      return (
        <ListItem
          disablePadding
          className={location.pathname === to ? styles['active-item-link'] : styles['item-link']}
        >
          <ListItemButton component={Link as any} to={to} className={styles['button-link']}>
            <ListItemText primary={dataRightMenu[to]} className={styles['title-item']} />
          </ListItemButton>
        </ListItem>
      )
    }
    return (
      <ListItem disablePadding onClick={onClick} className={styles['item-link']}>
        <ListItemButton className={styles['button-link']}>
          <ListItemText primary={text} className={styles['title-item']} />
        </ListItemButton>
        {open ? <ArrowUpIcon /> : <ArrowDownIcon />}
      </ListItem>
    )
  }

  const list = (anchor: Anchor) => (
    <Box
      className={styles['content-drawer']}
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : '100%' }}
      role="presentation"
    >
      <Box className={styles['close-icon']} onClick={toggleDrawer(anchor, false)}>
        <CloseIcon />
      </Box>
      <Box className={styles['login-box']}>
        <Box component="span" className={styles['top-title-one']}>
          로그인
        </Box>
        <Box component="span" className={styles['top-title-two']}>
          이 필요합니다.
        </Box>
        <RightArrowIcon />
        <Box className={styles['bottom-title']}>
          <Box component="span" className={styles['bottom-title-one']}>
            아직 회원이 아니신가요?
          </Box>
          <Box component="span" className={styles['bottom-title-two']}>
            회원가입 하러가기
          </Box>
        </Box>
      </Box>
      <Box className={styles['divider']}></Box>
      <List className={styles['list-item']}>
        <ListItemLink text="시공전문가" open={openConstruction} onClick={toggleConstruction} />
        <Collapse component="li" in={openConstruction} timeout="auto" unmountOnExit className={styles['collapse']}>
          <List disablePadding className={styles['collapse-list']}>
            <ListItemLink to="/interior-partner" />
            <ListItemLink to="/affiliate" />
          </List>
        </Collapse>
        <Divider />
        <ListItemLink to="/portfolio" />
        <Divider />
        <ListItemLink to="/interior-information" />
        <Divider />
        <ListItemLink text="고객센터" open={openCustomerCenter} onClick={toggleCustomerCenter} />
        <Collapse component="li" in={openCustomerCenter} timeout="auto" unmountOnExit className={styles['collapse']}>
          <List disablePadding className={styles['collapse-list']}>
            <ListItemLink to="/customer-center" />
            <ListItemLink to="/q&a" />
          </List>
        </Collapse>
        <Divider />
      </List>
    </Box>
  )

  return (
    <>
      <Button className={styles['button-drawer']} onClick={toggleDrawer(anchor, true)}>
        {children}
      </Button>
      <Drawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
        sx={{
          '& .MuiPaper-root': {
            width: matches ? '100%' : 375
          },
          zIndex: 9999
        }}
      >
        {list(anchor)}
      </Drawer>
    </>
  )
}

export default TemporaryDrawer
