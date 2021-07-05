const { Block } = require('./block');

class BlockChain {
    constructor() {
        this.chain = [];
    }

    addBlock(data) {
        let index = this.chain.length;
        let prevHash = this.chain.length !== 0 ? this.chain[this.chain.length - 1].hash : 0;
        let block = new Block(index, data, prevHash);
        this.chain.push(block);
    }

    chainIsValid() {
        for(let i = 0; i < this.chain.length; i++){
            if(this.chain[i].hash !== this.chain[i].getHash()){
                return false;
            }
            if(i > 0 && this.chain[i].prevHash !== this.chain[i-1].hash){
                return false;
            }
        }
        return true;
    }
}

const blockChain = new BlockChain();
blockChain.addBlock({sender: "Elidon Demolli", receiver: "Demolli Elidon", amount: 150});
blockChain.addBlock({sender: "Anon Demolli", receiver: "Demolli Anon", amount: 850});
blockChain.addBlock({sender: "Dfg Axc", receiver: "Asd Dsa", amount: 50});
blockChain.addBlock({sender: "Gffds Sdhhf", receiver: "Sdhhf Gffds", amount: 3430});
console.dir(blockChain, { depth: null });

console.log('Validity of BlockChain:', blockChain.chainIsValid());