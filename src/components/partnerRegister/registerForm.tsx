import { Box, IconButton, Divider } from '@mui/material'
import styles from './styles.module.scss'
import Text from 'elements/Text'
import { useForm, ValidationMode, useWatch } from 'react-hook-form'
import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { IPartnerRegister, RegisterFormProps } from './partnerRegister.type'
import Button from 'elements/button'
import Input from 'elements/input'
import {
  emailValidator,
  passwordValidator,
  nicknameValidator,
  phoneValidatorWithDashes,
  otpValidator
} from 'utils/validation'

const schema = yup
  .object({
    companyName: yup.string().trim().required(''),
    ceoName: yup
      .string()
      .trim()
      .required('')
      .test('ceoName', '닉네임 형식에 맞지 않습니다.(한글만 가능)', (value?: string) => nicknameValidator(value)),
    email: yup
      .string()
      .trim()
      .required('이메일 형식이 맞지 않습니다.')
      .test('email', '이메일 형식이 맞지 않습니다.', (value?: string) => emailValidator(value)),
    phoneNumber: yup
      .string()
      .trim()
      .required('')
      .test('phoneNumber', '닉네임 형식에 맞지 않습니다.(한글만 가능)', (value?: string) =>
        phoneValidatorWithDashes(value)
      ),
    businessNumber: yup.string().required('').max(30, '최대 30자'),
    businessFile: yup.mixed().required('')
  })
  .required()

type IPartnerRegisterForm = Omit<IPartnerRegister, 'type'>

const RegisterStepForm = forwardRef(({ onFormSubmit }: RegisterFormProps, ref) => {
  const [registerType, setRegisterType] = useState<string>('interior')
  const inputFile = useRef<any>()
  const defaultValues = {
    companyName: '',
    ceoName: '',
    email: '',
    phoneNumber: '',
    businessNumber: '',
    businessFile: null
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
    setValue,
    trigger,
    reset,
    formState: { errors, isValid, touchedFields, isSubmitted }
  } = useForm<IPartnerRegisterForm>(formOptions)

  const onSubmit = (data: IPartnerRegisterForm) => {
    const registerData: IPartnerRegister = { type: registerType, ...data }
    onFormSubmit(registerData)
  }

  const uploadFileOnChange = (e: any) => {
    setValue('businessFile', e.target.files[0])
    trigger('businessFile', e.target.files[0])
  }

  useImperativeHandle(ref, () => ({
    resetPartnerRegisterForm() {
      reset()
    }
  }))

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} className={`${styles.register_form_container}`}>
      <Text className={`${styles.mb_16}`} variant="black" bold="2xl" size="lg">
        입점 신청
      </Text>
      <div className={`${styles.button_group}`}>
        <button
          className={`${styles.type_button} ${registerType === 'interior' && styles.selected}`}
          onClick={() => {
            setRegisterType('interior')
          }}
        >
          <Text variant={registerType === 'interior' ? 'blue' : 'gray400'} bold="lg" size="md">
            인테리어 파트너
          </Text>
        </button>
        <button
          className={`${styles.type_button} ${registerType === 'affiliate' && styles.selected}`}
          onClick={() => {
            setRegisterType('affiliate')
          }}
        >
          <Text variant={registerType === 'affiliate' ? 'blue' : 'gray400'} bold="lg" size="md">
            제휴사
          </Text>
        </button>
      </div>
      <Text className={`${styles.mt_20} ${styles.mb_4}`} variant="black" bold="lg" size="sm">
        업체명
      </Text>
      <Input
        register={register}
        type="text"
        name="companyName"
        control={control}
        placeholder="입력하세요"
        inputProps={{ maxlength: 30 }}
      />
      {(isSubmitted || touchedFields.companyName) && errors.companyName && (
        <Text className={`${styles.mt_8}`} variant="error" bold="md" size="md">
          {errors.companyName.message}
        </Text>
      )}
      <Text className={`${styles.mb_4} ${styles.mt_20}`} variant="black" bold="lg" size="sm">
        대표자명
      </Text>
      <Input
        register={register}
        type="text"
        name="ceoName"
        inputProps={{ maxlength: 15 }}
        control={control}
        placeholder="입력하세요"
      />
      {(isSubmitted || touchedFields.ceoName) && errors.ceoName && (
        <Text className={`${styles.mt_8}`} variant="error" bold="md" size="md">
          {errors.ceoName.message}
        </Text>
      )}
      <Text className={`${styles.mb_4} ${styles.mt_20}`} variant="black" bold="lg" size="sm">
        이메일
      </Text>
      <Input
        register={register}
        type="text"
        name="email"
        inputProps={{ maxlength: 50 }}
        control={control}
        placeholder="입력하세요"
      />
      {(isSubmitted || touchedFields.email) && errors.email && (
        <Text className={`${styles.mt_8}`} variant="error" bold="md" size="md">
          {errors.email.message}
        </Text>
      )}
      <Text className={`${styles.mb_4} ${styles.mt_20}`} variant="black" bold="lg" size="sm">
        휴대폰번호
      </Text>
      <Input
        register={register}
        type="tel"
        name="phoneNumber"
        control={control}
        placeholder="“-”를 제외한 11자리 숫자"
      />
      {(isSubmitted || touchedFields.phoneNumber) && errors.phoneNumber && (
        <Text className={`${styles.mt_8}`} variant="error" bold="md" size="md">
          {errors.phoneNumber.message}
        </Text>
      )}
      <Text className={`${styles.mb_4} ${styles.mt_20}`} variant="black" bold="lg" size="sm">
        사업자등록번호
      </Text>
      <Input register={register} type="number" name="businessNumber" control={control} placeholder="입력하세요" />
      {(isSubmitted || touchedFields.businessNumber) && errors.businessNumber && (
        <Text className={`${styles.mt_8}`} variant="error" bold="md" size="md">
          {errors.businessNumber.message}
        </Text>
      )}
      <Input
        register={register}
        type="text"
        disabled
        name="businessFile"
        control={control}
        containerStyle={`${styles.mt_8}`}
        placeholder="첨부파일을 추가해주세요"
        endAdornment={
          <IconButton
            className={`${styles.verify_email}`}
            onClick={() => {
              inputFile.current.click()
            }}
          >
            <Text variant="blue" bold="md" size="md">
              첨부
            </Text>
          </IconButton>
        }
      />
      {(isSubmitted || touchedFields.businessFile) && errors.businessFile && (
        <Text className={`${styles.mt_8}`} variant="error" bold="md" size="md">
          {errors.businessFile.message}
        </Text>
      )}
      <Button disabled={!isValid} cate="standard" style={`${styles.mt_32}`}>
        회원가입 완료
      </Button>
      <input
        type="file"
        onChange={uploadFileOnChange}
        accept=".jpg,.png,.pdf,.jpeg,.JPG,.JPEG,.PNG,.PDF"
        ref={inputFile}
        style={{ display: 'none' }}
      />
    </Box>
  )
})

export default RegisterStepForm
