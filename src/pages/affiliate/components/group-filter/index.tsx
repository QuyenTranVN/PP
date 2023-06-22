import { Box } from '@mui/material'
import styles from './group-filter.module.scss'
import { GroupFilterProps } from './group-filter.type'

const GroupFilter = ({ data, title, onClick }: GroupFilterProps) => {
  return (
    <Box className={styles['group-filter-wrapper']}>
      <Box className={styles['title']} component="span">
        {title}
      </Box>
      <Box className={styles['note']} component="span">
        (택1)
      </Box>
      <Box className={styles['list-item']}>
        {data.map((x: any, index: number) => (
          <Box
            key={index}
            component="button"
            className={x.isActive ? styles['button-filter-active'] : styles['button-filter']}
            onClick={() => onClick(x)}
          >
            {x.kor}
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default GroupFilter
