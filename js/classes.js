export class Grammar{
    constructor(productions){
        this.productions = productions
    }

    findProduction(variable){
        let found = []
        for (let i = 0; i < this.productions.length; i++) {
            if(this.productions[i].produces(variable)){
                found.push(this.productions[i].getSymbol())
            }
        }
        return found;
    }
}

export class Production{
    constructor(symbol, productions){
        this.symbol = symbol
        this.productions = productions
    }

    getSymbol(){
        return this.symbol
    }

    produces(variable){
        for (let i = 0; i < this.productions.length; i++) {
            if(variable == this.productions[i]){
                return true;
            }
        }
        return false;
    }
}