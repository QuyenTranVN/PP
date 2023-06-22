import { Box } from '@mui/material'
import styles from './group-filter.module.scss'
import { ItemFilterProps } from './group-filter.type'

const GroupItem = ({ data, title, onClick }: ItemFilterProps) => {
  return (
    <Box className={styles['group-item']}>
      <Box className={styles['title']} component="p">
        {title}
      </Box>
      <Box className={styles['list-item']}>
        {data.map((x: any, index: number) => (
          <Box
            key={index}
            className={x.isActive ? styles['button-filter-active'] : styles['button-filter']}
            component="button"
            onClick={() => onClick(x)}
          >
            {x.kor}
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default GroupItem
