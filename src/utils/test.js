export function equal(actual, expect) {
    let result = (actual === expect);
    if (!result) {
        let warn = 'Assert Equal Error:\n'
            + ' expect:' + expect + '\n'
            + ' actual:' + actual;
        console.error(warn);
        throw new Error("Assert Error");
    }
}

export function test(name, func) {
    console.log('---------------');
    console.info('Test Case:', name);
    func();
}
