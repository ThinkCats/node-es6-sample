import jwt from 'jsonwebtoken';

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
