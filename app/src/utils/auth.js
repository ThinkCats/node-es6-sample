import jwt from 'jsonwebtoken';
import { findByCode } from '../repository/config';
import { config, Token } from './constant';

//创建原始的Token格式
export function createRawData(rawObj) {
    let email = rawObj.email;
    let currentTime = (new Date()).getTime();
    return new Promise(async resolve => {
        let result = await findByCode(config.tokenRawSeperator);
        let tokenTimeResult = await findByCode(config.tokenTime);
        let seperator = result.value;
        let tokenTime = tokenTimeResult.value;
        let rawData = email + seperator
            + currentTime + seperator + tokenTime;
        resolve(rawData);
    });
}

//从原始的Token格式中解析出具体的内容项
export function parseRawData(rawString) {
    return new Promise(async resolve => {
        let seperatorConfig = await findByCode(config.tokenRawSeperator);
        let seperator = seperatorConfig.value;
        let array = rawString.split(seperator);
        let email = array[0];
        let createTime = array[1];
        let validDate = array[2];
        let token = new Token(email, createTime, validDate);
        resolve(token);
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

