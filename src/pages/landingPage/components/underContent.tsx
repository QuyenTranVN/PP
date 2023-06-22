import { Box } from '@mui/material'
import images3 from 'assets/imgs/images3.png'
import images4 from 'assets/imgs/images4.png'
import images5 from 'assets/imgs/images5.png'
import styles from '.././landingPage.module.scss'

const UnderContent = () => {
  return (
    <>
      <Box className={styles['container-grid']}>
        <div className={styles['container-grid-section']}>
          <div className={`${styles['grid-two-column']}`}>
            <div className={`${styles['grid-col-1']} ${styles['height-full']}`}>
              <div className={styles['under-content-text']}>
                <h4>창조적 파괴를 통한 아이디어 도출방법</h4>
                <h2>
                  창업시도 해보고 싶거나 <br></br>
                  사업아이디어는 있는데 구체화 하고 싶나요?
                </h2>
                <h5>
                  산업에 대한 이해와 예시를 통해 아이디어 접근법을 알려드리며 창업자들의 창업 생태계의 이해도를 함께
                  높일 수 있습니다.
                </h5>
              </div>
              <img src={images3} className={styles['height-75']} />
            </div>
            <div className={`${styles['grid-col-1']} ${styles['height-full']}`}>
              <img src={images4} className={styles['height-50']} />
              <img src={images5} className={styles['height-50']} />
            </div>
          </div>
        </div>
      </Box>
    </>
  )
}

export default UnderContent
