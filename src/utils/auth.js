//默认分隔符,TODO 该敏感数据存储到数据库
const seperator = '^=^';

//创建原始的密钥格式
export function createRawData(rawObj) {
    let name = rawObj.name;
    let pwd = rawObj.password;
    return name + seperator + pwd;
}

//从原始的格式中解析出具体的内容项
export function parseRawData(rawString) {
    let array = rawString.split(seperator);
    let keyObj = {};
    keyObj['name'] = array[0];
    keyObj['password'] = array[1];
    return keyObj;
}
