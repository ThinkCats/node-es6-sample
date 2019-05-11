import { test, equal } from '../src/utils/test';
import { createRawData, parseRawData, encode, decode } from '../src/utils/auth';

test('test jwt encode & decode', async () => {
    let content = 'string';
    let token = await encode(content);
    console.log('jwt token:', token);
    let result = await decode(token);
    console.log('jwt token decode:', result);
    equal(result, content);
});

test('test token parse', async () => {
    let rawObj = { email: 'testEmail', password: '1234' };
    let data = await createRawData(rawObj);
    console.log('create raw data:', data);
    let parseData = await parseRawData(data);
    console.log('parseRaw Data:', parseData);
    //equal(JSON.stringify(rawObj), JSON.stringify(parseData));
});
