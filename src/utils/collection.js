/**
* collection util
**/
export function isNull(obj) {
    return obj == undefined || obj == null;
}

export function isEmpty(str) {
    return (isNull(str) || str.length == 0);
}
