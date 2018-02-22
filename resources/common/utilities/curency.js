export function format_curency(params, type) {
  return params.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1${type}`)
}
