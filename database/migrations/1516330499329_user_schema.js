'use strict'

const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.table('users', (table) => {
      table.string('fullname').notNullable()
      table.string('role').defaultTo(0)
    })
  }

  down () {
    this.table('users', (table) => {
      table.dropColumn('fullname')
      table.dropColumn('role')
    })
  }
}

module.exports = UserSchema
