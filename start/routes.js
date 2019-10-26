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
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')


Route.on('/').render('welcome')
//POST/PUT/DELETE
//PRODUCTO
Route.post('productos/create','ProductController.store')//Listo
Route.put('productos/edit/:id','ProductController.update')//Listo
Route.delete('productos/delete/:id','ProductController.destroy')//Listo

//PROVEEDOR
Route.post('proveedores/create','ProviderController.store')//Listo
Route.put('proveedores/edit/:id','ProviderController.update')//Listo
Route.delete('proveedores/delete/:id','ProviderController.destroy')//Listo
//}


//GET{
//PRODUCTO
Route.get('productos/crear','ProductController.create')//Listo
Route.get('productos/editar/:id','ProductController.edit')//Listo
Route.get('productos/borrar/:id','ProductController.delete')//Listo

//PROVEEDOR
Route.get('proveedores/crear','ProviderController.create')//Listo
Route.get('proveedores/editar/:id','ProviderController.edit')//Listo
Route.get('proveedores/borrar/:id','ProviderController.delete')//Listo
//]