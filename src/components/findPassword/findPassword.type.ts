export interface IChangePassword {
  password: string
  confirmPassword: string
}

export interface IIdentityAuthentication {
  email: string
  phoneNumber: string
  otp: string
}

export interface ChangePasswordProps {
  onFormSubmit: (data: IChangePassword) => void
  error?: string | null
}

export interface IdentityAuthenticationProps {
  onFormSubmit: (data: IIdentityAuthentication) => void
  error?: string | null
}
