import Sequelize from 'sequelize';
import { Model, sequelize } from './db';
import { isEmpty } from '../utils/collection';

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
    email: {
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

export async function findUserByEmail(email) {
    return new Promise(async resolve => {
        let userInfo = await User.findOne({
            where: { email: email }
        });
        console.log('user:', userInfo);
        if (isEmpty(userInfo)) {
            resolve(null);
        } else {
            resolve(userInfo.dataValues);
        }
    });
}

export async function createUser(name, password, email) {
    return new Promise(async resolve => {
        let result = await User.create({
            name: name,
            password: password,
            email: email
        });
        resolve(result);
    });
}
