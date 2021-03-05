const CustomError = require("../extensions/custom-error");

const chainMaker = {
    Ch: [],
    getLength() {
     return this.Ch.length;
    },
    addLink(value) {
     this.Ch.push(value === undefined ? '' : String(value));
      return this;
    },
    removeLink(position) {
     try{
        if (isNaN(position) || position < 1 || position > this.Ch.length || Math.round(position) != position) {
            throw new Error();
          }
        this.Ch.splice(position - 1, 1);
        return this;
      }
      catch(ex){
        this.Ch = [];
        throw new Error();
      }
    },
    reverseChain() {
       this.Ch.reverse();
       return this;
    },
    finishChain() {
       let totalValue = this.Ch.map(x => '( ' + x + ' )').join('~~');
       this.Ch = [];
      return totalValue;
    }
  };

module.exports = chainMaker;
