// res.send({data: 'Esto viene de Rutas'})
const model = require('../models/mUser')

exports.getData = (req, res) =>{
    model.find({}, (err, docs)=>{
        res.send({
            docs:docs
        })
    })
}