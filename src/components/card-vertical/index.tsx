import { Box } from '@mui/material'
import styles from './card-vertical.module.scss'
import { CardVerticalProps } from './card-vertical.type'

const CardVertical = ({ image, title }: CardVerticalProps) => {
  return (
    <Box className={styles['card-vertical']}>
      <Box component="img" src={image} alt={title} />
      <Box component="p">{title}</Box>
    </Box>
  )
}

export default CardVertical
