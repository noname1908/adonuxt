const { ServiceProvider } = require('@adonisjs/fold')

class AppProvider extends ServiceProvider {
  register() {
    // register bindings
  }

  boot() {
    // optionally do some intial setup
  }
}

module.exports = AppProvider
