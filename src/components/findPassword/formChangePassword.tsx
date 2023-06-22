import { Box } from '@mui/material'
import Button from 'elements/button'
import Text from 'elements/Text'
import InputPassword from 'elements/InputPassword'
import { useForm, ValidationMode } from 'react-hook-form'
import styles from './findPassword.module.scss'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { IChangePassword, ChangePasswordProps } from './findPassword.type'
import { passwordValidator } from 'utils/validation'
import { useImperativeHandle, forwardRef } from 'react'
const schema = yup
  .object({
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
      .oneOf([yup.ref('password')], '비밀번호가 일치하지 않습니다')
  })
  .required()

const ChangePassword = forwardRef(({ onFormSubmit, error }: ChangePasswordProps, ref) => {
  const defaultValues = {
    password: '',
    confirmPassword: ''
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
  } = useForm<IChangePassword>(formOptions)

  const onSubmit = (data: IChangePassword) => {
    onFormSubmit(data)
  }

  useImperativeHandle(ref, () => ({
    resetChangePasswordForm() {
      reset()
    }
  }))

  return (
    <Box className={`${styles.custom_form}`} component="form" onSubmit={handleSubmit(onSubmit)}>
      <Text className={`${styles.mb_4} ${styles.mt_20}`} variant="black" bold="lg" size="sm">
        새 비밀번호
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
      <Button disabled={!isValid} cate="standard" style={`${styles.mt_32}`}>
        완료
      </Button>
    </Box>
  )
})

export default ChangePassword
