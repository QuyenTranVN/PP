import { Box } from '@mui/material'
import images13 from 'assets/imgs/images13.png'
import images14 from 'assets/imgs/images14.png'
import images15 from 'assets/imgs/images15.png'
import images16 from 'assets/imgs/images16.png'
import styles from '.././landingPage.module.scss'

const SectionNext2 = () => {
  return (
    <>
      <div>
        <div className={styles['container-grid']}>
          <div className={styles['container-grid-section']}>
            <img src={images13} />
            <img src={images14} />
            <div className={`${styles['grid-two-column']} ${styles['gap-1']}`}>
              <img src={images15} className={`${styles['grid-col-1']}`} />
              <img src={images16} className={`${styles['grid-col-1']}`} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SectionNext2
