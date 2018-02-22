const { ServiceProvider, ioc } = require('@adonisjs/fold')

const Utils = use('App/Helpers/Utils')
const UserRepo = use('App/Models/Repositories/UserRepo')
const TokenRepo = use('App/Models/Repositories/TokenRepo')

class BindingProvider extends ServiceProvider {

  register() {

    ioc.bind('Utils', function (app) {
      return new Utils
    })

    ioc.bind('UserRepo', function (app) {
      return new UserRepo
    })

    ioc.bind('TokenRepo', function (app) {
      return new TokenRepo
    })
  }

  boot() {
    // optionally do some intial setup
  }
}

module.exports = BindingProvider
