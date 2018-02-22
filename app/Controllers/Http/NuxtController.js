'use strict'

const NuxtService = use('App/Services/Nuxt')

class NuxtController {

  async render ({ request, response, session, auth }) {
    request.request.session = session.all()
    await new Promise((resolve, reject) => {
      NuxtService.nuxt.render(request.request, response.response, promise => {
        promise.then(resolve).catch(reject)
      })
    })
  }
}

module.exports = NuxtController
