import { IRegisterStep } from './partnerRegister.type'
import styles from './styles.module.scss'
import Text from 'elements/Text'
const REGISTER_STEPS: Array<IRegisterStep> = [
  { stepNumber: 1, name: '회원가입', description: '휴대폰 인증 및 사업자 등록증 등록 후 간편가입' },
  { stepNumber: 2, name: '담당자 지정', description: '담당 매니저 지정 및 등록절차 안내' },
  { stepNumber: 3, name: '정보등록 및 계약', description: '파트너스 시공가능 지역 및 업종 등록 후 계약' },
  { stepNumber: 4, name: '고객 매칭', description: '지역 및 업종을 고려하여 파트너스 매칭' }
]

const RegisterStep = () => {
  return (
    <div className={`${styles.register_steps_container}`}>
      {REGISTER_STEPS.map((item: IRegisterStep) => (
        <div key={item.stepNumber} className={styles.register_step}>
          <Text bold="xl" variant="blue" size="lg">
            step{item.stepNumber}
          </Text>
          <Text bold="lg" variant="black" size="lg">
            {item.name}
          </Text>
          <Text bold="md" variant="gray400" size="sm">
            {item.description}
          </Text>
        </div>
      ))}
    </div>
  )
}

export default RegisterStep
