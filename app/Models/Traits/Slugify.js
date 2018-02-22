'use strict'

class Slugify {
  register (Model, customOptions = {}) {
    const defaultOptions = {}
    const options = Object.assign(defaultOptions, customOptions)

    Model.queryMacro('whereSlug', function (value) {
      this.where('slug', value)
      return this
    })
  }
}

module.exports = Slugify
