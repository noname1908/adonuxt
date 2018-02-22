'use strict'

var randomstring = require("randomstring")
const Helpers = use('Helpers')
const Jimp = use('jimp')

class Utils {

  response(success, message, data = {}) {
    return {
      success,
      message,
      data
    }
  }

  chunk(array, chunk) {
    let i, j, temparray = []
    for (i = 0, j = array.length; i < j; i += chunk) {
      temparray.push(array.slice(i, i + chunk))

    }
    return temparray
  }

  pluck(array, key) {
    let temparray = array.map((value, index) => {
      if (value != null && key in value) {
        return value[key]
      }
    })

    return temparray
  }

  getIndexWithKey(array, key, val) {
    let index = -1

    array.forEach((item, idx) => {
      if (item[key] == val) {
        index = idx
        return
      }
    })

    return index
  }

  isNumber(val) {
    return (typeof val) == 'number' ? true : false
  }

  randomString(length) {
    return randomstring.generate(length)
  }

  async putFile(thumbnail, folder) {
    let current = new Date()
    let year = current.getFullYear()
    let month = current.getMonth() + 1
    let date = current.getDate()
    let path = `/uploads/images/${folder}/${year}/${month}/${date}`
    let savePath = Helpers.publicPath(path)
    let fileName = `${current.getTime()}.${thumbnail.subtype.toLowerCase()}`

    await thumbnail.move(savePath, {
      name: fileName
    })

    return `${path}/${fileName}`
  }

  async resizeImage(beforePath, afterPath, width, height) {
    if (!width || !height) {
      return
    }

    let lenna = await Jimp.read(Helpers.publicPath(beforePath))
    await lenna.resize(width, height)
      .quality(60)
      .write(Helpers.publicPath(afterPath))
  }
}

module.exports = Utils
