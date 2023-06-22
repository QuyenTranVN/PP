export const emailValidator = (email?: string): boolean => {
  return email ? /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) : false
}

export const passwordValidator = (password?: string): boolean => {
  return password ? /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,12}$/.test(password) : false
}

export const phoneValidatorWithDashes = (phoneNumber?: string): boolean => {
  return phoneNumber ? /^[0-9]{3}-([0-9]{3}|[0-9]{4})-[0-9]{4}$/gm.test(phoneNumber) : false
}

export const otpValidator = (otp?: string): boolean => {
  return otp ? /.[0-9]{4,5}./.test(otp) : false
}

export const nicknameValidator = (nickname?: string): boolean => {
  let nameArr = nickname ? nickname.split('') : []
  let isValid = true
  for (let i = 0; i < nameArr.length; i++) {
    if (nameArr[i] === ' ') continue
    if (!/([\u3131-\u314e|\u314f-\u3163|\uac00-\ud7a3])/g.test(nameArr[i])) {
      isValid = false
      break
    }
  }

  return isValid
}
