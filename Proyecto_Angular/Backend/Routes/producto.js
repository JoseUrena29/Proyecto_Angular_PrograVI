//Rutas para productos

const express = require('express');
const router = express.Router();
const productoController = require('../Controllers/productoController');

// api/productos
router.post('/', productoController.crearProducto);
router.get('/', productoController.obtenerProductos);
router.put('/:id', productoController.editarProducto);
router.get('/:id', productoController.obtenerProducto);
router.delete('/:id', productoController.eliminarProducto);
router.post('/Productos/:categoria', productoController.filtrarProductos);


module.exports = router;