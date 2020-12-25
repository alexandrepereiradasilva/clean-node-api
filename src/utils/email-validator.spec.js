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
    expect(isEmailValid).toBe(true)
  })

  test('Should return false if validator returns false', () => {
    validator.isEmailValid = false
    const stu = new EmailValidator()
    const isEmailValid = stu.isValid('invalid_email@gmail.com')
    expect(isEmailValid).toBe(false)
  })
})
