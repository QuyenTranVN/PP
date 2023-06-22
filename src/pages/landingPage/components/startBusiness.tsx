import { Box } from '@mui/material'
import Button from 'elements/button'
import styles from '../landingPage.module.scss'
import imac from 'assets/imgs/iMac.svg'
import textBg from 'assets/imgs/text-bg-cropped.svg'

const StartBusiness = () => {
  return (
    <Box className={styles['session-start-business']}>
      <div className={styles['red-box']}></div>
      {/* <div className={styles['red-ellipse']}></div> */}
      <div className={styles['dark-box-elip']}>
        <div className={styles['red-ellipse']}>
          <Box component="img" src={textBg}  className={styles['red-ellipse-bg']} />
        </div>
        <Box component="img" className={styles['imac-img']} src={imac}></Box>
      </div>
      <div className={styles['dark-box']}>
        <Box component="p" className={styles['text-l1']}>
          창업에 대한 모든 교육과 사업계획서까지
        </Box>
        <Box component="p" className={styles['text-l2']}>
          스타트업 실무 블렌디드러닝 <span className={styles['text-bg']}>플랫폼 슘페터</span>
        </Box>
        <Box component="p" className={styles['text-l3']}>
          슘페터과 함께 창업을 해보세요
        </Box>
        <Box className={styles.buttons}>
          <Button width={145} height={70} radius={20} style={styles['button-inquiry']}>
            도입 문의
          </Button>
          <Button width={215} height={70} radius={20} style={styles['button-free']}>
            무료 체험하기
          </Button>
        </Box>
      </div>
    </Box>
  )
}

export default StartBusiness
