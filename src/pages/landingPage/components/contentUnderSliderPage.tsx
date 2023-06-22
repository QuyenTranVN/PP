import { Box } from '@mui/material'
import styles from '.././landingPage.module.scss'

const ContentUnderSlidePage = () => {
  return (
    <>
      <Box className={styles['container-grid']}>
        <h2 className={styles['text-last-center']}>아이디어 발상부터 사업계획서까지</h2>
        <h1 className={`${styles['text-last-center']} ${styles['color-red']}`}>
          원패스로 해결하는
          <br></br>
          맞춤형 창업 교육 플랫폼입니다.
        </h1>
      </Box>
    </>
  )
}
export default ContentUnderSlidePage
