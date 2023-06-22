import { Box, useMediaQuery } from '@mui/material'
import LeftArrowIcon from 'assets/icons/left-arrow'
import CardHorizontal from 'components/card-horizontal'
import Button from 'elements/button'
import Divider from 'elements/divider'
import { useFilter } from 'hooks/use-filter'
import { useState } from 'react'
import styles from './affiliate.module.scss'
import GroupFilter from './components/group-filter'

const kind = [
  { eng: 'a', kor: '이사', isActive: false },
  { eng: 'b', kor: '이사', isActive: false },
  { eng: 'c', kor: '이사', isActive: false },
  { eng: 'd', kor: '이사', isActive: false }
]

const region = [
  { eng: 'e', kor: '서울', isActive: false },
  { eng: 'f', kor: '이사', isActive: false },
  { eng: 'g', kor: '이사', isActive: false },
  { eng: 'h', kor: '이사', isActive: false }
]

const affiliate = [
  { mainTitle: '최강청소', subTitle: '서울', image: 'https://i.ibb.co/MBH4zQL/Rectangle-2660-1.png' },
  { mainTitle: '최강청소', subTitle: '서울', image: 'https://i.ibb.co/MBH4zQL/Rectangle-2660-1.png' },
  { mainTitle: '최강청소', subTitle: '서울', image: 'https://i.ibb.co/MBH4zQL/Rectangle-2660-1.png' },
  { mainTitle: '최강청소', subTitle: '서울', image: 'https://i.ibb.co/MBH4zQL/Rectangle-2660-1.png' },
  { mainTitle: '최강청소', subTitle: '서울', image: 'https://i.ibb.co/MBH4zQL/Rectangle-2660-1.png' },
  { mainTitle: '최강청소', subTitle: '서울', image: 'https://i.ibb.co/MBH4zQL/Rectangle-2660-1.png' }
]

const Affiliate = () => {
  const matches = useMediaQuery('(max-width: 576px)')
  const [filterKind, resetFilterKind, onClickFilterKind, filterActiveKind] = useFilter(kind)

  const [filterRegion, resetFilterRegion, onClickFilterRegion, filterActiveRegion] = useFilter(region)
  console.log(filterKind)
  const [isFilter, setIsFilter] = useState(false)

  return (
    <Box className={styles['affiliate-wrapper']}>
      {isFilter ? (
        <Box className={styles['list-affiliate-wrapper']}>
          <Box className={styles['header']} role="button" onClick={() => setIsFilter(false)}>
            <LeftArrowIcon />
            <Box component="span">재검색</Box>
          </Box>
          <Divider style={styles['divider']} />
          <Box className={styles['list-affiliate']}>
            {affiliate.map((x: any) => (
              <CardHorizontal
                image={x.image}
                mainTitle={x.mainTitle}
                subTitle={x.subTitle}
                type={matches ? 'horizontal' : 'vertical'}
              >
                <Box className={styles['group-tags']}>
                  <Box className={styles['tag']}>청소</Box>
                </Box>
              </CardHorizontal>
            ))}
          </Box>
        </Box>
      ) : (
        <Box className={styles['filter-groups-wrapper']}>
          <Box className={styles['filter-groups']}>
            <GroupFilter title="어떤 제휴사를 찾고계시나요?" data={filterKind} onClick={onClickFilterKind} />
            <GroupFilter title="어떤 제휴사를 찾고계시나요?" data={filterRegion} onClick={onClickFilterRegion} />
          </Box>
          <Button
            style={styles['button-find']}
            width={343}
            cate="standard"
            disabled={filterActiveKind.length === 0 && filterActiveKind.length === 0}
            onClick={() => setIsFilter(true)}
          >
            찾기
          </Button>
        </Box>
      )}
    </Box>
  )
}

export default Affiliate
