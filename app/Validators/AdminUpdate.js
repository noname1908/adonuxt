'use strict'

const Antl = use('Antl')
const Utils = use('Utils')

class AdminUpdate {
  async authorize() {
    return true
  }

  get rules() {
    return {
      fullname: 'required|string|max:255',
      username: 'required|string|max:255',
      email: 'required|email|max:255',
      password: 'string|min:8|max:255|confirmed'
    }
  }

  get messages() {
    return {
      'fullname.required': Antl.formatMessage('validates.required', { attr: 'Họ và Tên' }),
      'fullname.string': Antl.formatMessage('validates.string', { attr: 'Họ và Tên' }),
      'fullname.max': Antl.formatMessage('validates.max.string', { attr: 'Họ và Tên', max: 255 }),
      'username.required': Antl.formatMessage('validates.required', { attr: 'Tài khoản' }),
      'username.string': Antl.formatMessage('validates.string', { attr: 'Tài khoản' }),
      'username.max': Antl.formatMessage('validates.max.string', { attr: 'Tài khoản', max: 255 }),
      'email.required': Antl.formatMessage('validates.required', { attr: 'Email' }),
      'email.email': Antl.get('validates.email'),
      'email.max': Antl.formatMessage('validates.max.string', { attr: 'Email', max: 255 }),
      'password.string': Antl.formatMessage('validates.string', { attr: 'Mật khẩu' }),
      'password.min': Antl.formatMessage('validates.min.string', { attr: 'Mật khẩu', min: 8 }),
      'password.max': Antl.formatMessage('validates.max.string', { attr: 'Mật khẩu', max: 255 }),
      'password.confirmed': Antl.formatMessage('validates.confirmed', { attr: 'Mật khẩu' })
    }
  }

  async fails(errorMessages) {
    return this.ctx.response.status(422).send(
      Utils.response(false, errorMessages[0].message)
    )
  }

  get sanitizationRules() {
    return {

    }
  }
}

module.exports = AdminUpdate
