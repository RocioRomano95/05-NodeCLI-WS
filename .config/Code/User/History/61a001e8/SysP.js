 function concatenar(){
    let junto=Array.prototype.slice.call(arguments)
    return junto.join("")
 }

 function invocarFunciones(){
   let respuesta=''

   for(let i=0;i<arguments.length;i++){
     respuesta+=arguments[i]()
   }
   
    return respuesta
 }


 function creadorDeIncrementos(n){
  return function(x){
    return n+x
  }
 }
/*
let invocacionUnica=function(fn){
  let ejecuta=false
  return function(){
    if(!ejecuta){
      ejecuta=true
      return fn()
    }
  }
 
}*/
//otra forma
function invocacionUnica(fn){
  let count=0
  return ()=> {
    if(count ==0){
      count=1;
      return fn()
    }
  }
}

function objetoConClousure(){
  let resultado=0
  obj={
    incremento:function(){return resultado+=1},
    incrementoPor10:function(){return resultado+=10},
    pedirValor:function(){return resultado},
    cambiarValor:function(num){return resultado=num } 
  }
    return obj
}




function ListaDeFuncionesInvitados(arregloInvitados,codigoSecreto){
  let funcionesInvitados=[]
  invitado=''
  for(let i=0;i<arregloInvitados.length;i++){
  funcionesInvitados.push(function(num){
    if(num==codigoSecreto){
      let invitado=arregloInvitados[i]
      return invitado
    }
      else{
        return 'código secreto: invalido'
      }
    }
      );
}  
   
  return funcionesInvitados
}

///me falta devolver invitado 

function armarListaDeInvitados(){
  let listaOficial=[]
  for(let i=0;i<arregloInvitados.length;i++){
    listaOficial.push(arregloInvitados[i])
  }
  return listaOficial
}