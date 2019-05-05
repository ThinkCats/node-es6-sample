import { createRawData, parseRawData, encode, decode } from '../utils/auth';
import { isEmpty } from '../utils/collection';
import { success, fail, getBody, defaultPromise } from '../utils/context';
import User, { findUserByEmail, createUser } from '../repository/user';

export const refreshToken = async (req, resp) => {
    console.log('Req:', getBody(req));
    let oldToken = req.header.token;
    let data = getBody(req);
    let isInvalidParam = (isEmpty(oldToken) || isEmpty(data)
        || isEmpty(data.email));
    if (isInvalidParam) {
        throw new Error('Invalid Request Param');
    }
    let oldRawData = await decode(oldToken);
    let oldTokenClz = await parseRawData(oldRawData);
    let email = oldTokenClz.email;
    if (data.email != email) {
        throw new Error('Please Dont Use the Token of Other People');
    }
    let token = await encode(await createRawData(data));
    success(resp, token);
    return defaultPromise();
};

export const register = async (req, resp) => {
    let data = getBody(req);
    let isInvalidData = (isEmpty(data) || isEmpty(data.name)
        || isEmpty(data.password) || isEmpty(data.email));
    if (isInvalidData) {
        fail(resp, 400, 'invalid request');
        return defaultPromise;
    }
    let email = data.email;
    //check user
    let user = await findUserByEmail(email);
    if (!isEmpty(user)) {
        throw new Error('email has registed');
    }
    //register
    //TODO password encode
    let result = createUser(data.name, data.password, email);
    success(resp, 'register success');
    return new Promise(async (resolve) => {
        resolve(result);
    });
};

export const login = async (req, resp) => {
    console.log('/login :', getBody(req));
    let data = getBody(req);
    if (isEmpty(data)) {
        fail(resp, 400, 'invalid request data');
        return defaultPromise();
    }
    let email = data.email;
    let password = data.password;
    if (isEmpty(email) || isEmpty(password)) {
        throw new Error('Invalid Param');
    }
    let user = await findUserByEmail(email);
    if (isEmpty(user)) {
        throw new Error('User not found, please register');
    }
    let userPassword = user.password;
    //if encode password, should update this equal
    if (password != userPassword) {
        throw new Error('Password is not correct');
    }
    let token = await encode(await createRawData(data));
    success(resp, token);
    return defaultPromise();
};
