const Producto = require("../Models/Producto");

//Función para Crear Productos POST
exports.crearProducto = async (req, res) => {
    console.log(req.body);

    try {
        let producto;

        //Crear producto
        producto = new Producto(req.body);

        await producto.save();
        res.send(producto);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error!!')
    }
}

//Función para Obtener Productos GET
exports.obtenerProductos = async (req, res) => {
    try {
        const { categoria } = req.query;
        const query = categoria ? { categoria } : {};
        const productos = await Producto.find(query);
        res.json(productos);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error!!');
    }
};

exports.filtrarProductos = async (req, res) => {
    const categoria = req.params.categoria;
    const regex = new RegExp(categoria, "i");
    try {
      const productos = await Producto.find({ categoria: regex });
      res.json(productos);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  
  
  
//Función para Editar Productos PUT
exports.editarProducto = async (req, res) => {

    try {

        const { nombre, categoria, descripcion, precio, imagen} = req.body;
        let producto = await Producto.findById(req.params.id);

        if (!producto) {
            res.status(404).json({msg: 'El producto no existe!' })
        }

        producto.nombre = nombre;
        producto.categoria = categoria;
        producto.descripcion = descripcion;
        producto.precio = precio;
        producto.imagen = imagen;

        producto = await Producto.findOneAndUpdate({_id: req.params.id}, producto, {new: true})
        res.json(producto);

    } catch (error) {
        console.log(error);
        res.status(500).send('Error!!')
    }
}

//Función para Obtener Productos por ID GET
exports.obtenerProducto = async (req, res) => {

    try {

        let producto = await Producto.findById(req.params.id);

        if (!producto) {
            res.status(404).json({msg: 'El producto no existe!' })
        }

        res.json(producto);

        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error!!')
    }
}

//Función para Eliminar Productos por ID DELETE
exports.eliminarProducto = async (req, res) => {

    try {

        let producto = await Producto.findById(req.params.id);

        if (!producto) {
            res.status(404).json({msg: 'El producto no existe!' })
        }

        await Producto.findOneAndRemove({_id: req.params.id})
        res.json({msg: 'Producto Eliminado con Éxito!' })

        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error!!')
    }
}
