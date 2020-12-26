const { MissingParamError } = require('../../utils/errors')
module.exports = class AuthUseCase {
  constructor (loadUserByEmailRepository, encrypter, tokenGenerator) {
    this.loadUserByEmailRepository = loadUserByEmailRepository
    this.encrypter = encrypter
    this.tokenGenerator = tokenGenerator
  }

  async auth (email, password) {
    if (!email) {
      return new MissingParamError('email')
    }

    if (!password) {
      return new MissingParamError('password')
    }

    if (!this.loadUserByEmailRepository) {
      return new MissingParamError('loadUserByEmailRepository')
    }

    if (!this.loadUserByEmailRepository.load) {
      return new MissingParamError('loadUserByEmailRepository')
    }

    const user = await this.loadUserByEmailRepository.load(email)

    if (!user) {
      return null
    }
    const isValid = await this.encrypter.compare(password, user.password)

    if (!isValid) {
      return null
    }

    await this.tokenGenerator.generate(user.id)
  }
}
