const mongoose = require('mongoose')

const DB_URI ='mongodb://localhost:27017/Appweb'

module.exports = ()=>{
    const connect = ()=>{
        mongoose.connect(DB_URI,
            {
                keepAlive:true,
                userNewUrlParse: true,
                userUndefieldTopology: true
            }
            ).then(()=> {console.log('conexion correcta')})
            .catch((err)=>{
                console.log('DB: ERROR !!')
            })
    }
    connect()
}