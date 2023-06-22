import { Box, Button } from '@mui/material'
import images21 from 'assets/imgs/images21.png'
import images22 from 'assets/imgs/images22.png'
import images15 from 'assets/imgs/images15.png'
import images16 from 'assets/imgs/images16.png'
import styles from '.././landingPage.module.scss'

const SectionNext4 = () => {
  return (
    <>
      <div>
        <div className={styles['container-grid']}>
          <div className={styles['container-grid-section']}>
            <div className={`${styles['grid-two-column']} ${styles['gap-1']} ${styles['section4']}`}>
              <Box className={`${styles['gradient-to-r']} ${styles['for-center-place']}`}>
                <div>
                  <h3>
                    창업을 원하는 <br></br>
                    여러분을 위한 <br></br>
                    무제한 콘텐츠 제공
                  </h3>
                  <br></br>
                  <h6>
                    창업에 필요한 기초부터 심화된 내용을 무료로 VOD 서비스를 제공하며 자신이 창업에 필요한 강의와
                    콘텐츠를 들을 수 있습니다
                  </h6>
                  <Button className={styles['button']}>아티클 보기 &gt;</Button>
                </div>
              </Box>
              <img src={images21} style={{ gridColumn: 'span 1 / span 1' }} />
            </div>
            <img src={images22} />
          </div>
        </div>
      </div>
    </>
  )
}

export default SectionNext4
