'use strict'

const { Command } = require('@adonisjs/ace')
const { Nuxt, Builder } = require('nuxt')

const Config = use('Config')

class NuxtBuild extends Command {
  static get signature () {
    return 'nuxt:build'
  }

  static get description () {
    return 'Tell something helpful about this command'
  }

  async handle (args, options) {
    let config = Config.get('nuxt')
    config.dev = false
    this.nuxt = new Nuxt(config)
    this.info('Building nuxt.js application...')
    await new Builder(this.nuxt).build()
  }
}

module.exports = NuxtBuild
