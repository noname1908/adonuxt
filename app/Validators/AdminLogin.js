'use strict'

const Antl = use('Antl')

class AdminLogin {
  async authorize () {
    return true
  }

  get rules () {
    return {
      username: 'required',
      password: 'required'
    }
  }

  get messages () {
    return {
      'username.required': Antl.formatMessage('validates.required', { attr: 'Tài khoản' }),
      'password.required': Antl.formatMessage('validates.required', { attr: 'Mật khẩu' })
    }
  }

  async fails (errorMessages) {
    return this.ctx.response.status(422).send({ success: false, message: errorMessages[0].message })
  }

  get sanitizationRules () {
    return {

    }
  }
}

module.exports = AdminLogin
