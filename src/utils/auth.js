import jwt from 'jsonwebtoken';
import Config, { findByCode } from '../repository/config';
import { config } from './constant';

//创建原始的密钥格式
export function createRawData(rawObj) {
    let email = rawObj.email;
    let pwd = rawObj.password;
    return new Promise(async resolve => {
        let result = await findByCode(config.tokenRawSeperator);
        console.log('result:', result);
        let seperator = result.value;
        let rawData = email + seperator + pwd;
        resolve(rawData);
    });
}

//从原始的格式中解析出具体的内容项
export function parseRawData(rawString) {
    return new Promise(async resolve => {
        let seperatorConfig = await findByCode(config.tokenRawSeperator);
        let seperator = seperatorConfig.value;
        let array = rawString.split(seperator);
        let keyObj = {};
        keyObj['email'] = array[0];
        keyObj['password'] = array[1];
        resolve(keyObj);
    });
}

//encode
export function encode(content) {
    return new Promise(async resolve => {
        let saltConfig = await findByCode(config.tokenSalt);
        let signData = jwt.sign(content, saltConfig.value);
        resolve(signData);
    });
}

//decode
export function decode(content) {
    return new Promise(async (resolve, reject) => {
        let saltConfig = await findByCode(config.tokenSalt);
        let salt = saltConfig.value;
        jwt.verify(content, salt, (err, decoded) => {
            if (err) {
                reject(err);
            }
            resolve(decoded);
        });
    });
}

