import { Box, IconButton, Divider } from '@mui/material'
import { useState, useEffect, useImperativeHandle, forwardRef } from 'react'
import Button from 'elements/button'
import Input from 'elements/input'
import Text from 'elements/Text'
import { useForm, ValidationMode } from 'react-hook-form'
import styles from './findPassword.module.scss'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { IIdentityAuthentication, IdentityAuthenticationProps } from './findPassword.type'
import { emailValidator, phoneValidatorWithDashes, otpValidator } from 'utils/validation'
import { useNavigate } from 'react-router-dom'
const schema = yup
  .object({
    email: yup
      .string()
      .required('이메일 형식이 맞지 않습니다.')
      .test('email', '이메일 형식이 맞지 않습니다.', (value?: string) => emailValidator(value)),
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

const IdentityAuthentication = forwardRef(({ onFormSubmit, error }: IdentityAuthenticationProps, ref) => {
  const navigate = useNavigate()
  const [phoneNumberConfirmed, setPhoneNumberConfirmed] = useState<boolean>(false)
  const [isSubmitPhoneNumber, setSubmitPhoneNumber] = useState<boolean>(false)
  const [enableResend, setEnableResend] = useState<boolean>(false)
  const [minutes, setMinutes] = useState<number>(0)
  const [seconds, setSeconds] = useState<number>(0)
  const defaultValues = {
    email: '',
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
    formState: { errors, isValid, touchedFields, isSubmitted }
  } = useForm<IIdentityAuthentication>(formOptions)

  const onSubmit = (data: IIdentityAuthentication) => {
    onFormSubmit(data)
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

  useImperativeHandle(ref, () => ({
    resetIdentityForm() {
      reset()
    }
  }))

  return (
    <Box className={`${styles.custom_form}`} component="form" onSubmit={handleSubmit(onSubmit)}>
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
      <Button disabled={!isValid} cate="standard" style={`${styles.mt_48}`}>
        찾기
      </Button>
    </Box>
  )
})
export default IdentityAuthentication
