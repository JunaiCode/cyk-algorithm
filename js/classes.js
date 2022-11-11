export class Grammar{
    /*constructor(productions){
        this.productions = productions
    }*/

    constructor(){
        this.productions = []
    }

    getFProduction(){
        return this.productions[0];
    }

    addProduction(production){
        this.productions.push(production)
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
    /*constructor(symbol, productions){
        this.symbol = symbol
        this.productions = productions
    }*/

    constructor(symbol){
        this.symbol = symbol
        this.productions = []
    }

    addProduction(production){
        this.productions.push(production)
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