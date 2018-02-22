'use strict'

const UserRepo = use('UserRepo')
const Utils = use('Utils')

class AdminAuthController {
  async login ({ request, response, auth, session }) {
    try {
      const { username, password } = request.all()
      const token = await auth.attempt(username, password)
      const user = await UserRepo.findBy('username', username)

      await session.put('authToken', token.token)
      await session.put('authUser', user.toJSON())

      response.send(
        Utils.response(true, 'Đăng nhập thành công', { token: token.token, user: user.toJSON() })
      )
    } catch (e) {
      response.status(422).send(
        Utils.response(false, 'Tài khoản không đúng')
      )
    }
  }

  async logout ({ session, response }) {
    session.clear()
    response.send(
      Utils.response(true, 'Đăng xuất thành công')
    )
  }
}

module.exports = AdminAuthController
