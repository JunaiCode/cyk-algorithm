import { Grammar, Production } from './classes.js'
const d = document;
let grammar = new Grammar(null);


export default function generateCYK() {

}

function getProductions() {
    let productions = [];
    const elementsHTML = d.querySelectorAll(".production");
    elementsHTML.forEach((el) => {
        let aux = [];
        el.childNodes.forEach((el) => {
            if (el.tagName == "TD" && el.childNodes[0].value != '')
                aux.push(el.childNodes[0].value);
        })
        productions.push(aux);
    })
    return productions;
}

function getString() {
    let string = d.querySelector(".inputString").value;
    return string;
}

function CYK(cadena) {
    let matrix = []
    let length = cadena.length + 1
    //Llenar la matriz triangular superior
    for (let i = 0; i <= cadena.length + 1; i++) {
        matrix[i] = []
        for (let j = 0; j <= length; j++) {
            matrix[i][j] = []
        }
        length--;
    }
    console.log(matrix)

    //Poner en los Xi1 cada caracter terminal de la cadena
    for (let i = 1; i <= cadena.length; i++) {
        matrix[i][1] = grammar.findProduction(cadena.charAt(i - 1));
    }
    console.log(matrix)
    length = cadena.length - 1;
    let kConst = 1;
    for (let j = 2; j <= matrix.length; j++) {
        for (let i = 1; i <= length; i++) {
            for (let k = 1; k <= kConst; k++) {
                let first = matrix[i][k]
                let jmin = j - k
                let iplus = i + k
                let second = matrix[iplus][jmin]
                console.log(first)
                console.log(second)
                console.log(iplus + ' ' + jmin)
                console.log(i + ' ' + j)
                if (first.length !== 0 && second.length !== 0) {
                    let prod = first[0] + second[0]
                    let found = grammar.findProduction(prod)
                    if (found.length != 0) {
                        matrix[i][j] = found
                    }
                }
            }
        }
        length--;
        kConst++;
    }
    console.log(matrix)
    let newMatrix = []
    for (let i = 1; i < matrix.length - 1; i++) {
        newMatrix[i - 1] = matrix[i]
    }
    for (let i = 0; i < newMatrix.length; i++) {
        newMatrix[i].shift()
    }
    return newMatrix;
}