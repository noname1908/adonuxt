const { ServiceProvider } = require('@adonisjs/fold')

class RequestProvider extends ServiceProvider {
  register() {
    // register bindings
  }

  boot() {
    const Helpers = use('Helpers')
    const Request = use('Adonis/Src/Request')

    /* Check request parameter does exists */
    Request.macro('has', function (input) {
      return input in this.all()
    })

    /* Check there exists a parameter of the file */
    Request.macro('hasFile', function (input) {
      let file = this.file(input)

      return file && file.size > 0
    })

    /* Custom public path */
    Request.macro('publicPath', function (path = '') {
      return Helpers.publicPath(path)
    })
  }
}

module.exports = RequestProvider
