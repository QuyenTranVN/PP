import { Box, IconButton, Divider } from '@mui/material'
import { useState } from 'react'
import Header from 'components/header'
import Button from 'elements/button'
import Input from 'elements/input'
import Text from 'elements/Text'
import Logo from 'assets/icons/logo'
import Checkbox from 'elements/Checkbox'
import NaverIcon from 'assets/icons/naver'
import KakaoIcon from 'assets/icons/kakao'
import InputPassword from 'elements/InputPassword'
import { useForm, ValidationMode } from 'react-hook-form'
import styles from './login.module.scss'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { LoginProps } from './login.type'
import { Link } from 'react-router-dom'
import { emailValidator, passwordValidator } from '../../utils/validation'
const schema = yup
  .object({
    email: yup
      .string()
      .required('이메일 형식이 맞지 않습니다.')
      .test('email', '이메일 형식이 맞지 않습니다.', (value?: string) => emailValidator(value)),
    password: yup
      .string()
      .required('비밀번호 형식에 맞지 않습니다.')
      .test('password', '비밀번호 형식에 맞지 않습니다.', (value?: string) => passwordValidator(value))
  })
  .required()

const LoginPage = () => {
  const [isSavePassword, setSavePassword] = useState<boolean>(false)
  const defaultValues = {
    email: '',
    password: ''
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
    formState: { errors, isDirty, isValid, dirtyFields, touchedFields, isSubmitted }
  } = useForm<LoginProps>(formOptions)
  const onSubmit = (data: LoginProps) => {
    console.log(data)
  }
  return (
    <div className={`${styles.form_login}`}>
      <Box className={`${styles.custom_form}`} component="form" onSubmit={handleSubmit(onSubmit)}>
        <div className={`${styles.logo_visible}`}>
          <div className={`${styles.view_logo}`}>
            <Logo />
          </div>
          <div className={`${styles.view_title}`}>
            <Text variant="black" bold="lg" size="2xl">
              로그인
            </Text>
          </div>
        </div>
        <Input register={register} type="text" name="email" control={control} placeholder="이메일 주소" />
        {(isSubmitted || touchedFields.email) && errors.email && (
          <Text className={`${styles.mt_8}`} variant="error" bold="md" size="md">
            {errors.email.message}
          </Text>
        )}
        <InputPassword
          containerStyle={`${styles.mt_8}`}
          register={register}
          type="password"
          name="password"
          control={control}
          placeholder="비밀번호"
        />
        {(isSubmitted || touchedFields.password) && errors.password && (
          <Text className={`${styles.mt_8}`} variant="error" bold="md" size="md">
            {errors.password.message}
          </Text>
        )}
        <div className={`${styles.mt_16} ${styles.auth_option}`}>
          <Checkbox
            label="자동 로그인"
            onClick={() => {
              setSavePassword((prev: boolean) => !prev)
            }}
            checked={isSavePassword}
          />

          <div className={`${styles.forgot_option}`}>
            <Link to="/find-email">
              <Text variant="gray400" bold="md" size="md">
                이메일 찾기
              </Text>
            </Link>
            <Divider orientation="vertical" flexItem />
            <Link to="/find-password">
              <Text variant="gray400" bold="md" size="md">
                비밀번호 찾기
              </Text>
            </Link>
          </div>
        </div>
        <Button disabled={!isValid} cate="standard" style={`${styles.mt_32}`}>
          로그인
        </Button>
      </Box>
      <div className={`${styles.divider_wrapper}`}>
        <Divider flexItem>
          <Text variant="gray400" bold="md" size="md">
            SNS로그인
          </Text>
        </Divider>
      </div>
      <div className={`${styles.sns_wrapper}`}>
        <button className={`${styles.naver_button}`} onClick={() => {}}>
          <div className={`${styles.sns_icon_wrapper}`}>
            <NaverIcon />
          </div>
          <Text variant="black" bold="lg" size="md">
            네이버로 시작하기
          </Text>
        </button>
        <button className={`${styles.kakao_button}`} onClick={() => {}}>
          <div className={`${styles.sns_icon_wrapper}`}>
            <KakaoIcon />
          </div>
          <Text variant="black" bold="lg" size="md">
            카카오톡으로 시작하기
          </Text>
        </button>
      </div>
      <div className={`${styles.register_wrapper}`}>
        <Text variant="gray400" bold="lg" size="md">
          아직 회원이 아니신가요?
        </Text>
        <Link to="/signup">
          <Text variant="blue" bold="lg" size="md">
            회원가입 하러가기
          </Text>
        </Link>
      </div>
    </div>
  )
}

export default LoginPage
