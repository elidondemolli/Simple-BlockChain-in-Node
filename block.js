const crypto = require('crypto')

class Block {
    constructor(index, data, prevHash) {
        this.index = index;
        this.timestamp = Math.floor(Date.now() / 1000);
        this.data = data;
        this.prevHash = prevHash;
        this.hash = this.getHash();
    }

    getHash() {
        const encrypt = JSON.stringify(this.data) + this.prevHash + this.index + this.timestamp;
        const hash = crypto.createHmac('sha256', 'secret').update(encrypt).digest('hex');
        return hash;
    }
}

module.exports = { Block }