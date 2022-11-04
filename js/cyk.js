const d = document;

export default function generateCYK(){
    getProductions();
    getString();
}

function getProductions(){
    let productions= [];
    const elementsHTML = d.querySelectorAll(".production");
    elementsHTML.forEach((el)=>{
        let aux = [];
        el.childNodes.forEach((el)=>{
            if(el.tagName == "TD" && el.childNodes[0].value != '')
            aux.push(el.childNodes[0].value);
        })
        productions.push(aux);
    })
    return productions;
}

function getString(){
    let string = d.querySelector(".inputString").value;
    return string;
}