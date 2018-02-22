import deepMapKeys from 'deep-map-keys'

export default class BaseModel {
  get payload() {
    return deepMapKeys(this, _.snakeCase)
  }

  get formData() {
    const fd = new FormData

    _.forEach(this.payload, (val, key) => {
      fd.append(key, val === null ? '' : val)
    })

    return fd
  }
}
