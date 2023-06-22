import { Box, Grid } from '@mui/material'
import styles from '../landingPage.module.scss'
import image1 from 'assets/imgs/trophy-dynamic-color.svg'
import image2 from 'assets/imgs/lock-dynamic-color.svg'
import image3 from 'assets/imgs/rocket-dynamic-color.svg'
import image4 from 'assets/imgs/target-dynamic-color.svg'

const data = [
  {
    id: 1,
    image: image1,
    title: '남다른 스팩과 경험을 쌓고싶으면',
    content: '또는 이직을 위해서는 사업에 대한 전반적인 이해도가 중요합니다'
  },
  {
    id: 2,
    image: image2,
    title: '스타트업 관련 교육 솔루션이 필요하다면',
    content: '프로그램으로 쉽게 사업성을 설득 할 수 있는 사업계획서를 완성하세요.'
  },
  {
    id: 3,
    image: image3,
    title: '사업아이디어를 검증해보고 싶다면',
    content: '자신의 역량을 키우기 위해 사이드 프로젝트는 필수입니다.'
  },
  {
    id: 4,
    image: image4,
    title: '사업 방향성이 맞는지 불안하다면',
    content: '프로그램으로 쉽게 사업성을 설득 할 수 있는 사업계획서를 완성하세요.'
  }
]

const Experience = () => {
  return (
    <Box className={styles['session-experience']}>
      <Box display="flex" flexDirection="column">
      <Box component="p" className={styles['experience-title']}>
        창업이 <span className={styles['text-red']}>불안</span>하다면
      </Box>
      <Box component="p" className={styles['experience-title']}>
        슘페터를 통해 <span className={styles['text-red']}>경험</span>하세요
      </Box>
      <Box component="p" className={styles['experience-description']}>
        산업에 대한 이해와 예시를 통해 아이디어 접근법을 알려드리며 창업자들의 창업 생태계의 이해도를 함께 높일 수
        있습니다.
      </Box>
      </Box>
      <Grid
        className={styles.experiences}
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={10}
      >
        {data.map((item, index) => (
          <Grid item className={styles['experience-item']} key={index}>
            <Box component="img" src={item.image} />
            <Box component="p" className={styles['experience-item-title']}>
              {item.title}
            </Box>
            <Box component="p" className={styles['experience-item-content']}>
              {item.content}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Experience
