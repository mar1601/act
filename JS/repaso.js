// function saludar(nombre) {
// 	return "hola paaola";
// }
// console.log (saludar());
//hola paaola
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// function saludar(nombre) {
// 	console.log(`Hola ${nombre}`);
// }
// saludar('Paola');
//Hola Paola
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// function saludar(nombre) {
//     console.log(`Hola ${nombre}`)
//  	return nombre;
//  }
//  saludar ('Mar');
//hola paola X veces MAL
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// function incr() {
//     let num = 3;
//     var array = [];
//     for (1, num); 
//       num++;
//       return num;
//     };
//array MAL
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// function range (from,to,step){
//     let array = [];
//    if (from > to) return "Error";

//     for (let i = from; i < to; i += step){
//     array.push(i);
//     } 
//     return array;
// }
//array + indicar de como contar, de dos en dos 3 en 3..
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// function myComida() {
//     setTimeout(function () {
//     console.log("esta es mi comida");  
//  }, 1000); //contador del tiempo 1000 mili segundos = 1 segundo
// }
// function myPostre(params) {
// console.log("este es mi postre");
// }
// myComida();
// myPostre();
//
//construir2 funciones, tarda 1 segundo en ejecutarse asincronia
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// function myComida(callback) {
//     console.log("esta es mi comida");  
//     callback(); //te asegura q sea ejecuencial
// }
// function myPostre(params) {
//     console.log("este es mi postre");
// }
// myComida(myPostre);
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// function getNumero(min, max){
//     return Math.floor(Math.random()*max)+min;
// }

// function getNotaAlumno(){
//     const notas = ["sobresaliente", "notable","bien", "suficiente", "insuficiente"];
//     return notas [getNumero(0,notas.length)];
// }
// const myNota = getNotaAlumno();
// console.log(myNota);
//funcion q return nota random
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                //SINGLE LAYER ABSTRACTION, SEPARATION OF CONCEPTS, SINGLE RESPONSABILITY PRINCIPIE
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//ARRAYS 
    // let array = [2,3,5,7];

    // let mix = [1,"HolaPaola",true,];

    // console.log(mix);

    // console.log(arr.toString());

 //spread (aplanar quita los corchetes de manera directa,se convierte en string)
// let a = [2,3,4];
// let b = [1,5,6];

// console.log(a.toString());
// console.log(b);
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// let a = [];

//insertar numeros a una array
// a.push (2);
// a.push (3);
// a.push (4);
// a.push (5);

// a.pop();//elimina el ultimo numero

// console.log();
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// let a = [];
// a.push (2);
// a.push (3);
// a.push (4);
// a.push (5);
// a.push (6);

// b = a.slice(0,3);
// d = a.slice(3,6);
// e = a.slice(1,1);
// f = a.indexOf(6);//te escribe la posición de la array

// console.log(b)// -> [2,3,4]
// console.log(d)// -> [5,6]
// console.log(e)// -> [2,4,5,6]
// console.log(f)// -> [4]
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//STRING a array

// let a = "a,b,c,d";
// a.split(",");//devuelve en forma array con el separador q indiques 

// console.log(a) //-> ["a","b","c","d"]
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// //ARRAY a string
// let a = "a,b,c,d";
// b= a
//     .split(",")
//     .slice(0,2)
//     .join(); //transforma la array en string

// console.log(b) //-> "a","b"
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// let palabras = [
//     "hola",
//     "hermano",
//     "cocodrilo",
//     "sonreir",
//     "pino"
// ]
// palabras.forEach((e) => a.push(e + "_1" ))
// console.log(a.join());//->hola,hermano,cocodrilo,sonreir,piano 
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// let palabras = [
//     "hola",
//     "hermano",
//     "cocodrilo",
//     "sonreir",
//     "pino"
// ]
// console.log(palabras.find((e)=>e.includes("co")));//-> (mostrar elemento q tenga "co")
// console.log(palabras.indexOf(palabras.find((e)=>e.includes("mano"))));//-> (mostrar q posicion incluye "mano")
// console.log(palabras.filter((e)=>e.includes("a")));//-> (mostrar todas las palabras que tengan "a")
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//OBJETOS

let a = {}
    a.clave1= "hola1";
    a.clave2= "hola2";
    a.clave3= "hola3";
    a.clave4= "hola4";

console.log(a);// -> muestra "clave2"
console.log(Object.keys(a)); //de letras a numeros
console.log(Object.values(a));//valor
console.log(Object.entries(a));//devuelve matriz
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------