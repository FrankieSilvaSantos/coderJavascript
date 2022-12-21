const nums = [1,2,3,4,5,6,7,8,9,10];

for (x in nums) {        // break nao age sobre o bloco IF
    if(x == 5) {
        break;
    }
    console.log(`Indice: ${x}  valor: ${nums[x]}`);
}

console.log("");
console.log("");
console.log("Usando continue---------");

for (y in nums) {
    if(y == 5) {
        continue; // interrompe a repetiçao atual e passa para a proxima (no caso pulou o valor do indice 5)
    }
     console.log(`Indice: ${y}  valor: ${nums[y]}`);
}