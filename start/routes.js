'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

Route.group(() => {
  Route.post('login', 'Admin/AuthController.login').validator('AdminLogin')
  Route.post('logout', 'Admin/AuthController.logout')
}).prefix('api/admin')

Route.group(() => {
  /* Admin */
  Route.post('update', 'Admin/AdminController.update').validator('AdminUpdate')
}).prefix('api/admin').middleware('auth')

Route.any('*', 'NuxtController.render')
