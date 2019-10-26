'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {
    static get table(){
        return 'productos'
    }

    Proveedor(){
        return this.belongsTo('App/Models/Product', 'proveedor_id')
    }
}

module.exports = Product
