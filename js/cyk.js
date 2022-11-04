const d = document;

export default function generateCYK(){
    getProductions();
}

function getProductions(){
    let productions= [];
    const elementsHTML = d.querySelectorAll(".production");
    elementsHTML.forEach((el)=>{
        let aux = [];
        el.childNodes.forEach((el)=>{
            if(el.tagName == "TD")
            aux.push(el.childNodes[0].value);
        })
        productions.push(aux);
    })
    return productions;
}