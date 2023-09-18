const Model = require('../models/mCurso')
const fs = require('fs');
const path =  require('path');
const controller ={
    saveCurs: function(req, res){
        const curs = new Model();
        const params = req.body;
        curs.nombreU = params.nombreU;
        curs.descripC= params.descripC;
        curs.tarea = params.tarea;
        curs.estado  = params.estado;
        curs.puntaje= params.puntaje;
        curs.estado = params.estado;
        Curssave((err, cursStored)=>{
            if(err) return res.status(500).send({message: 'Error al guardar el documento'})
            if(!projectStored) return res.status(404).send({menssage:'No se a podido'})
            return res.status(200).send({curso:cursStored});
        });
        },
        getCurs: function(req, res){
            var cursId = req.params.codigo;
            if(cursId==null) return res.status(404).send({menssage:'El curso no existe'})
            
            User.findById(cursID, (err, curs)=>{
                if(err) return res.status(500).send({menssage: 'error al devolver los datos'});
                if(!curs) return res.status(404).send({mensaje: 'el curso no existe'});     
                return res.status(200).send({
                    curs
                })
            })
        },
        getCursos: function(req, res){
            User.find({}).sort('-year').exec((err, curs)=>{
                if(err) return res.status(500).send({message: 'error al devolver datos'});
                if(!projects) return res.status(404).send({menssage: 'no hay curso que mostrar'});
                return res.status(200).send({project});
            })
        },
        updateCurs: function(req, res){
            var cursId = req.params.codigo;
            var update = res.body;
            User.findBuIdAndUpdate(cursId, update, {new:true}, (err, cursUpdated)=>{
                if(err) return res.status(500).send({message: 'Error al actualizar'});
                if(!cursUpdated) return res.status(404).send({menssage: 'no existe el curso para actualizar'});
                return res.status(200).send({
                    curs:cursUpdated
                })
            })
        },
        deleteCurs: function(req, res){
            var cursId = req.params.codigo;
            User.findByIdAndRemove(cursId,(err, cursRemoved)=>{
                if(err) return res.status(500).send({message: 'no se ha podido borrar el curso'});
                if(!cursRemoved) return res.status(404).send({message: ' no se puede eliminar ese curso'});
                return res.status(200).send({
                    curs: cursRemoved
                });
            });
        },
    };
    module.exports = controller;