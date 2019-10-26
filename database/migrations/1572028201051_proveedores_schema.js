'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProveedoresSchema extends Schema {
  up () {
    this.create('proveedores', (table) => {
      table.increments()
      table.timestamps()
      table.string('nombre',50).notNullable()
    })
  }

  down () {
    this.drop('proveedores')
  }
}

module.exports = ProveedoresSchema
