import { Box, IconButton, Divider } from '@mui/material'
import { useState, useEffect } from 'react'
import Header from 'components/header'
import Button from 'elements/button'
import Input from 'elements/input'
import Text from 'elements/Text'
import Checkbox from 'elements/Checkbox'
import InputPassword from 'elements/InputPassword'
import { useForm, ValidationMode, useWatch } from 'react-hook-form'
import styles from './signup.module.scss'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { SignupProps } from './signup.type'
import { Link } from 'react-router-dom'
import {
  emailValidator,
  passwordValidator,
  nicknameValidator,
  phoneValidatorWithDashes,
  otpValidator
} from 'utils/validation'
import ChevronLeftIcon from 'assets/icons/ChevronLeft'
import ChevronRightSmIcon from 'assets/icons/ChevronRightSm'
import SignupSuccess from './signupSuccess'
import { useNavigate } from 'react-router-dom'
import FirebaseService from 'services/firebase.service'
const schema = yup
  .object({
    email: yup
      .string()
      .trim()
      .required('이메일 형식이 맞지 않습니다.')
      .test('email', '이메일 형식이 맞지 않습니다.', (value?: string) => emailValidator(value)),
    password: yup
      .string()
      .trim()
      .required('8~12자 영문,숫자,특수문자를 포함하여야 합니다.')
      .test('password', '8~12자 영문,숫자,특수문자를 포함하여야 합니다.', (value?: string) => passwordValidator(value)),
    confirmPassword: yup
      .string()
      .trim()
      .required('8~12자 영문,숫자,특수문자를 포함하여야 합니다.')
      .test('password', '8~12자 영문,숫자,특수문자를 포함하여야 합니다.', (value?: string) => passwordValidator(value))
      .oneOf([yup.ref('password')], '비밀번호가 일치하지 않습니다'),
    nickname: yup
      .string()
      .trim()
      .required('')
      .test('nickname', '닉네임 형식에 맞지 않습니다.(한글만 가능)', (value?: string) => nicknameValidator(value)),
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

const SignupPage = () => {
  const navigate = useNavigate()
  const [emailConfirmed, setEmailConfirmed] = useState<boolean | null>(null)
  const [nicknameConfirmed, setNicknameConfirmed] = useState<boolean | null>(null)
  const [phoneNumberConfirmed, setPhoneNumberConfirmed] = useState<boolean>(false)
  const [isConfirmAll, setConfirmAll] = useState<boolean>(false)
  const [termsChecked, setTermsChecked] = useState<Array<number | null>>([])
  const [isSubmitPhoneNumber, setSubmitPhoneNumber] = useState<boolean>(false)
  const [signupSuccess, setSignupSuccess] = useState<boolean>(false)
  const [enableResend, setEnableResend] = useState<boolean>(false)
  const [minutes, setMinutes] = useState<number>(0)
  const [seconds, setSeconds] = useState<number>(0)
  const termsList = [
    { id: 1, name: '서비스 이용약관 동의', type: 'required' },
    { id: 2, name: '개인정보 처리방침 동의', type: 'required' }
  ]
  const defaultValues = {
    email: '',
    password: '',
    confirmPassword: '',
    nickname: '',
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
    getValues,
    setError,
    formState: { errors, isDirty, isValid, dirtyFields, touchedFields, isSubmitted }
  } = useForm<SignupProps>(formOptions)

  const onSubmit = (data: SignupProps) => {
    console.log(data)
    setSignupSuccess(true)
  }

  const emailVerify = () => {
    const email = getValues('email')
    setTimeout(() => {
      setEmailConfirmed(true)
    }, 1000)
  }

  const nicknameVerify = () => {
    const nickname = getValues('nickname')
    if (!nicknameValidator(nickname)) {
      setError('nickname', { message: '닉네임 형식에 맞지 않습니다.(한글만 가능)' })
      return
    }
    setTimeout(() => {
      setNicknameConfirmed(true)
    }, 1000)
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
    setSeconds(0)
    setMinutes(3)
    setSubmitPhoneNumber(true)
    // setPhoneNumberConfirmed(true)
    setEnableResend(false)
  }

  const termItemOnCheck = (id: number) => {
    if (termsChecked.includes(id)) {
      const newTerm = termsChecked.filter(i => i !== id)
      setTermsChecked(newTerm)
      setConfirmAll(false)
    } else {
      const newTerm = [...termsChecked]
      newTerm.push(id)
      if (newTerm.length === termsList.length) {
        setConfirmAll(true)
      }
      setTermsChecked(newTerm)
    }
  }

  const confirmAllTerm = () => {
    if (isConfirmAll) {
      setConfirmAll(false)
      setTermsChecked([])
    } else {
      setConfirmAll(true)
      const newTerm = termsList.map(i => i.id)
      setTermsChecked(newTerm)
    }
  }

  return signupSuccess ? (
    <SignupSuccess />
  ) : (
    <div className={`${styles.form_signup}`}>
      <Box className={`${styles.custom_form}`} component="form" onSubmit={handleSubmit(onSubmit)}>
        <div className={`${styles.logo_visible}`}>
          <IconButton className={`${styles.goback_icon}`} onClick={() => navigate(-1)}>
            <ChevronLeftIcon />
          </IconButton>
          <div className={`${styles.view_logo}`}>
            <Text variant="black" bold="lg" size="lg">
              회원가입
            </Text>
          </div>
          <div className={`${styles.view_title}`}>
            <Text variant="black" bold="lg" size="2xl">
              회원가입
            </Text>
          </div>
        </div>
        <Text className={`${styles.mb_4}`} variant="black" bold="lg" size="sm">
          이메일
        </Text>
        <Input
          register={register}
          type="text"
          name="email"
          control={control}
          placeholder="이메일 주소"
          onKeyDown={() => setEmailConfirmed(null)}
          endAdornment={
            <IconButton
              disabled={!touchedFields.email || (Boolean(errors.email) && touchedFields.email)}
              className={`${styles.verify_email}`}
              onClick={emailVerify}
            >
              <Text
                variant={!touchedFields.email || (Boolean(errors.email) && touchedFields.email) ? 'gray400' : 'blue'}
                bold="md"
                size="md"
              >
                중복확인
              </Text>
            </IconButton>
          }
        />
        {emailConfirmed === null && (isSubmitted || touchedFields.email) && errors.email && (
          <Text className={`${styles.mt_8}`} variant="error" bold="md" size="md">
            {errors.email.message}
          </Text>
        )}
        {emailConfirmed !== null && (
          <Text className={`${styles.mt_8}`} variant={emailConfirmed === true ? 'blue' : 'error'} bold="md" size="md">
            {emailConfirmed === true ? '사용 가능한 이메일 주소입니다' : '이미 가입된 이메일 주소입니다'}
          </Text>
        )}
        <Text className={`${styles.mb_4} ${styles.mt_20}`} variant="black" bold="lg" size="sm">
          비밀번호
        </Text>
        <InputPassword
          register={register}
          type="password"
          name="password"
          control={control}
          placeholder="8~12자 영문,숫자,특수문자 포함"
        />
        {(isSubmitted || touchedFields.password) && errors.password && (
          <Text className={`${styles.mt_8}`} variant="error" bold="md" size="md">
            {errors.password.message}
          </Text>
        )}
        <InputPassword
          containerStyle={`${styles.mt_8}`}
          register={register}
          type="password"
          name="confirmPassword"
          control={control}
          placeholder="비밀번호 재입력"
        />
        {(isSubmitted || touchedFields.confirmPassword) && errors.confirmPassword && (
          <Text className={`${styles.mt_8}`} variant="error" bold="md" size="md">
            {errors.confirmPassword.message}
          </Text>
        )}
        <Text className={`${styles.mb_4} ${styles.mt_20}`} variant="black" bold="lg" size="sm">
          닉네임
        </Text>
        <Input
          onKeyDown={nicknameVerify}
          register={register}
          type="text"
          name="nickname"
          control={control}
          placeholder="한글만 사용 가능"
        />
        {(isSubmitted || touchedFields.nickname) && errors.nickname && (
          <Text className={`${styles.mt_8}`} variant="error" bold="md" size="md">
            {errors.nickname.message}
          </Text>
        )}

        {!Boolean(errors.nickname) && nicknameConfirmed !== null && (
          <Text
            className={`${styles.mt_8}`}
            variant={nicknameConfirmed === true ? 'blue' : 'error'}
            bold="md"
            size="md"
          >
            {nicknameConfirmed === true ? '사용 가능한 닉네임입니다' : '중복된 닉네임입니다'}
          </Text>
        )}
        <Text className={`${styles.mb_4} ${styles.mt_20}`} variant="black" bold="lg" size="sm">
          휴대폰 번호
        </Text>
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
        <Divider className={`${styles.divider_wrapper}`} />
        <div className={`${styles.mt_16} ${styles.auth_option}`}>
          <Checkbox
            label={
              <Text bold="2xl" variant="black" size="md">
                모두 동의
              </Text>
            }
            onClick={confirmAllTerm}
            checked={isConfirmAll}
          />
          <Divider className={`${styles.divider}`} />
          <div className={`${styles.terms_container}`}>
            {termsList.map(({ id, name, type }) => (
              <div key={id} className={`${styles.term_wrapper} `}>
                <Checkbox
                  label={
                    <Text bold="md" variant="black" size="md" className={`${styles.nowrap}`}>
                      {name}
                      <Text bold="md" variant="error" size="md" className={`${styles.inline_block}`}>
                        {type === 'required' ? '(필수)' : ''}
                      </Text>
                    </Text>
                  }
                  onClick={() => {
                    termItemOnCheck(id)
                  }}
                  checked={termsChecked.includes(id)}
                />
                <IconButton>
                  <ChevronRightSmIcon />
                </IconButton>
              </div>
            ))}
          </div>
        </div>
        <Button
          disabled={
            // phoneNumberConfirmed === false ||
            !isConfirmAll || emailConfirmed === null || !isValid
          }
          cate="standard"
          style={`${styles.mt_32}`}
        >
          회원가입 완료
        </Button>
      </Box>
      <div className={`${styles.register_wrapper}`}>
        <Text variant="gray400" bold="lg" size="md">
          아직 회원이 아니신가요?
        </Text>
        <Link to="/">
          <Text variant="blue" bold="lg" size="md">
            회원가입 하러가기
          </Text>
        </Link>
      </div>
      <div id="recaptcha-container" />
    </div>
  )
}

export default SignupPage
