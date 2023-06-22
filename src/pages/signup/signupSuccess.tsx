import { Box, IconButton, Divider } from '@mui/material'
import Text from 'elements/Text'
import styles from './signup.module.scss'
import { useNavigate } from 'react-router-dom'

import LogoIcon from 'assets/icons/logo'
const SignupSuccess = () => {
  const navigate = useNavigate()

  return (
    <div className={`${styles.signup_success}`}>
      <Box className={`${styles.success_form}`}>
        <div className={`${styles.logo_wrapper}`}>
          <LogoIcon />
        </div>
        <Text variant="black" bold="lg" size="2xl">
          회원 가입을 축하합니다.
        </Text>
        <div className={`${styles.button_group}`}>
          <button
            className={`${styles.reset_button}`}
            onClick={() => {
              navigate('/login')
            }}
          >
            <Text variant="black" bold="lg" size="md">
              로그인 하러가기
            </Text>
          </button>
        </div>
      </Box>
    </div>
  )
}

export default SignupSuccess
