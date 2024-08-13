/*
let titulo = document.querySelector("h1");
//este trae el elemento h1 de html
titulo.innerHTML = "Juego del número secreto";
//esto le da titulo a la página

let parrafo = document.querySelector("p");
parrafo.innerHTML = "Indica un número del 1 al 10";
//este es para dar texto al parrafo p en html
*/

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento,texto){ //llama a un elemento para asignarle texto
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}

function verificarIntento() { //acá se llama a la función de html para definirla
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value); //input es una etiqueta en html

    if(numeroDeUsuario===numeroSecreto){
        asignarTextoElemento("p",`Acertaste el número en ${intentos} ${(intentos===1)?"vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");//aca se trae el elemento del boton reiniciar, por el id, para quitar la funcion deshabilitar una vez que se acierte para poder interactuar con el boton de nuevo juego
    } else{
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento("p","El número secreto es menor");  
        }else{
            asignarTextoElemento("p","El número secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }

    return;
}

function limpiarCaja(){
    let valorCaja = document.querySelector("#valorUsuario").value = ""; //otra forma de traer el elemento a traves del id
    //esto deja el campo vacio, se llama a la funcion arriba si es que se falla
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    //si ya se sortearon todos los numeros
    if(listaNumerosSorteados.length==numeroMaximo){
        asignarTextoElemento("p","Ya se sortearon todos los números posibles");
    }else{

        //si el numero generado está en la lista:
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    //ahora se llaman las funciones para asignar un texto a un elemento de html
    asignarTextoElemento ("h1","Juego del número secreto");
    asignarTextoElemento ("p",`Indica un número del 1 al ${numeroMaximo}`);
    intentos = 1;
    numeroSecreto = generarNumeroSecreto();
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //mostrar mensaje inicial
    //generar numero aleatorio
    //inicializar numero de intentos
    condicionesIniciales();
    //deshabilitar boton nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled","true"); //para habilitar el atributo
}

condicionesIniciales();

//F12 para acceder a comando
// == para comparar ===compara y compara el tipo de dato
//parseInt es una funcion para transformar el valor a numero, antes retornaba un string
//elementoHtml = document.querySelector(elemento); es para traer un elemento del html
//se puede tener mas de un input en html, para ello se puede poner mas atributos en ella como un id
//document.getElementById("valorUsuario").value es para traer el valor del input desde su id
//${(intentos===1)?"vez" : "veces"}`); sirve como un if else comprimido

//en html onclic es una funcion para que hará el boton, en este caso que pasara si se hace clic al boton y esta se especifica acá


//arreglos
//let ejemploArreglo = [];
// para ingresar un elemento es ejemploArreglo.push("ejemplo");
//ejemploArreglo.length muestra la cantidad de elementos
//ejemploArreglo [0] muestra el primer elemento y si se pone 1 el siguiente y asi
//ejemploArreglo