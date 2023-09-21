const Tarea = require('../Models/tareasModel');

exports.crearTarea = async (req, res) => {
    try {
        let tarea = new Tarea(req.body);
        await tarea.save();
        res.status(Tarea)
    }catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
exports.obtenerTareas = async (req, res) => {
    try {
        let tareas = await Tarea.find();
        res.json(tareas);
        } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
        }
}
exports.obtenerTarea = async (req, res) => {
    try{
        let tarea = await Tarea.findById(req.params.id);
        if(!tarea){
            res.status(404).json({msg : 'No encotro el Tarea'})
        }
        res.json(tarea);
    }catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
exports.actualizarTarea = async (req, res) => {
    try{
        const {nombre, descripcion, estado, puntuacion, importancia, id_user_alu, est_entrega, fec_entrega} = req.body;
        let tarea = await Tarea.findById(req.params.id);
        if(!tarea){
            res.status(404).json({msg : 'No encotro el Tarea'});
        }
        tarea.nombre = nombre;
        tarea.descripcion = descripcion;
        tarea.estado = estado;
        tarea.puntuacion = puntuacion;
        tarea.id_user_alu = id_user_alu;
        tarea.est_entrega = est_entrega;
        tarea.importancia = importancia;
        tarea.fec_entrega = fec_entrega;
        tarea = await Tarea.findOneAndUpdate({_id: req.params.id}, Tarea, {new: true});
        res.json(Tarea);
    }catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
        }
    }
exports.eliminarTarea = async (req, res) =>{
    try{
        const tarea = await Tarea.findById(req.params.id);
        if(!tarea){
            res.status(404).json({msg : 'No encotro el Tarea'});
        }
        await Tarea.findByIdAndRemove(req.params.id);
        res.json({msg : 'Tarea eliminado'});
    }
    catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
