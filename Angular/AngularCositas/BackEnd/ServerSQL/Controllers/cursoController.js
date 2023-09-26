const Curso = require('../Models/cursoModel');

exports.crearCurso = async (req, res) => {
    try {
        let curso = new Curso(req.body);
        await curso.save();
        res.status(curso)
    }catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
exports.obtenerCursos = async (req, res) => {
    try {
        let cursos = await Curso.find();
        res.json(cursos);
        } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
        }
}
exports.obtenerCurso = async (req, res) => {
    try{
        let curso = await Curso.findById(req.params.id);
        if(!curso){
            res.status(404).json({msg : 'No encotro el curso'})
        }
        res.json(curso);
    }catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
exports.actualizarCurso = async (req, res) => {
    try{
        const {nombre, descripion, categoria, duracion, temas, imagen, id_user_alu, id_user_pro, fecha_registro, fecha_inicio, fecha_fin} = req.body;
        let curso = await Curso.findById(req.params.id);
        if(!curso){
            res.status(404).json({msg : 'No encotro el curso'});
        }
        curso.nombre = nombre;
        curso.descripion = descripion;
        curso.categoria = categoria;
        curso.duracion = duracion;
        curso.temas = temas;
        curso.imagen = imagen;
        // curso.id_user_alu = id_user_alu;
        // curso.id_user_pro = id_user_pro;
        // curso.fecha_registro = fecha_registro;
        // curso.fecha_inicio = fecha_inicio;
        // curso.fecha_fin = fecha_fin;
        curso = await Curso.findOneAndUpdate({_id: req.params.id}, curso, {new: true});
        res.json(curso);
    }catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
        }
    }
exports.eliminarCurso = async (req, res) =>{
    try{
        const curso = await Curso.findById(req.params.id);
        if(!curso){
            res.status(404).json({msg : 'No encotro el curso'});
        }
        await Curso.findByIdAndRemove(req.params.id);
        res.json({msg : 'Curso eliminado'});
    }
    catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
