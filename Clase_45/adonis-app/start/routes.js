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
const cupcakesModel = use('App/Models/Cupcake')

Route.on('/').render('welcome')

// Mis rutas
Route.get('/hola', ()=> 'Hola desde Adonis!!')


// Leemos la DB
Route.get('/cupcakes', async()=>{
    return await (cupcakesModel.all())
})


Route.get('/cupcakes-view-sin-controlador', async ({view})=>{
    const cupcakes = (await (cupcakesModel.all())).toJSON();
    return view.render('listaCupcakes', {cupcakes})
})


Route.get('/cupcakes-view-con-controlador', 'GetCupcakesController.getAll')
