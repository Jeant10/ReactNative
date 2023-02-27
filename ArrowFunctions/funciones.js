
ejecutar = (fnOperacion) => {

    let caja1 = document.getElementById("txtValor1");
    let caja2 = document.getElementById("txtValor2");

    let v1 = parseInt(caja1.value);
    let v2 = parseInt(caja2.value);

    fnOperacion(v1,v2);

}


sumar = (a, b) => {

    let resultado = a + b;

    alert("el resultado es" + resultado);
}


restar = (a, b) =>{

    let resultado = a - b;

    alert("el resultado es" + resultado);

}

buscarMenor = (x,y) => {

    if(x<y){
        alert("el menor es: " + x);
    }
    else{
        alert("el menor es: " + y);
    }

}