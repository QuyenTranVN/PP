import { Box } from '@mui/material'
import images9 from 'assets/imgs/images9.png'
import images10 from 'assets/imgs/images10.png'
import images11 from 'assets/imgs/images11.png'
import images12 from 'assets/imgs/images12.png'
import styles from '.././landingPage.module.scss'

const SectionNext1 = () => {
  return (
    <>
      <div>
        <div className={styles['container-grid']}>
          <div className={styles['container-grid-section']}>
            <img src={images9} />
            <img src={images10} />
            <div className={`${styles['grid-two-column-11']} ${styles['gap-1']}`}>
              <img src={images11} className={styles['grid-col-6']} />
              <img src={images12} className={styles['grid-col-5']} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SectionNext1
