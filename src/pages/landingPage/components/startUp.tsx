import { Box } from '@mui/material'
import Button from 'elements/button'
import styles from '../landingPage.module.scss'

const StartUp = () => {
  return (
    <Box className={styles['session-start-up']}>
      <Box component="p" className={styles['h1']}>
        스타트업에 <br />
        관심이 있다면 <br />
        슘페터을 시작하세요
      </Box>
      <Box component="p">
        창업을 모르는 사람도 가능한 실습형 교육과 <br />
        커뮤니티, 콘텐츠를 통해 창업에 한걸음 다가세요
      </Box>
      <Box className={styles.buttons}>
        <Button width={145} height={70} radius={20} style={styles['button-inquiry']}>
          도입 문의
        </Button>
        <Button width={215} height={70} radius={20} style={styles['button-free']}>
          무료 체험하기
        </Button>
      </Box>
    </Box>
  )
}

export default StartUp
