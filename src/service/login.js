import { encode } from '../utils/jwt';
import { createRawData } from '../utils/auth';
import { isEmpty } from '../utils/collection';
import { success, fail, getBody, defaultPromise } from '../utils/context';
import User from '../repository/user';

export const refreshToken = async (req, resp) => {
    console.log('Req:', getBody(req));
    let oldToken = req.header.token;
    let data = getBody(req);
    let isInvalidParam = (isEmpty(oldToken) || isEmpty(data)
        || isEmpty(data.email));
    if (isInvalidParam) {
        fail(resp, 400, 'invalid request param');
        return defaultPromise();
    }
    let token = encode(await createRawData(data));
    success(resp, token);
    return defaultPromise();
};

export const register = (req, resp) => {
    let data = getBody(req);
    let isInvalidData = (isEmpty(data) || isEmpty(data.name)
        || isEmpty(data.password) || isEmpty(data.email));
    if (isInvalidData) {
        fail(resp, 400, 'invalid request');
        return defaultPromise;
    }
    let email = data.email;
    return new Promise(async (resolve) => {
        //check user
        let user = await User.findAll({
            where: { email: email }
        });
        if (!isEmpty(user)) {
            throw new Error('email has registed');
        }
        //register
        //TODO password encode

        let result = await User.create({
            name: data.name,
            password: data.password,
            email: email
        });
        success(resp, 'register success');
        resolve(result);
    });
};

export const login = (req, resp) => {
    console.log('/login :', getBody(req));
    let body = getBody(req);
    if (isEmpty(body)) {
        fail(resp, 400, 'invalid request data');
        return defaultPromise();
    }
    //TODO
    return defaultPromise();
};
