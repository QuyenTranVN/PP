import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const firebaseConfig = {};
 

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

class FirebaseService {
  private authResult?: firebase.auth.ConfirmationResult

  public RequestSendOtp(phoneNumber: string) {
    let element = document.createElement('div')
    element.setAttribute('id', 'recaptcha-container')

    let verify = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
      size: 'invisible'
    })

    auth
      .signInWithPhoneNumber(phoneNumber, verify)
      .then(result => {
        this.authResult = result
        return true
      })
      .catch(err => {
        return false
      })
  }

  public VerifyOtp(otp: string) {
    if (otp === null) return

    this.authResult
      ?.confirm(otp)
      .then(result => {
        return true
      })
      .catch(err => {
        return false
      })
  }
}

export default FirebaseService
