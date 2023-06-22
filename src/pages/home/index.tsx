import { Box, useMediaQuery } from '@mui/material'
import CalculatorIcon from 'assets/icons/calculator'
import HandShakeIcon from 'assets/icons/hand-shake'
import CardHorizontal from 'components/card-horizontal'
import CardVertical from 'components/card-vertical'
import Slider from 'components/slider'
import styles from './home.module.scss'

const interior = [
  {
    image: 'https://i.ibb.co/tZ2mtcp/Rectangle-2660.png',
    title: '신혼 부부가 많이 찾는 모던 신풍 스타일'
  },
  {
    image: 'https://i.ibb.co/tZ2mtcp/Rectangle-2660.png',
    title: '신혼 부부가 많이 찾는 모던 신풍 스타일'
  },
  {
    image: 'https://i.ibb.co/tZ2mtcp/Rectangle-2660.png',
    title: '신혼 부부가 많이 찾는 모던 신풍 스타일'
  }
]

const portfolio = [
  {
    image: 'https://i.ibb.co/gPBmy4Q/Rectangle-2662.png',
    title: '신혼 부부가 많이 찾는 모던 신풍 스타일'
  },
  {
    image: 'https://i.ibb.co/gPBmy4Q/Rectangle-2662.png',
    title: '신혼 부부가 많이 찾는 모던 신풍 스타일'
  },
  {
    image: 'https://i.ibb.co/gPBmy4Q/Rectangle-2662.png',
    title: '신혼 부부가 많이 찾는 모던 신풍 스타일'
  },
  {
    image: 'https://i.ibb.co/gPBmy4Q/Rectangle-2662.png',
    title: '신혼 부부가 많이 찾는 모던 신풍 스타일'
  },
  {
    image: 'https://i.ibb.co/gPBmy4Q/Rectangle-2662.png',
    title: '신혼 부부가 많이 찾는 모던 신풍 스타일'
  },
  {
    image: 'https://i.ibb.co/gPBmy4Q/Rectangle-2662.png',
    title: '신혼 부부가 많이 찾는 모던 신풍 스타일'
  }
]

const news = [
  {
    image: 'https://i.ibb.co/X2rwfYH/Group-14272.png',
    subTitle: '[오시즌 위크] 11월 인테리어 키워드 소식지 오픈 특별 할인가 제공',
    mainTitle: '겨울 트렌드 Top10'
  },
  {
    image: 'https://i.ibb.co/X2rwfYH/Group-14272.png',
    subTitle: '[오시즌 위크] 11월 인테리어 키워드 소식지 오픈 특별 할인가 제공',
    mainTitle: '겨울 트렌드 Top10'
  },
  {
    image: 'https://i.ibb.co/X2rwfYH/Group-14272.png',
    subTitle: '[오시즌 위크] 11월 인테리어 키워드 소식지 오픈 특별 할인가 제공',
    mainTitle: '겨울 트렌드 Top10'
  },
  {
    image: 'https://i.ibb.co/X2rwfYH/Group-14272.png',
    subTitle: '[오시즌 위크] 11월 인테리어 키워드 소식지 오픈 특별 할인가 제공',
    mainTitle: '겨울 트렌드 Top10'
  },
  {
    image: 'https://i.ibb.co/X2rwfYH/Group-14272.png',
    subTitle: '[오시즌 위크] 11월 인테리어 키워드 소식지 오픈 특별 할인가 제공',
    mainTitle: '겨울 트렌드 Top10'
  },
  {
    image: 'https://i.ibb.co/X2rwfYH/Group-14272.png',
    subTitle: '[오시즌 위크] 11월 인테리어 키워드 소식지 오픈 특별 할인가 제공',
    mainTitle: '겨울 트렌드 Top10'
  },
  {
    image: 'https://i.ibb.co/X2rwfYH/Group-14272.png',
    subTitle: '[오시즌 위크] 11월 인테리어 키워드 소식지 오픈 특별 할인가 제공',
    mainTitle: '겨울 트렌드 Top10'
  },
  {
    image: 'https://i.ibb.co/X2rwfYH/Group-14272.png',
    subTitle: '[오시즌 위크] 11월 인테리어 키워드 소식지 오픈 특별 할인가 제공',
    mainTitle: '겨울 트렌드 Top10'
  },
  {
    image: 'https://i.ibb.co/X2rwfYH/Group-14272.png',
    subTitle: '[오시즌 위크] 11월 인테리어 키워드 소식지 오픈 특별 할인가 제공',
    mainTitle: '겨울 트렌드 Top10'
  }
]

const Home = () => {
  const matches = useMediaQuery('(max-width: 576px)')
  return (
    <Box className={styles['home-wrapper']}>
      <Slider />
      <Box className={styles['wrapper-content']}>
        <Box className={styles['interior-by-theme']}>
          <Box className={styles['header-title']}>
            <Box component="p">테마로 보는 인테리어</Box>
            <Box component="p">더보기</Box>
          </Box>
          <Box className={styles['list-theme']}>
            {interior.map((x: any, index) => (
              <CardVertical image={x.image} title={x.title} key={index} />
            ))}
          </Box>
        </Box>
        <Box className={styles['divider']}></Box>
        <Box className={styles['portfolio']}>
          <Box className={styles['header-title']}>
            <Box component="p">인기 시공 사례</Box>
            <Box component="p">더보기</Box>
          </Box>
          <Box className={styles['list-portfolio']}>
            {portfolio.map((x: any, index) => (
              <CardVertical image={x.image} title={x.title} key={index} />
            ))}
          </Box>
        </Box>
        <Box className={styles['banner']}>
          <Box component="img" src={'https://i.ibb.co/8dz6dCY/Group-41694.png'} />
        </Box>
        <Box className={styles['divider']}></Box>
        <Box className={styles['news']}>
          <Box className={styles['header-title']}>
            <Box component="p">인테리어 소식</Box>
            <Box component="p">더보기</Box>
          </Box>
          <Box className={styles['list-portfolio']}>
            {news.map((x: any, index) => (
              <CardHorizontal image={x.image} mainTitle={x.mainTitle} subTitle={x.subTitle} key={index} />
            ))}
          </Box>
        </Box>
      </Box>
      <Box className={styles['right-button']}>
        <Box className={styles['box-button']}>
          <CalculatorIcon type={matches ? 'white' : 'black'} />
          <Box component="p">견적문의</Box>
        </Box>
        <Box className={styles['box-button']}>
          <HandShakeIcon type={matches ? 'white' : 'black'} />
          <Box component="p">제휴문의</Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Home
