import { Box, IconButton, Divider } from '@mui/material'
import React, { useState, useRef } from 'react'
import Header from 'components/header'
import Button from 'elements/button'
import Input from 'elements/input'
import Text from 'elements/Text'
import InputPassword from 'elements/InputPassword'
import styles from './findPassword.module.scss'
import CloseIcon from 'assets/icons/close'
import IdentifyTabs from 'components/identifyTabs'
import { useNavigate } from 'react-router-dom'
import {
  IdentityAuthentication,
  ChangePassword,
  IChangePassword,
  IIdentityAuthentication
} from 'components/findPassword'

const FindPasswordPage = () => {
  const navigate = useNavigate()
  const [identifySuccess, setIdentifySuccess] = useState<boolean>(false)
  const [changePasswordSuccess, setChangePasswordSuccess] = useState<boolean>(false)
  const authenticationRef = useRef<any>()
  const changePasswordRef = useRef<any>()
  const onIdentitySubmit = (data: IIdentityAuthentication) => {
    setIdentifySuccess(true)
  }

  const onChangePasswordSubmit = (data: IChangePassword) => {
    setChangePasswordSuccess(true)
  }

  const resetFindPassword = () => {
    authenticationRef.current?.resetChangePasswordForm()
    changePasswordRef.current?.resetIdentityForm()
    setIdentifySuccess(false)
    setChangePasswordSuccess(false)
  }
  console.log(identifySuccess)
  console.log(changePasswordSuccess)

  return (
    <div className={`${styles.form_signup}`}>
      <div className={`${styles.w_100}`}>
        <div className={`${styles.logo_visible}`}>
          <IconButton className={`${styles.close_icon}`} onClick={() => navigate(-1)}>
            <CloseIcon />
          </IconButton>
          <div className={`${styles.view_title}`}>
            <Text variant="black" bold="lg" size="2xl">
              계정찾기
            </Text>
          </div>
        </div>
        <div className={`${styles.mb_40}`}>
          <IdentifyTabs />
        </div>
      </div>
      {identifySuccess === false && changePasswordSuccess === false && (
        <IdentityAuthentication ref={authenticationRef} onFormSubmit={onIdentitySubmit} />
      )}
      {identifySuccess === true && changePasswordSuccess === false && (
        <ChangePassword ref={changePasswordRef} onFormSubmit={onChangePasswordSubmit} />
      )}
      {/* <Box className={`${styles.custom_form}`} component="form" onSubmit={handleSubmit(onSubmit)}>
        <Input register={register} type="text" name="email" control={control} placeholder="이메일 주소" />
        {(isSubmitted || touchedFields.email) && errors.email && (
          <Text className={`${styles.mt_8}`} variant="error" bold="md" size="md">
            {errors.email.message}
          </Text>
        )}
        <Input
          register={register}
          type="tel"
          name="phoneNumber"
          containerStyle={`${styles.mt_8}`}
          control={control}
          placeholder="한글만 사용 가능"
          onKeyDown={() => {
            setPhoneNumberConfirmed(false)
          }}
          endAdornment={
            <IconButton
              className={`${styles.verify_email}`}
              disabled={
                Boolean(errors.email) ||
                !enableResend ||
                !touchedFields.phoneNumber ||
                (Boolean(errors.phoneNumber) && touchedFields.phoneNumber)
              }
              onClick={() => {
                sendOtp()
              }}
            >
              <Text
                variant={
                  Boolean(errors.email) ||
                  !enableResend ||
                  !touchedFields.phoneNumber ||
                  (Boolean(errors.phoneNumber) && touchedFields.phoneNumber)
                    ? 'gray400'
                    : 'blue'
                }
                bold="md"
                size="md"
              >
                인증번호 재전송
              </Text>
            </IconButton>
          }
        />
        {(isSubmitted || touchedFields.phoneNumber) && errors.phoneNumber && (
          <Text className={`${styles.mt_8}`} variant="error" bold="md" size="md">
            {errors.phoneNumber.message}
          </Text>
        )}
        {isSubmitPhoneNumber && (
          <Input
            register={register}
            type="password"
            name="otp"
            control={control}
            containerStyle={`${styles.mt_8}`}
            endAdornment={
              <Text variant="black" bold="md" size="md">
                {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
              </Text>
            }
          />
        )}
        <Button
          disabled={
            // phoneNumberConfirmed === false ||
            !isConfirmAll || emailConfirmed === null || !isValid
          }
          cate="standard"
          style={`${styles.mt_48}`}
        >
          찾기
        </Button>
      </Box> */}
      {identifySuccess === true && changePasswordSuccess === true && (
        <Box className={`${styles.success_form}`}>
          <Text variant="gray400" bold="md" size="lg">
            회원님의 비밀번호가 새로 설정 되었습니다.
          </Text>
          <div className={`${styles.button_group} ${styles.mt_48}`}>
            <button
              className={`${styles.reset_button}`}
              onClick={() => {
                resetFindPassword()
              }}
            >
              <Text variant="black" bold="lg" size="md">
                다시 찾기
              </Text>
            </button>
            <Button
              cate="standard"
              onClick={() => {
                navigate('/login')
              }}
            >
              로그인 하러가기
            </Button>
          </div>
        </Box>
      )}
    </div>
  )
}

export default FindPasswordPage
