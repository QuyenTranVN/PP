import { Box } from '@mui/material'
import images17 from 'assets/imgs/images17.png'
import images18 from 'assets/imgs/images18.png'
import images19 from 'assets/imgs/images19.png'
import images20 from 'assets/imgs/images20.png'
import styles from '.././landingPage.module.scss'

const SectionNext3 = () => {
  return (
    <>
      <div>
        <div className={styles['container-grid']}>
          <div className={styles['container-grid-section']}>
            <div className={`${styles['grid-two-column-12']} ${styles['gap-1']}`}>
              <Box className={`${styles['grid-col-5']} ${styles['spacing-content']}`}>
                <h2>
                  어떤 마케팅을 해야 <br></br>
                  효과적일까요?
                </h2>
                <br></br>
                <h5>페르소나를 통해 타겟에게 효과적인 마케팅 기법을 살펴보고 우선순위를 선정하세요</h5>
              </Box>
              <img src={images17} className={styles['grid-col-7']} />
            </div>
            <img src={images18} />
            <div className={`${styles['grid-two-column']} ${styles['gap-1']}`}>
              <img src={images19} className={`${styles['grid-col-1']}`} />
              <img src={images20} className={`${styles['grid-col-1']}`} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SectionNext3
