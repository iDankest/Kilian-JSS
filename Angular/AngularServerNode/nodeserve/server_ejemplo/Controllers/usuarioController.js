const Usuario = require('../Models/usuarioModel');

exports.crearUsuario = async (req, res) => {
    try {
        let usuario = new Usuario(req.body);
        await usuario.save();
        res.status(usuario)
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
exports.obtenerUsuarios = async (req, res) => {
    try {
        let usuario = await Usuario.find();
        res.json(usuario)
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
exports.actualizarUsuario = async (req, res) => {
    try {
        const {name, email, password, Fnacimiento, foto, lastname, tipo} = req.body;
        let usuario = await Usuario.findById(req.params.id);
        if(!usuario){
            res.status(404).json({msg :'No se encontró el usuario'});
        }
        usuario.name = name;
        usuario.email = email;
        usuario.password = password;
        usuario.Fnacimiento = Fnacimiento;
        usuario.foto = foto;
        usuario.lastname = lastname;
        usuario.tipo = tipo;
        usuario = await Usuario.findOneAndUpdate({_id: req.params.id}, usuario, {new: true});
        res.json(usuario);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
exports.obtenerUsuario = async (req, res) => {
    try {
        let usuario = await Usuario.findById(req.params.id);
        if(!usuario){
            res.status(404).json({msg :'No se encontró el usuario'});
        }
        res.json(usuario);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
exports.eliminarUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findById(req.params.id);
        if(!usuario){
            res.status(404).json({msg :'No se encontró el usuario'});
        }
        await Usuario.findByIdAndRemove(req.params.id);
        res.json({msg :'Usuario eliminado'});
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}