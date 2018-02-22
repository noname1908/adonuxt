function getReader(resolve, reject) {
  const reader = new FileReader
  reader.onload = () => resolve(reader.result)
  reader.onerror = e => reject(e)
  reader.onabort = e => reject(e)

  return reader
}

export function getAsDataURL(file) {
  return new Promise((resolve, reject) => {
    getReader(resolve, reject).readAsDataURL(file)
  })
}

export function getAsText(file) {
  return new Promise((resolve, reject) => {
    getReader(resolve, reject).readAsText(file)
  })
}
