let variableSinValor;

let booleano1 = true;
console.log(booleano1);

let booleano2 = false;
console.log(booleano2);

const PI = 3.14;
console.log(PI);

const TAU = (PI * 2);
console.log(TAU)

let booleanoAnd = (booleano1 == booleano2);
console.log(booleanoAnd);

let booleanoNot = !booleano1;
console.log(booleanoNot);

let booleanoMix0 = (booleano1 || booleano2) == (booleano1 || (!booleano1 == !booleano2))
console.log(booleanoMix0)

let incrementarDesp = 2;
let resultadoDesp = incrementarDesp++;
console.log(resultadoDesp);

let incrementarAntes = 2;
let resultadoAntes = ++incrementarAntes;
console.log(resultadoAntes);

let contarHasta10_2 = 0;
for (; contarHasta10_2 !== 10; ) {
  contarHasta10_2++;
}
console.log(contarHasta10_2);

let postI = 0;
let postJ = 0;
for (let i = 0; i < 11 ; i++) {
    postI += postJ++;
}
console.log(postI)

let sumaPares = 0;
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        sumaPares += i;
    }
}
console.log(sumaPares);

let variableValorNumerico = 3;
console.log(variableValorNumerico);

const MiNombre = 'Ane';

const MiNumeroFav = 17;

let booleanoOr = booleano1 || booleano2;
console.log(booleanoOr);

let booleanoMix1 = (booleano1 == (TAU / 2) === PI) || (variableValorNumerico <= MiNumeroFav);
console.log(booleanoMix1);

let seisNoEsNueve = 6 !== 9;
console.log(seisNoEsNueve);

let booleanoMix2 = (variableValorNumerico > 0) || -(MiNumeroFav * TAU);
console.log(booleanoMix2);

let valorSuma = MiNumeroFav + variableValorNumerico;
console.log(valorSuma);

let valorResta = MiNumeroFav - variableValorNumerico;
console.log(valorResta);

let valorMultiplicacion = MiNumeroFav * variableValorNumerico;
console.log(valorMultiplicacion);

let valorDivision = MiNumeroFav / 3;
console.log(valorDivision);

let contarHasta10 = 0;
while (contarHasta10 !== 10) {
    contarHasta10++;
}
console.log(contarHasta10);

let preI = 0;
let preJ = 0;
for (let i = 0; i < 11 ; i++) {
    preI += ++preJ;
}
console.log(preI)

let sumaImpares = 0;
for (let i = 0; i < 10; i++) {
    if (i % 2 !== 0) {
        sumaImpares += i;
    }
}
console.log(sumaImpares);