function duplicar(num){
  return num*2
}

function map(arr,fn){
    let newArr=[]
    for(let i=0;i<arr.length;i++){
        newArr.push(fn(arr[i]))
    }return newArr
}

 
function filter(arr,fn){
    let newArr=[]
    for(let i=0;i<arr.length;i++){
        if(fn(arr[i])=== true){
            newArr.push(arr[i])
        }
    }return newArr
}

/*
function contains(arrUObj,num){
    let obj=Object.values(arrUObj)
    let arr=[]
        if(Array.isArray(arrUObj)==true){
            arr.push(arrUObj)
        }
    if(obj.includes(num) || arr.includes(num)){
        return true
    }else{
        return false
    }
}*/
// 
function contains(objeto,valor){
    for(const prop in objeto){
        if(objeto[prop] === valor){
            return true
        }
    }
    return false
}
/*
function cuentaPalabras(str){
    let resultado=str.split(' ').length
    return resultado
}

function cuentaPalabrasReduce(str1,i){
    let resultado=str1+cuentaPalabras(i)
    return resultado
}*/
 function cuentaPalabras(cadena){
    return cadena.split('').length
 }
 function cuentaPalabrasReduce(acum,cadena){
    let acum = acum + cuentaPalabras(cadena)
    return acum
 }
function reduce(arr,inicial,fn){
    let resultado=inicial

    for(let i=0;i<arr.length;i++){
        resultado=fn(resultado,arr[i])
    }
    return resultado
}


function suma(arregloDeNumeros){
    let resultado = reduce(arregloDeNumeros,0,function(num1,num2){return num1+num2})
    return resultado;
}

function every(arreglo,fn){

    return reduce(arreglo,true,function(anterior,valorActual){
        return anterior && fn(valorActual);
    })
}

function any(arreglo,fn){
    return reduce(
        arreglo,
        false,
        function(ant,actual){return ant || fn(actual)}
    )
}