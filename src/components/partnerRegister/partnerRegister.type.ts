export interface IRegisterStep {
  stepNumber: number
  name: string
  description: string
}

export interface IPartnerRegister {
  type: string
  companyName: string
  ceoName: string
  email: string
  phoneNumber: string
  businessNumber: string
  businessFile: File | null
}

export interface RegisterFormProps {
  onFormSubmit: (data: IPartnerRegister) => void
}
