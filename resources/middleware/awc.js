export default function ({ route, store, redirect, res, req }) {
  const isLoginPage = /login/i.test(route.name)
  const root = '/awc'
  /* Check auth */
  if (!store.state.authUser) {
    if (!isLoginPage) redirect(`${root}/login`)
  } else {
    if (isLoginPage) redirect(root)
  }
}
