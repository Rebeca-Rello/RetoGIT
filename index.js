function calculadoraSuma(op1, op2,op3){
    
            return(op1 + op2 + op3);
      
    }



let resultadosuma=calculadoraSuma(6,3);
console.log(resultadosuma);

  
  
  
  function calculadoraResta(op1, op2){
    
    return(op1 - op2);

}

////Haciendo pruebas



let resultadoresta=calculadoraResta(6,3);
console.log(resultadoresta);

function calculadoraMultiplicacion(op1, op2){
    
        return(op1 * op2);
    
    }
    
    let resultadomulti=calculadoraMultiplicacion(6,3);
    console.log(resultadomulti);

function calculadoraDivision(op1, op2){
    
    return(op1 / op2);

}

let resultadodivi=calculadoraDivision(6,3);
console.log(resultadodivi);

module.exports ={calculadoraSuma,calculadoraResta, calculadoraMultiplicacion, calculadoraDivision };



function cuadrado(op1) {
    
    return op1*op1

}

