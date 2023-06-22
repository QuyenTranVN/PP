import { Box, IconButton, Divider } from '@mui/material'
import { useState, useEffect } from 'react'
import Button from 'elements/button'
import Input from 'elements/input'
import Text from 'elements/Text'
import { useForm, ValidationMode, useWatch } from 'react-hook-form'
import styles from './findEmail.module.scss'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { FindEmailProps } from './findEmail.type'
import { phoneValidatorWithDashes, otpValidator } from 'utils/validation'
import IdentifyTabs from 'components/identifyTabs'
import { useNavigate } from 'react-router-dom'
import CloseIcon from 'assets/icons/close'
const schema = yup
  .object({
    phoneNumber: yup
      .string()
      .trim()
      .required('')
      .test('phoneNumber', '닉네임 형식에 맞지 않습니다.(한글만 가능)', (value?: string) =>
        phoneValidatorWithDashes(value)
      ),
    otp: yup
      .string()
      .trim()
      .required('')
      .test('nickname', '', (value?: string) => otpValidator(value))
  })
  .required()

const FindEmailPage = () => {
  const navigate = useNavigate()
  const [emailFound, setEmailFound] = useState<string | null>(null)
  const [phoneNumberConfirmed, setPhoneNumberConfirmed] = useState<boolean>(false)
  const [isSubmitPhoneNumber, setSubmitPhoneNumber] = useState<boolean>(false)
  const [enableResend, setEnableResend] = useState<boolean>(true)
  const [minutes, setMinutes] = useState<number>(0)
  const [seconds, setSeconds] = useState<number>(0)
  const defaultValues = {
    phoneNumber: '',
    otp: ''
  }

  const formOptions = {
    defaultValues,
    resolver: yupResolver(schema),
    mode: 'onBlur' as keyof ValidationMode
  }
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid, dirtyFields, touchedFields, isSubmitted }
  } = useForm<FindEmailProps>(formOptions)

  const onSubmit = (data: FindEmailProps) => {
    setEmailFound('woody@mail.com')
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1)
      }

      if (seconds === 0) {
        if (minutes === 0) {
          setEnableResend(true)
          clearInterval(interval)
        } else {
          setSeconds(59)
          setMinutes(minutes - 1)
        }
      }
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [seconds])

  const sendOtp = () => {
    setSeconds(59)
    setMinutes(2)
    setSubmitPhoneNumber(true)
    // setPhoneNumberConfirmed(true)
    setEnableResend(false)
  }

  const resetFindEmail = () => {
    setEnableResend(false)
    reset()
    setEmailFound(null)
    setSubmitPhoneNumber(false)
  }

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
      {emailFound !== null ? (
        <Box className={`${styles.custom_form}`}>
          <Text variant="gray400" bold="md" size="lg">
            회원님의 이메일은
          </Text>
          <div className={`${styles.email_found} ${styles.mt_8}`}>
            <Text className={`${styles.view_email}`} variant="black" bold="xl" size="lg">
              {emailFound}
            </Text>
            <Text variant="gray400" bold="md" size="lg">
              입니다.
            </Text>
          </div>
          <div className={`${styles.button_group} ${styles.mt_48}`}>
            <button className={`${styles.reset_button}`} onClick={resetFindEmail}>
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
      ) : (
        <Box className={`${styles.custom_form}`} component="form" onSubmit={handleSubmit(onSubmit)}>
          <Input
            register={register}
            type="tel"
            name="phoneNumber"
            control={control}
            placeholder="한글만 사용 가능"
            onKeyDown={() => {
              setPhoneNumberConfirmed(false)
            }}
            endAdornment={
              <IconButton
                className={`${styles.verify_email}`}
                disabled={
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
          <Button disabled={!isValid} cate="standard" style={`${styles.mt_48}`}>
            찾기
          </Button>
        </Box>
      )}
    </div>
  )
}

export default FindEmailPage
