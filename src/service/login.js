import { encode } from '../utils/jwt';
import { createRawData } from '../utils/auth';
import { isEmpty } from '../utils/collection';
import { success, fail, isEmptyBody, getBody, defaultPromise } from '../utils/context';
import User from '../repository/user';

export const refreshToken = (req, resp) => {
    console.log('Req:', getBody(req));
    let oldToken = req.header.token;
    let data = getBody(req);
    let isInvalidParam = (isEmpty(oldToken) || isEmptyBody(req) || isEmpty(data.name));
    if (isInvalidParam) {
        fail(resp, 400, 'invalid request param');
        return defaultPromise();
    }
    let token = encode(createRawData(data));
    success(resp, token);
    return defaultPromise();
};

export const register = (req, resp) => {
    let data = getBody(req);
    let isInvalidData = (isEmpty(data) || isEmpty(data.name) || isEmpty(data.password));
    if (isEmptyBody(req) || isInvalidData) {
        fail(resp, 400, 'invalid request');
        return defaultPromise;
    }
    let email = data.email;
    return new Promise((resolve, reject) => {
        //check user
        User.findAll({
            where: { email: email }
        }).then(user => {
            if (!isEmpty(user)) {
                throw new Error('email has registed');
            }
            //register
            //TODO password encode
            User.create({
                name: data.name,
                password: data.password,
                email: email
            }).then(result => {
                success(resp, 'register success');
                resolve(result);
            }).catch(err => {
                console.log('create user error:', err);
                reject(new Error('registe user info error'));
            });
        }).catch(err => {
            console.log('query user error:', err);
            reject(new Error('check user info error'));
        });
    });
};

export const login = (req, resp) => {
    console.log('/login :', getBody(req));
    if (isEmptyBody(req)) {
        fail(resp, 400, 'invalid request data');
        return defaultPromise();
    }
    //TODO
    return defaultPromise();
};
