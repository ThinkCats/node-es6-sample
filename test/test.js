import { encode, decode } from '../src/utils/jwt';
import { test, equal } from '../src/utils/test';
import { sequelize } from '../src/repository/db';
import User from '../src/repository/user';

test('test jwt', () => {
    let content = 'string';
    let token = encode(content);
    decode(token).then(result => {
        equal(result, content);
    });
});

test('auth db', () => {
    sequelize.authenticate().then(() => {
        console.log('DB auth Success');
    }).catch(err => {
        console.log('DB Error:', err);
        equal(false, true);
    });
});

test('init user table', () => {
    User.sync({ force: false }).then(() => {
        console.log('Init User Table Success');
    }).catch(err => {
        equal('Init User Table', 'Init User Table Error:' + err);
    });
});
