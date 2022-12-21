let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo);

console.log(!! null); // 2 negações mais null = false

console.log(!!('' || null || 0 || ' ')); // 1,a dessas era true

let nome ='';
console.log(nome || 'Desconhecido'); // como a variavel nome está vazia, retorna o 'desconhecido'