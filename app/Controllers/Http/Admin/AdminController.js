'use strict'

const UserRepo = use('UserRepo')
const Antl = use('Antl')
const Utils = use('Utils')

class AdminAdminController {
  async update({ request, response, session }) {
    let input = request.all()

    delete input.password_confirmation

    const user = await UserRepo.update(input)
    if (!user) {
      return response.status(422).send(
        Utils.response(false, Antl.get('messages.update_failed'))
      )
    } else {
      await session.put('authUser', user.toJSON())
      return response.send(user)
    }
  }
}

module.exports = AdminAdminController
