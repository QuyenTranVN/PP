import { Box, List, ListItem } from '@mui/material'
import Logo from 'assets/imgs/logo.svg'
import styles from './header.module.scss'
import HamburgerIcon from 'assets/icons/hamburger'
import TemporaryDrawer from 'components/drawer'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Button from 'elements/button'

const dataLink = [
  { to: '/', title: '기능소개' },
  { to: '/landing-page', title: '기업소개' },
  { to: '/home', title: '도입문의' }
]

const dataLinkMatch = [
  { to: '/', title: '기능소개' },
  { to: '/landing-page', title: '기업소개' },
  { to: '/landing', title: '도입문의' }
]

const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const matches = useMediaQuery('(max-width: 576px)')

  const data = matches ? dataLinkMatch : dataLink

  const onClickLogo = () => {
    navigate('/landing-page')
  }

  if (matches) {
    return (
      <Box className={styles['header-wrapper']}>
        <Box component="header" className={styles['header']}>
          <Box component="img" className={styles.logo} src={Logo} />
          <Box className={styles['right-header']}>
            <TemporaryDrawer anchor="right">
              <HamburgerIcon />
            </TemporaryDrawer>
          </Box>
        </Box>
        <Box className={styles['nav']} component="nav">
          <List className={styles['nav-list']}>
            {data.map((link: any, index: number) => (
              <ListItem key={index} disablePadding>
                <Link to={link.to} className={location.pathname === link.to ? styles['active-link'] : styles['link']} relative={link.relative} onClick={(e)=>{
                 if (link.to !== "/landing-page"){
                  e.preventDefault()
                 } 
                }}>
                  {link.title}
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    )
  }

  return (
    <Box component="header" className={styles['header']}>
      <Box onClick={onClickLogo}>
        <Box component="img" className={styles.logo} src={Logo} />
      </Box>
      <Box className={styles['nav']} component="nav">
        <List className={styles['nav-list']}>
          {data.map((link: any, index: number) => (
            <ListItem key={index}>
              <Link to={link.to} className={location.pathname === link.to ? styles['active-link'] : styles['link']} onClick={(e)=>{
                 if (link.to !== "/landing-page"){
                  e.preventDefault()
                 } 
                }}>
                {link.title}
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box className={styles['right-header']}>
        {/* {matches ? null : (
          <Button width={88} height={35} radius={40} style={styles['button-estimate']}>
            견적내기
          </Button>
        )}
        <TemporaryDrawer anchor="right">
          <HamburgerIcon />
        </TemporaryDrawer> */}
        <Button width={135} height={50} radius={10} style={styles['button-free']}>
          견적내기
        </Button>
        <Button width={86} height={50} radius={10} style={styles['button-login']}>
          견적내기
        </Button>
      </Box>
    </Box>
  )
}

export default Header
