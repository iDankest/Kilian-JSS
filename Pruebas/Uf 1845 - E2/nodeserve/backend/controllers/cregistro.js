const Registro = require("../models/mRegistro");

exports.crearRegistro = async (req, res) =>{
    try{
        let registro;
        registro = new Registro(req.body);
        await registro.save();
        res.send(registro);
    }catch (error){
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

exports.obtenerRegistro = async(req, res) => {
    try{
        let registro = await Registro.findById(req.params.id);
        if(!registro){
            res.status(404).json({msg:'No existe el Registro'})
        }
        res.json(registro);
    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerRegistros = async (req, res) => {
    try {
        const registros = await Registro.find();
        res.json(registros)        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}