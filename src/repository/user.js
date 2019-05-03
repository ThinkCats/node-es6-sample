import Sequelize from 'sequelize';
import { Model, sequelize } from './db';

const option = {
    sequelize,
    modelName: 'user',
    timestamp: true
};

class User extends Model { }
User.init({
    name: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    status: {
        type: Sequelize.INTEGER
    },
}, option);

export default User;
