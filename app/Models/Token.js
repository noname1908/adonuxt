'use strict'

const Base = use('App/Models/Base')

class Token extends Base {
  user () {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Token
