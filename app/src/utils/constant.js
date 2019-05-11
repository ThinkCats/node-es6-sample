export const config = {
    tokenRawSeperator: 'tokenRawSeperator',
    tokenSalt: 'tokenSalt',
    tokenTime: 'tokenTime',
};

export class Token {
    constructor(email, createTime, validDate) {
        this.email = email;
        this.createTime = createTime;
        this.validDate = validDate;
    }

    toString() {
        return `(${this.email}, ${this.createTime}, ${this.validDate})`;
    }
}

export const millsecondsOfOneDay = 86400000;
