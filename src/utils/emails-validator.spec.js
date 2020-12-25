const validator = require('validator')
class EmailValidator {
  isValid (email) {
    return validator.isEmail(email)
  }
}
describe('Email Validator', () => {
  test('Should return true if validator returns true', () => {
    const stu = new EmailValidator()
    const isEmailValid = stu.isValid('valid_email@gmail.com')
    exports(isEmailValid).toBe(true)
  })

  test('Should return false if validator returns false', () => {
    const stu = new EmailValidator()
    const isEmailValid = stu.isValid('invalid_email')
    exports(isEmailValid).toBe(false)
  })
})
