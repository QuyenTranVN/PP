/** @format */

import { Box } from '@mui/material'
import Button from 'elements/button'
import { useNavigate } from 'react-router-dom'
import styles from './header.module.scss'

const Header = () => {
  const navigate = useNavigate()
  return (
    <Box component='header' className={styles['header']}>
      <Box className={styles['right-header']}>
        <Button
          cate='standard'
          width={100}
          height={40}
          radius={25}
          style={styles['button-project']}
        >
          Projects
        </Button>
        <Button
          cate='standard'
          width={100}
          height={40}
          radius={25}
          style={styles['button-project']}
        >
          Contact
        </Button>
      </Box>
    </Box>
  )
}

export default Header
