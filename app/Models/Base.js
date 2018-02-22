'use strict'

const Model = use('Model')

class Base extends Model {

  static boot() {
    super.boot()
    this.addTrait('Slugify')
  }
}

module.exports = Base
