import { Box, IconButton, Divider } from '@mui/material'
import { useState, useRef } from 'react'
import Header from 'components/header'
import Text from 'elements/Text'
import styles from './partnerRegister.module.scss'
import ChevronLeftIcon from 'assets/icons/ChevronLeft'
import { RegisterStep, RegisterForm, IPartnerRegister } from 'components/partnerRegister'
import { useNavigate } from 'react-router-dom'
import AlertPopup from 'elements/alertPopup'

const SignupPage = () => {
  const navigate = useNavigate()
  const [successDialog, setSuccessDialog] = useState<boolean>(false)
  const registerFormRef = useRef<any>()
  const registerPartner = (data: IPartnerRegister) => {
    setSuccessDialog(true)
  }
  return (
    <div className={`${styles.partner_register_page}`}>
      <Box className={`${styles.custom_form}`}>
        <div className={`${styles.logo_visible}`}>
          <IconButton className={`${styles.goback_icon}`} onClick={() => navigate(-1)}>
            <ChevronLeftIcon />
          </IconButton>
          <div className={`${styles.view_logo}`}>
            <Text variant="black" bold="lg" size="lg">
              제휴문의
            </Text>
          </div>
          <div className={`${styles.view_title}`}>
            <Text variant="black" bold="lg" size="2xl">
              제휴문의
            </Text>
          </div>
        </div>
        <RegisterStep />
        <RegisterForm onFormSubmit={registerPartner} ref={registerFormRef} />
      </Box>
      <AlertPopup
        onSubmit={() => {
          setSuccessDialog(false)
          registerFormRef.current.resetPartnerRegisterForm()
        }}
        disableEscapeKeyDown
        title="입점신청이 완료 되었습니다."
        description="검토 후 연락 드리겠습니다."
        open={successDialog}
      />
    </div>
  )
}

export default SignupPage
