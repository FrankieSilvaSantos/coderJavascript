let contador = 1;

while (contador <= 10) {
    console.log(`Contador: ${contador}`);
    contador++;
}

console.log("");
console.log("Repetição for------------");

for (let contador2 = 1; contador2 <= 10; contador2++) {
    console.log(`Contador: ${contador2}`);
}

console.log("");
console.log("Repetição com array-------------");

const notas = [6.4, 7.5, 8.5, 9, 10];

for (let i = 0; i < notas.length; i++) {
    console.log(`Notas: ${notas[i]}`);
}