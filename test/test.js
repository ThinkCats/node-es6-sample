import { encode, decode } from '../src/utils/jwt';
import { test, equal } from '../src/utils/test';

test('test jwt', () => {
    let content = 'string';
    let token = encode(content);
    decode(token).then(result => {
        equal(result, content);
    });
});
