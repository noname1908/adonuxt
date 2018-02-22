'use strict'

const BaseRepo = use('App/Models/Repositories/BaseRepo')

class TokenRepo extends BaseRepo {

  constructor () {
    const Token = use('App/Models/Token')
    super(Token)
  }
}

module.exports = TokenRepo
