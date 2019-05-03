import Sequelize from 'sequelize';
import { Model, sequelize } from './db';

const option = {
    sequelize,
    modelName: 'config',
    timestamp: true
};

class Config extends Model { }
Config.init({
    code: {
        type: Sequelize.STRING
    },
    value: {
        type: Sequelize.STRING
    }
}, option);

export default Config;
