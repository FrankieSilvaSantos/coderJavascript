function area(largura,altura) {
    const area = largura * altura;
    if (area > 20) {
    console.log(`Valor acima do permitido ${area}`);
} else {
    return area;
}
}

console.log(area(2,2));
console.log(area(2));
console.log(area());
console.log(area(2,3,4,5,6));
console.log(area(5,5));

console.log("mesma coisa com arrow function-------------")
console.log("");

const area2 = (largura2,altura2) => {
    const resultado = (largura2 * altura2);
    if (resultado > 20) {
        return `Maior que o permitido ${resultado}`;
    } else {
        return resultado;
    }
}

console.log(area2(2,3));
console.log(area2(5,5));
console.log(area2(2));