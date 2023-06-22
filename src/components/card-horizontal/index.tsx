import { Box } from '@mui/material'
import styles from './card-horizontal.module.scss'
import { CardHorizontalProps } from './card-horizontal.type'

const CardHorizontal = ({ image, mainTitle, subTitle, children, type = 'horizontal' }: CardHorizontalProps) => {
  return (
    <Box className={type === 'horizontal' ? styles['card-horizontal'] : styles['card-horizontal-custom']}>
      <Box component="img" src={image} />
      <Box className={styles['right-content']}>
        <Box component="p" className={styles['main-title']}>
          {mainTitle}
        </Box>
        <Box component="p" className={styles['sub-title']}>
          {subTitle}
        </Box>
        {children}
      </Box>
    </Box>
  )
}

export default CardHorizontal
