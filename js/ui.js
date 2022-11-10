import { Grammar, Production } from "./classes.js";
import generateCYK from "./cyk.js";
const d = document;

function hideElement(selector){
    const $element = d.querySelector(selector);
    $element.classList.add("hidden");
}

function showElement(selector){
    const $element = d.querySelector(selector);
    $element.classList.remove("hidden");
}

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

export function insertNewField(button){
    const td = d.createElement("td");
    const input = d.createElement("input");
    input.setAttribute("type","text");
    td.appendChild(input);
    button.insertAdjacentElement("beforeBegin",td);
}

export function insertString(){
    hideElement(".dynamic-table");
    hideElement(".insertProduction");
    hideElement(".insertString");
    showElement(".inputString");
    showElement(".labelString");
    showElement(".applyCYK");
    createGrammar();
}

function createGrammar(){

    var th = document.querySelector(".dynamic-table-body");
    let grammar = new Grammar();

    for (let i = 0; i < th.children.length; i++) {
        var row = th.children[i]
        var columns = th.children[i].children.length
        for (let j = 0; j < columns-1; j++) {
            var cell = row.children[j]
            if(j==0){
                var input = cell.querySelector('input').value
                var newProduction = new Production(input)
            }else if(j!=1){
                var input = cell.querySelector('input').value
                newProduction.addProduction(input)
            }
            
        }
        grammar.addProduction(newProduction)
    }

    return grammar;
    
}

export function applyCYK(){
    //Ejemplo de volver mensaje
    //showResult(matriz,"¡Esta cadena es generada por la gramatica!");
    //ShowResult();
}