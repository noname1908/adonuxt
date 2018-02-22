'use strict'

const _ = use('lodash')

class BaseRepo {
  constructor (model = {}) {
    this.model = model
    this.Utils = use('Utils')
    this.Database = use('Database')
    this.Hash = use('Hash')
  }

  async paginate (page = 1, limit = 10) {
    let model = await this.model.query().orderBy('id', 'DESC').paginate(page, limit)
    return model
  }

  async all () {
    let data = await this.model.query().orderBy('id', 'DESC').fetch()
    return data
  }

  async find (id) {
    return await this.model.find(id)
  }

  async findBy (field, value) {
    return await this.model.findBy(field, value)
  }

  async first () {
    return await this.model.first()
  }

  async saveData (model, data) {
    _.forEach(data, (val, key) => {
      if (val !== null) model[key] = val
    })

    if (await model.save()) {
      return model
    }

    return false
  }

  async updateOrCreate (data) {
    let model =  await this.model.first()

    if (!model) {
      model = new this.model
    }

    return await this.saveData(model, data)
  }

  async create (data) {
    let model = new this.model

    return await this.saveData(model, data)
  }

  async update (data) {
    let model = await this.model.find(data.id)

    return await this.saveData(model, data)
  }

  async delete (data) {
    let id = (data instanceof Object && 'id' in data) ? data.id : data
    let model = await this.model.find(id)

    if (await model.delete()) {
      return model
    }

    return false
  }

  async whereIn (ids) {
    let records = this.Database.table(this.model.table).whereIn('id', ids)
    return records
  }

  async findAttribute (attrs) {
    let query = this.Database.table(this.model.table)

    for (var mixKeys in attrs) {
      let mixs = mixKeys.split(':')

      let field = mixs[0]
      let condition = mixs[1]
      let value = attrs[mixKeys]

      query = query.where(field, condition, value)
    }

    return query
  }
}

module.exports = BaseRepo
