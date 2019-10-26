'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductosSchema extends Schema {
  up () {
    this.create('productos', (table) => {
      table.increments()
      table.timestamps()
      table.string('codigo',50).notNullable().unique().index()
      table.string('marca',50).notNullable()
      table.string('nombre',50).notNullable()
      table.float('precio',5,2)
      table.integer('cantidad')
      table.integer('proveedor_id').unsigned().references('id').inTable('proveedores')
    })
  }

  down () {
    this.drop('productos')
  }
}

module.exports = ProductosSchema
