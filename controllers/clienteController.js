const Cliente = require('../models/Cliente');


// Metodo para crear clientes
exports.crearCliente = async (req, res) => {

    try {
        let cliente;

        // creamos el cliente
        cliente = new Cliente(req.body);

        await cliente.save();
        res.send(cliente)

    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error');
    }
}

// Metodo para obtener clientes
exports.obtenerClientes = async (req, res) => {

    try {

        const clientes = await Cliente.find();
        res.json(clientes);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error');
    }
}

// metodo para actualizar clientes
exports.actualizarCliente = async (req, res) => {

    try {
        const {nombre, apellido, direccion, telefono, ciudad} = req.body;
        let cliente = await Cliente.findById(req.params.id);

        if(!cliente){
            res.status(404).json({msg: 'No existe el cliente'})
        }

        cliente.nombre = nombre;
        cliente.apellido = apellido;
        cliente. direccion = direccion;
        cliente.telefono = telefono;
        cliente.ciudad = ciudad;

        cliente = await Cliente.findByIdAndUpdate({_id: req.params.id}, cliente, {new: true})
        res.json(cliente);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error');
    }
}


// obtenemos el cliente
exports.obtenerCliente = async (req, res) => {

    try {
        
        let cliente = await Cliente.findById(req.params.id);

        if(!cliente){
            res.status(404).json({msg: 'No existe el cliente'})
        }

        res.json(cliente);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error');
    }
}


// eliminamos el cliente
exports.eliminarCliente = async (req, res) => {

    try {
        
        let cliente = await Cliente.findById(req.params.id);

        if(!cliente){
            res.status(404).json({msg: 'No existe el cliente'})
        }

        await Cliente.findOneAndRemove({_id: req.params.id})
        res.json({msg: 'cliente eliminado exitosamente'});
        
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error');
    }
}