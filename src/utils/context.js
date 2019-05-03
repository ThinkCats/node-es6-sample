import { isEmpty } from './collection';

export function success(resp, msg) {
    resp.status = 200;
    resp.body = msg;
}

export function fail(resp, statusCode, msg) {
    resp.status = statusCode;
    resp.body = msg;
}

export function getBody(req) {
    return req.body;
}

export function defaultPromise(data) {
    return new Promise(resolve => resolve(data));
}
