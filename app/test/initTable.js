import { test, equal } from '../src/utils/test';
import { sequelize } from '../src/repository/db';
import User from '../src/repository/user';
import Config from '../src/repository/config';
import { config } from '../src/utils/constant';

const dbForceUpdate = true;

test('auth db connection', () => {
    sequelize.authenticate().then(() => {
        console.log('DB auth Success');
    }).catch(err => {
        console.log('DB Error:', err);
        equal(false, true);
    });
});

test('init user table structure', () => {
    User.sync({ force: dbForceUpdate }).then(() => {
        console.log('Init User Table Success');
    }).catch(err => {
        equal('Init User Table', 'Init User Table Error:' + err);
    });
});

test('init config table structure and data', () => {
    let configDataList = [{
        code: config.tokenSalt,
        value: 'MySecretSale_yosX123(1%#^sDy2*12d5z)'
    }, {
        code: config.tokenTime,
        value: '10'
    }, {
        code: config.tokenRawSeperator,
        value: '^o^'
    }];
    //force update
    Config.sync({ force: dbForceUpdate }).then(() => {
        console.log('Init User Table Success');
        configDataList.forEach(data => {
            Config.create(data);
        });
    }).catch(err => {
        equal('Init Config Table', 'Init Config Table Error:' + err);
    });
});

