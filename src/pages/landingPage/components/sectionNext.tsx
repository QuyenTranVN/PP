import { Box } from '@mui/material'
import images6 from 'assets/imgs/images6.png'
import images7 from 'assets/imgs/images7.png'
import images8 from 'assets/imgs/images8.png'
import styles from '.././landingPage.module.scss'

const SectionNext = () => {
  return (
    <>
      <div>
        <div className={styles['container-grid']}>
          <div className={styles['container-grid-section']}>
            <Box className={styles['mb-2']}>
              <h3 className={styles['text-last-center']}>
                가장 찾기 편한 <br></br>
                브랜드 네이밍 작명 솔루션
              </h3>
              <h5 className={styles['text-last-center']}>리써칭을 통한 작명보다 슘페터의 네이밍 데이터를 활용하세요</h5>
            </Box>
            <img src={images6} />
            <img src={images7} />
            <img src={images8} />
          </div>
        </div>
      </div>
    </>
  )
}

export default SectionNext
