import jwt from 'jsonwebtoken';

//TODO 该salt敏感数据存储到db中
const salt = 'HelloNodeJWT';

export function encode(content) {
    return jwt.sign(content, salt);
}

export function decode(content) {
    return new Promise((resolve, reject) => {
        jwt.verify(content, salt, (err, decoded) => {
            if (err) {
                reject(err);
            }
            resolve(decoded);
        });
    });
}
