'use strict'

const BaseRepo = use('App/Models/Repositories/BaseRepo')

class UserRepo extends BaseRepo {

  constructor () {
    const User = use('App/Models/User')
    super(User)
  }

  async register (data) {
    if (data.password) {
      data.password = await this.Hash.make(data.password)
    }
    return super.create(data)
  }

  async update (data) {
    if (data.password) {
      data.password = await this.Hash.make(data.password)
    }
    return super.update(data)
  }
}

module.exports = UserRepo
