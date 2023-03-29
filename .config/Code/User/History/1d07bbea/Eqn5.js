function factorialIterativo(num){
    let resultado=1
    for(let i=1;i<=num;i++){
        resultado*=i
    }return resultado
}
/*
function factorial(num){
    let resultado=1
    if(num==0){
        return resultado
    }else{
        resultado=num* factorial(num-1)
        return resultado
    }
}*/

//
function factorial(num){

if(num === 0){
    return 1
}return num * factorial(num-1)

}

function fib(num){
    if(num<=1){
        return 1
    }else{
        let n1=fib(num-1)
        let n2=fib(num-2)
        return n1+n2 
    }
}


function factores(num){
    let arr=[]
    for(let i=2;i<=num;i++){
        while(num%i == 0){
            arr.push(i)
            num= num/i
            factores(num)
        }
    }return arr

}