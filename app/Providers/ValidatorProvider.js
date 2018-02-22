'use strict'

const { ServiceProvider } = require('@adonisjs/fold')

class ValidatorProvider extends ServiceProvider {

  register() {

  }

  boot() {
    const Validator = use('Validator')
    Validator.extend('exists', this.exists.bind(this))
  }

  async exists(data, field, message, args, get) {
    const Database = use('Database')

    const value = get(data, field)
    if (!value) {
      return
    }

    const [table, column] = args
    let row

    // if call update
    if ('id' in data) {
      let id = get(data, 'id')
      row = await Database.table(table).where(column, value).where('id', '!=', id).count()
    } else {
      row = await Database.table(table).where(column, value).count()
    }
    if (row[0]['count(*)'] > 0) {
      throw message
    }
  }
}

module.exports = ValidatorProvider
