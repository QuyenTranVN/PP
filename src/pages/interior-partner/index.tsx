import { Box, useMediaQuery } from '@mui/material'
import MapIcon from 'assets/icons/map'
import SlidersIcon from 'assets/icons/sliders'
import CardHorizontal from 'components/card-horizontal'
import Tag from 'elements/Tag'
import { useState } from 'react'
import ModalFilter from './components/modal-filter'
import styles from './interior-partner.module.scss'

const news = [
  {
    image: 'https://i.ibb.co/tZ2mtcp/Rectangle-2660.png',
    subTitle: '[오시즌 위크] 11월 인테리어 키워드 소식지 오픈 특별 할인가 제공',
    mainTitle: '겨울 트렌드 Top10'
  },
  {
    image: 'https://i.ibb.co/tZ2mtcp/Rectangle-2660.png',
    subTitle: '[오시즌 위크] 11월 인테리어 키워드 소식지 오픈 특별 할인가 제공',
    mainTitle: '겨울 트렌드 Top10'
  },
  {
    image: 'https://i.ibb.co/tZ2mtcp/Rectangle-2660.png',
    subTitle: '[오시즌 위크] 11월 인테리어 키워드 소식지 오픈 특별 할인가 제공',
    mainTitle: '겨울 트렌드 Top10'
  },
  {
    image: 'https://i.ibb.co/tZ2mtcp/Rectangle-2660.png',
    subTitle: '[오시즌 위크] 11월 인테리어 키워드 소식지 오픈 특별 할인가 제공',
    mainTitle: '겨울 트렌드 Top10'
  },
  {
    image: 'https://i.ibb.co/tZ2mtcp/Rectangle-2660.png',
    subTitle: '[오시즌 위크] 11월 인테리어 키워드 소식지 오픈 특별 할인가 제공',
    mainTitle: '겨울 트렌드 Top10'
  },
  {
    image: 'https://i.ibb.co/tZ2mtcp/Rectangle-2660.png',
    subTitle: '[오시즌 위크] 11월 인테리어 키워드 소식지 오픈 특별 할인가 제공',
    mainTitle: '겨울 트렌드 Top10'
  },
  {
    image: 'https://i.ibb.co/tZ2mtcp/Rectangle-2660.png',
    subTitle: '[오시즌 위크] 11월 인테리어 키워드 소식지 오픈 특별 할인가 제공',
    mainTitle: '겨울 트렌드 Top10'
  },
  {
    image: 'https://i.ibb.co/tZ2mtcp/Rectangle-2660.png',
    subTitle: '[오시즌 위크] 11월 인테리어 키워드 소식지 오픈 특별 할인가 제공',
    mainTitle: '겨울 트렌드 Top10'
  },
  {
    image: 'https://i.ibb.co/tZ2mtcp/Rectangle-2660.png',
    subTitle: '[오시즌 위크] 11월 인테리어 키워드 소식지 오픈 특별 할인가 제공',
    mainTitle: '겨울 트렌드 Top10'
  }
]

const InteriorPartner = () => {
  const matches = useMediaQuery('(max-width: 576px)')
  const [open, setOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState([])

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const getActiveFilter = (value: any) => {
    setActiveFilter(value)
  }

  console.log(activeFilter)

  return (
    <>
      <Box className={styles['wrapper-interior']}>
        {!matches ? (
          <Box className={styles['group-filter']}>
            <Box component="button" className={styles['filter-button']} onClick={handleClickOpen}>
              <SlidersIcon />
              <Box component="span">상세필터</Box>
            </Box>
            <Box component="button" className={styles['filter-button']}>
              경력
            </Box>
            <Box component="button" className={styles['filter-button']}>
              지역
            </Box>
          </Box>
        ) : null}
        <Box className={styles['list-interior-wrapper']}>
          <Box className={styles['title']}>
            <Box className={styles['left-title']} component="p">
              총 1,212개
            </Box>
            {matches ? (
              <Box className={styles['group-filter']}>
                <Box component="button" className={styles['filter-button']} onClick={handleClickOpen}>
                  <SlidersIcon />
                  <Box component="span">상세필터</Box>
                </Box>
                <Box component="button" className={styles['filter-button']}>
                  경력
                </Box>
                <Box component="button" className={styles['filter-button']}>
                  지역
                </Box>
              </Box>
            ) : null}
            <Box className={styles['right-title']}>
              <MapIcon />
              <Box component="span">지도보기</Box>
            </Box>
          </Box>
          <Box className={styles['list-interior']}>
            {news.map((x: any, index) => (
              <CardHorizontal
                key={index}
                image={x.image}
                mainTitle={x.mainTitle}
                subTitle={x.subTitle}
                type={matches ? 'horizontal' : 'vertical'}
              >
                <Box className={styles['group-tags']}>
                  <Tag color="black" label="건축면허" />
                  <Tag color="gray400" label="보증보험" />
                </Box>
              </CardHorizontal>
            ))}
          </Box>
        </Box>
      </Box>
      <ModalFilter handleClose={handleClose} open={open} getActiveFilter={getActiveFilter} onSave={() => {}} />
    </>
  )
}

export default InteriorPartner
