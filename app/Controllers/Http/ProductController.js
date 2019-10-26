'use strict'

const Product = use('App/Models/Product')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with products
 */
class ProductController {
  /**
   * Show a list of all products.
   * GET products
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new product.
   * GET products/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    const newProduct = new Product();
    newProduct.nombre = request.input('nombre');
    newProduct.precio = request.input('precio');
    newProduct.codigo = request.input('codigo');
    newProduct.marca = request.input('marca');
    newProduct.cantidad = request.input('cantidad');
    newProduct.proveedor_id = request.input('proveedorId');
    await newProduct.save();
    return response.json(newProduct);
  }

  /**
   * Create/save a new product.
   * POST products
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const newProduct = new Product();
    newProduct.nombre = request.input('nombre');
    newProduct.precio = request.input('precio');
    newProduct.codigo = request.input('codigo');
    newProduct.marca = request.input('marca');
    newProduct.cantidad = request.input('cantidad');
    newProduct.proveedor_id = request.input('proveedorId');
    await newProduct.save();
    
  }

  /**
   * Display a single product.
   * GET products/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    
    
  }

  /**
   * Render a form to update an existing product.
   * GET products/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
    let product = await Product.find(params.id);
    
    product.nombre = request.input('nombre');
    product.precio = request.input('precio');
    product.codigo = request.input('codigo');
    product.marca = request.input('marca');
    product.cantidad = request.input('cantidad');
    product.proveedor_id = request.input('proveedorId');
    await product.save();
    return response.json(product);
  }

  /**
   * Update product details.
   * PUT or PATCH products/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    let product = await Product.find(params.id);
    
    product.nombre = request.input('nombre');
    product.precio = request.input('precio');
    product.codigo = request.input('codigo');
    product.marca = request.input('marca');
    product.cantidad = request.input('cantidad');
    product.proveedor_id = request.input('proveedorId');
    await product.save();
    
  }

  /**
   * Delete a product with id.
   * DELETE products/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const productoId = await Product.find(params.id);
    await productoId.delete();
    
  }

  async delete({ params, request, response }) {
    const productoId = await Product.find(params.id);
    await productoId.delete();
    return response.json();
  }
}

module.exports = ProductController
