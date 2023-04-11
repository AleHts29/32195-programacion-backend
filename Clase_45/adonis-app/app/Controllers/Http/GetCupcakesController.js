const cupcakesModel = use('App/Models/Cupcake')

class GetCupcakesController {
    async getAll({view}){
        const cupcakes = (await (cupcakesModel.all())).toJSON();
        return view.render('listaCupcakes', {titulo: 'desde controller', cupcakes})
    }
}

module.exports = GetCupcakesController 