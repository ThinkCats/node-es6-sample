import { encode } from '../utils/jwt';
import { createRawData } from '../utils/auth';
import { isEmpty } from '../utils/collection';
import { success, fail, isEmptyBody, getBody } from '../utils/context';

export const refreshToken = (req, resp) => {
    console.log('Req:', getBody(req));
    let oldToken = req.header.token;
    let data = getBody(req);
    let isInvalidParam = (isEmpty(oldToken) || isEmptyBody(req) || isEmpty(data.name));
    if (isInvalidParam) {
        fail(resp, 400, 'invalid request param');
        return;
    }
    let token = encode(createRawData(data));
    success(resp, token);
};

export const register = (req, resp) => {
    let data = getBody(req);
    let isInvalidData = (isEmpty(data) || isEmpty(data.name) || isEmpty(data.password));
    if (isEmptyBody(req) || isInvalidData) {
        fail(resp, 400, 'invalid request');
        return;
    }
};

export const login = (req, resp) => {
    console.log('/login :', getBody(req));
    if (isEmptyBody(req)) {
        fail(resp, 400, 'invalid request data');
        return;
    }
};
