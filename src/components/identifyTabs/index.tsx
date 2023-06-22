import { Box, Tabs, Tab } from '@mui/material'
import { useState, SyntheticEvent } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './identify.module.scss'
export default function IdentifyTabs() {
  const [value, setValue] = useState(0)
  const location = useLocation()
  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box className={`${styles.tab_container}`}>
      <Tabs
        className={`${styles.tabs}`}
        value={location.pathname}
        onChange={handleChange}
        aria-label="nav tabs example"
        TabIndicatorProps={{
          style: {
            backgroundColor: '#000'
          }
        }}
      >
        <Tab
          className={`${styles.tab_item}`}
          component={Link}
          label="이메일 찾기"
          to="/find-email"
          value="/find-email"
        />
        <Tab
          component={Link}
          className={`${styles.tab_item}`}
          label="비밀번호 찾기"
          to="/find-password"
          value="/find-password"
        />
      </Tabs>
    </Box>
  )
}
