import Sequelize from 'sequelize';

const dataBase = 'nov';
const userName = 'root';
const password = '123456';
const host = '127.0.0.1';
const dialect = 'mysql';

export const sequelize = new Sequelize(dataBase, userName, password, {
    host: host,
    dialect: dialect,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

export const Model = Sequelize.Model;
