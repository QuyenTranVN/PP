import { Chip } from '@mui/material'
import styles from './tag.module.scss'

interface TagProps {
  variant?: 'outlined' | 'filled'
  color: 'black' | 'gray400' | 'blue'
  label: string
}

const Tag = ({ variant = 'filled', label, color }: TagProps) => {
  return <Chip label={label} variant={variant} className={styles[`${variant}_${color}`]} />
}

export default Tag
