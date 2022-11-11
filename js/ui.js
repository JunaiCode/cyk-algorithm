import {generateCYK, getFirstSymbol} from "./cyk.js";
const d = document;

function hideElement(selector){
    const $element = d.querySelector(selector);
    $element.classList.add("hidden");
}

function showElement(selector){
    const $element = d.querySelector(selector);
    $element.classList.remove("hidden");
}

//this method displays the matrix used by CYK algorithm 
function showResult(matriz, message){
    const $tbody = d.querySelector(".result-table-body"),
    $title = d.querySelector(".title"),
    $message = d.querySelector(".message");
    for(let i=0;i<matriz.length;i++){
        const tr = d.createElement("tr");
        for (let j = 0; j < matriz[i].length; j++) {
            const td = d.createElement("td");
            td.value = matriz[i][j];
            td.innerText= matriz[i][j];
            tr.appendChild(td);
        }
        $title.innerText = "Matriz Resultante";
        $tbody.appendChild(tr);
    }
    $message.innerText = message;
    showElement(".result-table");
    showElement(".back");
    hideElement(".labelString");
    hideElement(".inputString");
    hideElement(".applyCYK");
}

//this method adds the fields for getting another rule of production
export function insertNewProduction(){
    hideElement(".insert-gram");
    showElement(".insertProduction");
    showElement(".insertString");
    showElement(".dynamic-table");
    const $tbody = d.querySelector(".dynamic-table-body");
    const tr = d.createElement("tr");
    const td = d.createElement("td");
    const input = d.createElement("input");
    const td2 = d.createElement("td");
    const input2 = d.createElement("input");
    input2.setAttribute("type","text");
    td.appendChild(input);
    const button = d.createElement("button");
    const span = d.createElement("span");
    span.innerText = "➔";
    button.classList.add("insertField");
    button.innerText="Añadir Campo";
    input.setAttribute("type","text");
    tr.classList.add('production');
    td.appendChild(input);
    tr.appendChild(td);
    tr.appendChild(span);
    tr.appendChild(td2);
    tr.appendChild(button);
    td2.appendChild(input2);
    $tbody.appendChild(tr);
}

//this method adds a new input field for the rule of production
export function insertNewField(button){
    const td = d.createElement("td");
    const input = d.createElement("input");
    input.setAttribute("type","text");
    td.appendChild(input);
    button.insertAdjacentElement("beforeBegin",td);
}

//this method displays the screnn for getting the string without loosing the data of the grammar
export function insertString(){
    hideElement(".dynamic-table");
    hideElement(".insertProduction");
    hideElement(".insertString");
    showElement(".inputString");
    showElement(".labelString");
    showElement(".applyCYK");
}

//this method cretes the grammar and executes CYK algorithm
export function applyCYK(){
    var solution = generateCYK();
    console.log(getFirstSymbol())
    var symbol = getFirstSymbol();
    //verifies if the initial production produces the string 
    let finalCell = (solution[0].length)-1
    let message = ""
    if(solution[0][finalCell].length == 0){
        message = 'Esta cadena no es generada por la gramática'
    }else {
        if(solution[0][finalCell].includes(symbol)){
        message = '¡Esta cadena es generada por la gramatica!'
        }else{
            message = 'Esta cadena no es generada por la gramática'
        }
    }
    showResult(solution, message)
}