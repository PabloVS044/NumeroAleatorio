var x = Math.floor(Math.random()*1000 + 1);
var errores = 1;
document.write(x)

function randomizer(){

    if(errores == 10 ){
        alert("Se ha alzanzado el numero maximo de intentos");
    }else{
        if(x == guess.value){
            alert("Felicidades ha descubierto el numero en " + errores + " intentos!!!");
        }else{
            if(x > guess.value){
                alert("El numero es mayor al ingresado");
                errores++;
            }else{
                alert("El numero es menor al ingresado");
                errores++;
            }
        }
    }
    


}


