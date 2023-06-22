import { Box } from '@mui/material'
import styles from './divider.module.scss'

const Divider = ({ style }: { style?: string }) => {
  return <Box className={`${styles['divider']} ${style || ''}`}></Box>
}

export default Divider
