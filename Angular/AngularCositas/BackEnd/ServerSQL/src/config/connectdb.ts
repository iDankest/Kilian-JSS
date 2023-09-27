import {Sequelize} from 'sequelize';

const sequelize = new Sequelize('appprueba', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql',
    // operatorsAliases: false,

    // pool: {
    //     max: 5,
    //     min: 0,
    //     acquire: 30000,
    //     idle: 10000
    // }
})

export default sequelize;