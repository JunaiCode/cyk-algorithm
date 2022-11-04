import { insertNewProduction,insertNewField, applyCYK} from "./ui.js";

const d = document;
d.addEventListener("click",e=>{
    if(e.target.matches(".insertProduction") ||e.target.matches(".insert-gram")){
        insertNewProduction();
    }
    if(e.target.matches(".insertField")){
        insertNewField(e.target);
    }
    
    if(e.target.matches(".applyCYK")){
        applyCYK();
    }
})