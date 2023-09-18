// res.send({data: 'Esto viene de Rutas'})
// res.send({data: 'Esto viene de Rutas'})
const Model = require('../models/mCursos')
const fs = require('fs');
const path = require('path');
const controller = {
    homec: function(req, res){
        return res.status(200).send({
            message: 'Soy la home'
        });
    },
    test: function(req, res){
        return res.status(200).send({
            message: "Soy el metodo o accion test del controlador de curso"
        });
    },
    saveCurso: function(req, res){
        const Curso = new Model();
        const params = req.body;
        Curso.nameC = params.nameC;
        Curso.description = params.description;
        Curso.category = params.category;
        Curso.year = params.year;
        Curso.lang = params.lang; 
        Cursosave((err, cursoStored)=>{
        if(err) return res.status(500).send({message: 'Error al guardar el documento'})
        if(!projectStored) return res.status(404).send({menssage:'No se a podido'})
        return res.status(200).send({curso:cursoStored});
    });
    },
    getCurso: function(req, res){
        var cursoId = req.params.id;
        if(cursoId==null) return res.status(404).send({menssage:'El curso no existe'})
        
        User.findById(cursoID, (err, curso)=>{
            if(err) return res.status(500).send({menssage: 'error al devolver los datos'});
            if(!curso) return res.status(404).send({mensaje: 'el curso no existe'});     
            return res.status(200).send({
                curso
            })
        })
    },
    getCursos: function(req, res){
        User.find({}).sort('-year').exec((err, cursos)=>{
            if(err) return res.status(500).send({message: 'error al devolver datos'});
            if(!projects) return res.status(404).send({menssage: 'no hay curso que mostrar'});
            return res.status(200).send({project});
        })
    },
    updateCurso: function(req, res){
        var cursoId = req.params.id;
        var update = res.body;
        User.findBuIdAndUpdate(cursoId, update, {new:true}, (err, cursoUpdated)=>{
            if(err) return res.status(500).send({message: 'Error al actualizar'});
            if(!cursoUpdated) return res.status(404).send({menssage: 'no existe el curso para actualizar'});
            return res.status(200).send({
                curso:cursoUpdated
            })
        })
    },
    deleteCurso: function(req, res){
        var cursoId = req.params.id;
        User.findByIdAndRemove(cursoId,(err, cursoRemoved)=>{
            if(err) return res.status(500).send({message: 'no se ha podido borrar el curso'});
            if(!cursoRemoved) return res.status(404).send({message: ' no se puede eliminar ese curso'});
            return res.status(200).send({
                curso: cursoRemoved
            });
        });
    },
};
module.exports = controller;

// exports.getData = (req, res) =>{
//     model.find({}, (err, docs)=>{
//         res.send({
//             docs:docs
//         })
//     })
// }