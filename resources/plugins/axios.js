export default function ({ $axios, redirect, store }) {
  $axios.onRequest(config => {
      if (store.state.authToken) {
        config.headers.common['Authorization'] = `Bearer ${store.state.authToken}`
      }
    // console.log('Making request to ' + config.url)
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 401) {
      redirect('/awc/login')
    }
  })
}
