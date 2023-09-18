// res.send({data: 'Esto viene de Rutas'})
const model = require('../models/mUser')
const fs = require('fs');
const path = require('path');
const controller = {
    home: function(req, res){
        return res.status(200).send({
            message: 'Soy la home'
        });
    },
    test: function(req, res){
        return res.status(200).send({
            message: "Soy el metodo o accion test del controlador de user"
        });
    },
    saveUser: function(req, res){
        const user = new Model();
        const params = req.body;
        user.name = params.name;
        user.description = params.description;
        user.category = params.category;
        user.year = params.year;
        user.lang = params.lang; 
        user.save((err, userStored)=>{
        if(err) return res.status(500).send({message: 'Error al guardar el documento'})
        if(!projectStored) return res.status(404).send({menssage:'No se a podido'})
        return res.status(200).send({user:userStored});
    });
    },
    getUser: function(req, res){
        var userId = req.params.id;
        if(userId==null) return res.status(404).send({menssage:'El usuario no existe'})
        
        User.findById(userID, (err, user)=>{
            if(err) return res.status(500).send({menssage: 'error al devolver los datos'});
            if(!user) return res.status(404).send({mensaje: 'el usuario no existe'});     
            return res.status(200).send({
                user
            })
        })
    },
    getUsers: function(req, res){
        User.find({}).sort('-year').exec((err, users)=>{
            if(err) return res.status(500).send({message: 'error al devolver datos'});
            if(!projects) return res.status(404).send({menssage: 'no hay usuarios que mostrar'});
            return res.status(200).send({project});
        })
    },
    updateUser: function(req, res){
        var userId = req.params.id;
        var update = res.body;
        User.findBuIdAndUpdate(userId, update, {new:true}, (err, userUpdated)=>{
            if(err) return res.status(500).send({message: 'Error al actualizar'});
            if(!userUpdated) return res.status(404).send({menssage: 'noexiste el usuario para actualizar'});
            return res.status(200).send({
                user:userUpdated
            })
        })
    },
    deleteUser: function(req, res){
        var userId = req.params.id;
        User.findByIdAndRemove(userId,(err, userRemoved)=>{
            if(err) return res.status(500).send({message: 'no se ha podido borrar el usuario'});
            if(!userRemoved) return res.status(404).send({message: ' no se puede eliminar ese usuario'});
            return res.status(200).send({
                user: userRemoved
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