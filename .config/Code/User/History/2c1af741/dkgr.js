function CalculadoraNPI(){
    this.array=[]
    this.resultado=0
}


CalculadoraNPI.prototype.valor=function (){
    return this.resultado    
}


CalculadoraNPI.prototype.agregar= function(num){
    this.array.push(num)
    return this.array
}

/*
CalculadoraNPI.prototype.sumar=function(){
 if(this.resultado==0 && this.array.length>=2){
    let suma=this.array.pop()+this.array.pop()
    this.resultado= suma

    return this.resultado
 }else if(this.resultado != 0){
    let suma= this.resultado+ this.array.pop()
    this.resultado=suma

    return this.resultado
 }else{
    throw 'La calculadoraNPI necesita por lo menos 2 números'
}
 
}*/
CalculadoraNPI.prototype.sumar=function(){
    if(this.array.length > 1){
        let b=this.array.pop()
        let a = this.array.pop()
        this.resultado = a+b
        return this.resultado
    }
    throw 'La calculadoraNPI necesita por lo menos 2 números'
}



CalculadoraNPI.prototype.restar=function(){
    if(this.array.length>=2){
        let num1=this.array.pop()
        let num2=this.array.pop()

        let resta= num2-num1
        this.resultado=resta

        return this.resultado
    }else{
        throw 'La calculadoraNPI necesita por lo menos 2 números'
    }
}

CalculadoraNPI.prototype.multiplicar=function(){
    if(this.array.length>=2 && this.resultado == 0){
        let num1=this.array.pop()
        let num2=this.array.pop()
        let multiplico= num2*num1
        this.resultado=multiplico
        
        return this.resultado
    }else if(this.resultado != 0){
        let multiplico=this.resultado*this.array.pop()
        this.resultado=multiplico

        return this.resultado
    }
    else{
        throw 'La calculadoraNPI necesita por lo menos 2 números'
    }
}


CalculadoraNPI.prototype.dividir= function(){
    if(this.array.length >=2){
        let num1=this.array.pop()
        let num2=this.array.pop()
        let division=num2/num1
        this.resultado= division

        return this.resultado
    }else{
        throw 'La calculadoraNPI necesita por lo menos 2 números'
    }
}


let calculadora=new CalculadoraNPI()