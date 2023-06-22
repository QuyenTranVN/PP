import { Box } from '@mui/material'
import styles from './footer.module.scss'
import Text from 'assets/imgs/text-ft.svg'

const Footer = () => {
  return (
    <Box component="footer">
      <Box className={styles['top-content']}>
        <Box component="span">회사소개 ㅣ 직원채용 ㅣ 개인정보처리방침 ㅣ 공지사항</Box>
      </Box>
      <Box className={styles['mid-content']}>
        <Box component="img" className={styles['text-img']} src={Text} />
      </Box>
      <Box className={styles['bottom-content']}>
        <Box component="p">
          06954 서울시 동작구 상도로 65 금성빌딩 6층, TEL 02.6671.0075, 대표이메일 : win@maincontents.com,
        </Box>
        <Box component="p">통신판매번호 : 제 2020-서울동작-0379 호, 사업자 번호 : 874-86-00628, 대표자명 : 임한규,</Box>
        <Box component="p">KUMSUNG BUILDING, 65 SANGDO-RO, DONGJAK-GU, SEOUL, 06954, KOREA</Box>
        <Box component="p">COPYRIGHT© 2020 MAINCONTENTS. ALL RIGHTS RESERVED.</Box>
      </Box>
    </Box>
  )
}

export default Footer
