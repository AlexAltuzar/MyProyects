'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Provider extends Model {
    static get table(){
        return 'proveedores'
    }
}

module.exports = Provider
