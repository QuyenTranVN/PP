import { CircularProgress } from '@mui/material'
import styles from './Loading.module.scss'

interface LoadingProps {
  type: 'normal' | 'standard'
  size: 'small' | 'medium'
}

const Loading = ({ type, size }: LoadingProps) => {
  return (
    <CircularProgress
      className={type === 'normal' ? styles.loading_normal : styles.loading_standard}
      size={size === 'small' ? 20 : 30}
    />
  )
}

export default Loading
